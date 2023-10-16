import { redirect } from "react-router-dom"
export async function requireAuth() {
  const user = localStorage.getItem("user")
  
    if (!user) {
      return redirect("/login?message=Login in order to view this page");
    }
;
    const userData = JSON.parse(user);

    if (!userData || !userData.user || !userData.user.uid) {
      return redirect("/login?message=Login in order to view this page");
    }


    return null;
  }
