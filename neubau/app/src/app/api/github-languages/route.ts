import { NextResponse } from 'next/server';

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'coastcoder439';

export async function GET() {
    const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = 'Bearer ' + process.env.GITHUB_TOKEN;
    try {
        const response = await fetch('https://api.github.com/users/' + username + '/repos?per_page=100', {
            headers,
            next: { revalidate: 3600 },
        });
        if (!response.ok) return NextResponse.json({ error: 'GitHub nicht erreichbar.' }, { status: 502 });
        const repos = await response.json();
        const counts: Record<string, number> = {};
        for (const repo of repos) {
            if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
        }
        const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
        const data = Object.entries(counts)
            .map(([name, count]) => ({ name, percent: total ? Math.round((count / total) * 10000) / 100 : 0 }))
            .sort((a, b) => b.percent - a.percent)
            .slice(0, 6);
        return NextResponse.json({ data });
    } catch {
        return NextResponse.json({ error: 'GitHub nicht erreichbar.' }, { status: 502 });
    }
}
