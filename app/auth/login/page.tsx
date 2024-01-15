"use client";
import Input from "../../component/input";
import React from "react";
import Button from "../../component/Button";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="p-5">
      <h1 className="pb-5 font-bold text-2xl">Login</h1>
      <Input
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <Input
        label="password"
        type="password"
        name="Password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <Button
        label="Login"
        onClick={handleLogin}
        disabled={!email || !password}
      />
      <p>sign up </p>
    </div>
  );
}
