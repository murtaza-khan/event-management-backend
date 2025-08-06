// lib/api.ts
export async function authFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = localStorage.getItem("authToken");
  
  const headers = {
    ...options.headers,
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
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