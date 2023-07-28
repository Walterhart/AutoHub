import { redirect } from "react-router-dom"
export async function requireAuth() {
  const user = localStorage.getItem("user")
  
    // work around for mirage js issue with not adhere to fetch specifications for react router 6.4
    // capture response

    if (!user) {
      return redirect("/login?message=Login in order to view this page");
    }
  
    return null;
  }
