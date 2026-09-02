import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(
        { configured: false, message: 'Kaggle ist nicht konfiguriert.' },
        { status: 404 },
    );
}

export const POST = GET;
