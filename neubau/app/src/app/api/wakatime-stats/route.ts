import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.WAKATIME_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ configured: false }, { status: 404 });
    }

    const headers = { Authorization: 'Basic ' + Buffer.from(apiKey).toString('base64') };
    try {
        const [summaryResponse, allTimeResponse] = await Promise.all([
            fetch('https://wakatime.com/api/v1/users/current/summaries?range=last_7_days', {
                headers,
                next: { revalidate: 3600 },
            }),
            fetch('https://wakatime.com/api/v1/users/current/all_time_stats', {
                headers,
                next: { revalidate: 3600 },
            }),
        ]);

        if (!summaryResponse.ok || !allTimeResponse.ok) {
            return NextResponse.json({ configured: true, error: 'WakaTime nicht erreichbar.' }, { status: 502 });
        }

        const summary = await summaryResponse.json();
        const allTime = await allTimeResponse.json();
        return NextResponse.json({
            configured: true,
            data: summary.data,
            allTime: allTime.data,
        });
    } catch {
        return NextResponse.json({ configured: true, error: 'WakaTime nicht erreichbar.' }, { status: 502 });
    }
}
