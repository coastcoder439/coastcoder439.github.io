import { NextResponse } from 'next/server';

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'coastcoder439';

export async function GET() {
    const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = 'Bearer ' + process.env.GITHUB_TOKEN;
    try {
        const [userResponse, reposResponse, eventsResponse] = await Promise.all([
            fetch('https://api.github.com/users/' + username, { headers, next: { revalidate: 3600 } }),
            fetch('https://api.github.com/users/' + username + '/repos?per_page=100', { headers, next: { revalidate: 3600 } }),
            fetch('https://api.github.com/users/' + username + '/events?per_page=20', { headers, next: { revalidate: 900 } }),
        ]);
        if (!userResponse.ok || !reposResponse.ok) {
            return NextResponse.json({ error: 'GitHub nicht erreichbar.' }, { status: 502 });
        }
        const user = await userResponse.json();
        const repos = await reposResponse.json();
        const events = eventsResponse.ok ? await eventsResponse.json() : [];
        return NextResponse.json({
            data: {
                username,
                followers: user.followers,
                publicRepos: user.public_repos,
                totalStars: repos.reduce((sum: number, repo: { stargazers_count: number }) => sum + repo.stargazers_count, 0),
                recentActivity: events,
            },
        });
    } catch {
        return NextResponse.json({ error: 'GitHub nicht erreichbar.' }, { status: 502 });
    }
}
