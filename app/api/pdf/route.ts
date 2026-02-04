
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return new NextResponse(`Failed to fetch PDF: ${response.statusText}`, { status: response.status });
        }

        const contentType = response.headers.get('content-type') || 'application/pdf';

        // Create a new response with the body stream
        const newResponse = new NextResponse(response.body, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                // Optional: Add cache headers if desired
                'Cache-Control': 'public, max-age=3600',
            },
        });

        return newResponse;
    } catch (error) {
        console.error('Error proxying PDF:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
