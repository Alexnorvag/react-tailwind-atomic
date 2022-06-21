import { useNavigate } from "react-router-dom";

import { AuthLayout } from "../layouts(templates)/auth";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      page="Hi, User. 👋 Let's login"
      inputs={[
        {
          id: "username",
          label: "Username",
          placeholder: "username",
        },
        {
          id: "password",
          label: "Password",
          placeholder: "password",
        },
      ]}
      buttons={[
        {
          id: "login",
          label: "Login",
          onSubmit: () => {
            navigate("/");
          },
        },
      ]}
    />
  );
};
