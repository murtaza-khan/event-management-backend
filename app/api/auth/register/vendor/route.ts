import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Get JSON data from FormData
    const data = formData.get('data');
    if (!data) {
      return NextResponse.json(
        { error: "Missing data payload" },
        { status: 400 }
      );
    }
    
    // Parse JSON payload
    const payload = JSON.parse(data as string);
    
    // Get files
    const businessLicense = formData.get('businessLicense');
    const portfolioFiles = formData.getAll('portfolio');
    
    // Process files (this would be your actual file upload logic)
    // For demonstration, we'll just add placeholder values
    if (businessLicense) {
      payload.businessLicense = "business_license_file_path.jpg";
    } else {
      payload.businessLicense = null;
    }
    
    payload.portfolio = [];
    portfolioFiles.forEach((file, index) => {
      payload.portfolio.push(`portfolio_file_${index + 1}.jpg`);
    });
    
    // Here you would typically:
    // 1. Save files to storage (S3, filesystem, etc.)
    // 2. Save payload to database
    // 3. Process custom packages
    
    // Remove unused fields
    delete payload.confirmPassword;
    
    // Convert empty strings to null for all optional fields
    const optionalFields = [
      'perHeadPrice', 'venueRental', 'minGuests', 'maxGuests', 'decorationCharges',
      'parkingCapacity', 'bridalPackage', 'partyMakeup', 'engagementPackage',
      'mehndiBridal', 'trialMakeup', 'airbrushMakeup', 'weddingPackage',
      'preWeddingShoot', 'engagementCoverage', 'mehndiBarat', 'cinematography',
      'albumPrinting', 'perPlateBasic', 'perPlatePremium', 'perPlateLuxury',
      'liveCounters', 'dessertStation', 'serviceCharges', 'stageDecoration',
      'hallDecoration', 'flowerDecoration', 'lightingPackage', 'backdropRental',
      'djServices', 'liveMusic', 'soundSystem', 'lightingEffects', 'equipmentRental',
      'basicPackage', 'premiumPackage', 'luxuryPackage', 'customization',
      'earlyBirdDiscount', 'seasonalOffer', 'packageDeal', 'minimumBooking',
      'advancePayment'
    ];
    
    optionalFields.forEach(field => {
      if (payload[field] === "") {
        payload[field] = null;
      }
    });
    
    // Convert customPackages to array if it's null
    if (!payload.customPackages) {
      payload.customPackages = [];
    }
    
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