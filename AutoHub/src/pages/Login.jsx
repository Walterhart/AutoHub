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
  if(localStorage.getItem("user"))
  {

    return redirect("/host")
  }
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data)
    return redirect(pathname);

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
