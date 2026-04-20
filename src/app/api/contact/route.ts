import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // Parse JSON — return 400 for malformed payloads (client error, not server error)
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!data.name || !data.email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Production: integrate with Resend, SendGrid, or similar.
  // Do NOT log PII (name/email) — log only a sanitized audit event.
  console.log('[contact] Submission received', { ts: new Date().toISOString() })

  return NextResponse.json({ success: true }, { status: 200 })
}
