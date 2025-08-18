import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    
    // Validate required fields
    const requiredFields = [
      'email', 'password', 'businessName', 'businessType', 'category',
      'description', 'ownerName', 'phone', 'address', 'city', 'services'
    ]
    
    const missingFields = requiredFields.filter(field => !payload[field])
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: `Missing required fields: ${missingFields.join(', ')}`,
          details: null
        },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(payload.email)) {
      return NextResponse.json(
        { 
          error: "Invalid email format",
          details: null
        },
        { status: 400 }
      )
    }
    
    // Validate password length
    if (payload.password.length < 8) {
      return NextResponse.json(
        { 
          error: "Password must be at least 8 characters long",
          details: null
        },
        { status: 400 }
      )
    }
    
    // Validate terms agreement
    if (!payload.agreeToTerms) {
      return NextResponse.json(
        { 
          error: "You must agree to the terms and conditions",
          details: null
        },
        { status: 400 }
      )
    }

    // Normalize phone numbers
    if (payload.phone) {
      payload.phone = payload.phone.replace(/\D/g, '')
    }
    if (payload.whatsapp) {
      payload.whatsapp = payload.whatsapp.replace(/\D/g, '')
    }

    // Prepare the request to your backend API
    const backendResponse = await fetch('http://localhost:3001/api/auth/register/vendor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json()
      return NextResponse.json(
        { 
          error: errorData.error || errorData.message || 'Registration failed',
          details: errorData.details || null
        },
        { status: backendResponse.status }
      )
    }

    const data = await backendResponse.json()
    
    return NextResponse.json(
      { 
        message: "Vendor registration successful", 
        data 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Vendor registration error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error : null
      },
      { status: 500 }
    )
  }
}