import { redirect } from "react-router-dom"
export async function requireAuth() {
    const isLoggedIn = false;
  
    // work around for mirage js issue with not adhere to fetch specifications for react router 6.4
    // capture response

    if (!isLoggedIn) {
      const response = redirect("/login");
      response.body = true; 
      return response;
    }
  
    return null;
  }
