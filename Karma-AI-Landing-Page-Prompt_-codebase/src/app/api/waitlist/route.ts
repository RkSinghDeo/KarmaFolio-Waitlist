import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'edge'

const waitlistSchema = z.object({
  email: z.string().email('Please provide a valid email address')
})

// Google Form endpoint + entry field for email
const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSfJxTjO4GdLIXwT3Unu7CIHT8_ztKRgw9J0oopzqOsYjPhRbg/formResponse';
const GOOGLE_FORM_EMAIL_ENTRY_ID = 'entry.163784534'; // Updated to correct field ID!

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = waitlistSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.errors[0]?.message || 'Invalid input' },
        { status: 400 }
      )
    }
    const { email } = result.data
    // Log email for now - can be easily replaced with database/email service
    console.log('Waitlist entry received:', { email })

    // --- Submit email to Google Form ---
    try {
      const googleRes = await fetch(GOOGLE_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: new URLSearchParams({
          [GOOGLE_FORM_EMAIL_ENTRY_ID]: email
        }).toString(),
      });
      // It's normal for Google Form POST to return a CORS error, just suppress
      // The response is always a redirect/HTML, we do not need it
    } catch (err) {
      // Silently ignore issues unless you want to log
      console.error('Failed to submit to Google Form', err)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request format' },
      { status: 400 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PATCH() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  )
}