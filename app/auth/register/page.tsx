"use client";
import Input from "../../component/input";
import React from "react";
import Button from "../../component/Button";

export default function RegisterPage() {
  const [username, setusername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setusername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="p-5">
      <h1 className="pb-5 font-bold text-2xl">Register</h1>
      <Input
        label="Username"
        type="text"
        name="username"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Enter your username"
      />
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
        type="text"
        name="Password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <Button
        label="Register"
        onClick={handleLogin}
        disabled={!email || !password}
      />
      <p>Login</p>
    </div>
  );
}
