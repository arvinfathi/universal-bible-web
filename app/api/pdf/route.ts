
import { NextRequest, NextResponse } from 'next/server';
import { BIBLE_INDEX } from '../../../data/bibleIndex';

// Only proxy PDFs listed in the index, so this route can't be used to fetch arbitrary URLs.
const ALLOWED_URLS = new Set(
    BIBLE_INDEX.flatMap(lang => lang.versions.map(version => version.filename))
);

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    if (!ALLOWED_URLS.has(url)) {
        return new NextResponse('Unknown PDF', { status: 404 });
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return new NextResponse(`Failed to fetch PDF: ${response.statusText}`, { status: response.status });
        }

        const headers: Record<string, string> = {
            // GitHub serves release assets as application/octet-stream
            'Content-Type': 'application/pdf',
            'Cache-Control': 'public, max-age=3600',
        };

        // Forwarding the size lets the reader show download progress.
        // Skip it if the upstream body was compressed, since fetch decodes it and the length no longer matches.
        const contentLength = response.headers.get('content-length');
        if (contentLength && !response.headers.get('content-encoding')) {
            headers['Content-Length'] = contentLength;
        }

        return new NextResponse(response.body, { status: 200, headers });
    } catch (error) {
        console.error('Error proxying PDF:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
