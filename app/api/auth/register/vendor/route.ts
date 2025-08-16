import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'email', 'password', 'businessName', 'businessType', 'category',
      'description', 'ownerName', 'phone', 'address', 'city', 'services'
    ];
    
    const missingFields = requiredFields.filter(field => !payload[field]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }
    
    // Validate password length
    if (payload.password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }
    
    // Validate terms agreement
    if (!payload.agreeToTerms) {
      return NextResponse.json(
        { error: "You must agree to the terms and conditions" },
        { status: 400 }
      );
    }
    
    // Here you would typically:
    // 1. Save files to storage (S3, filesystem, etc.) - URLs are already in the payload
    // 2. Save payload to database
    // 3. Process custom packages
    
    console.log("Received payload:", payload);
    
    return NextResponse.json(
      { 
        message: "Vendor registration successful", 
        data: payload 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Vendor registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}