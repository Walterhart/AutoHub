import React from "react";
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  console.log(pathname);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", JSON.stringify(true));
    const response = redirect(pathname);
    // work around for mirage js issue with not adhere to fetch specifications for react router 6.4
    // capture response
    response.body = true;
    return response;
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <div className="login-container">
      {message && <h3 className="danager">{message}</h3>}
      <h1>Sign in to your account</h1>
      {errorMessage && <h3 className="danager">{errorMessage}</h3>}

      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
