const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

// Auth functions
export async function authFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  // For server-side usage, we need to handle token differently
  if (typeof window === 'undefined') {
    // Server-side - you might want to handle this differently
    // For now, just do a regular fetch
    return fetch(url, options);
  }

  const token = localStorage.getItem("authToken");
  
  const headers = {
    ...options.headers,
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    // Token expired or invalid
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.href = "/auth/login";
    throw new Error("Session expired. Please log in again.");
  }

  return response;
}

// Vendor API functions
export interface Vendor {
  _id: string
  userId?: {
    _id: string
    email: string
    firstName: string
    lastName: string
    phone: string
  }
  businessName: string
  businessType: string
  category: string
  description: string
  establishedYear: number
  ownerName: string
  phone: string
  whatsapp: string
  website?: string
  address: string
  city: string
  area: string
  services: string
  pricing?: {
    perHeadPrice?: string
    venueRental?: string
    minGuests?: string
    maxGuests?: string
    decorationCharges?: string
    parkingCapacity?: string
    bridalPackage?: string
    partyMakeup?: string
    engagementPackage?: string
    mehndiBridal?: string
    trialMakeup?: string
    airbrushMakeup?: string
    weddingPackage?: string
    preWeddingShoot?: string
    engagementCoverage?: string
    mehndiBarat?: string
    cinematography?: string
    albumPrinting?: string
    perPlateBasic?: string
    perPlatePremium?: string
    perPlateLuxury?: string
    liveCounters?: string
    dessertStation?: string
    serviceCharges?: string
    stageDecoration?: string
    hallDecoration?: string
    flowerDecoration?: string
    lightingPackage?: string
    backdropRental?: string
    djServices?: string
    liveMusic?: string
    soundSystem?: string
    lightingEffects?: string
    equipmentRental?: string
    basicPackage?: string
    premiumPackage?: string
    luxuryPackage?: string
    customization?: string
  }
  offers?: {
    earlyBirdDiscount?: string
    seasonalOffer?: string
    packageDeal?: string
    minimumBooking?: string
    advancePayment?: string
    cancellationPolicy?: string
  }
  businessLicense?: string
  portfolio: string[]
  customPackages?: string[]
  isVerified: boolean
  rating: number
  reviewCount: number
  createdAt: string
  updatedAt: string
}

export interface VendorFilters {
  category?: string
  city?: string
  minPrice?: number
  maxPrice?: number
  capacity?: string
  venueType?: string
  amenities?: string[]
}

export async function fetchVendors(filters: VendorFilters = {}): Promise<Vendor[]> {
  const { category, city, minPrice, maxPrice, capacity, venueType, amenities } = filters
  const params = new URLSearchParams()
  
  if (category) params.append("category", category)
  if (city) params.append("city", city)
  // Add more filters as needed
  
  const url = `${API_BASE_URL}/api/vendors?${params.toString()}`
  
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error("Failed to fetch vendors:", error)
    return []
  }
}

export async function fetchVendorById(id: string): Promise<Vendor | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/vendors/${id}`, {
      next: { revalidate: 60 }
    })
    
    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error("Failed to fetch vendor:", error)
    return null
  }
}

export async function fetchFeaturedVendors(limit: number = 6): Promise<Vendor[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/vendors/featured?limit=${limit}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error("Failed to fetch featured vendors:", error)
    return []
  }
}

export async function searchVendors(query: string, filters: VendorFilters = {}): Promise<Vendor[]> {
  const { category, city } = filters
  const params = new URLSearchParams()
  
  if (query) params.append("q", query)
  if (category) params.append("category", category)
  if (city) params.append("city", city)
  
  const url = `${API_BASE_URL}/api/vendors/search?${params.toString()}`
  
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error("Failed to search vendors:", error)
    return []
  }
}

// Auth-related API functions
export async function login(email: string, password: string): Promise<{ token: string; user: any }> {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return response.json();
}

export async function register(userData: any): Promise<{ token: string; user: any }> {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Registration failed');
  }

  return response.json();
}

export async function getCurrentUser(token: string): Promise<any> {
  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  return response.json();
}

// Utility function to check if user is authenticated (client-side only)
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('authToken');
}

// Utility function to get auth token (client-side only)
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('authToken');
}

// Utility function to logout (client-side only)
export function logout(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  window.location.href = '/auth/login';
}