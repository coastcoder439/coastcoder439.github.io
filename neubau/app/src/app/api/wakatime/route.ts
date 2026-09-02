import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.WAKATIME_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ configured: false }, { status: 404 });
    }

    try {
        const response = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
            headers: { Authorization: 'Basic ' + Buffer.from(apiKey).toString('base64') },
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            return NextResponse.json({ configured: true, error: 'WakaTime nicht erreichbar.' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ configured: true, error: 'WakaTime nicht erreichbar.' }, { status: 502 });
    }
}
