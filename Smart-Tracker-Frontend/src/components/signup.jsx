import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@nextui-org/react";

import axios from "axios";

const Input = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <input
      {...props}
      className="w-full px-3 py-2 pl-10 text-green-900 bg-white border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
    />
    <Icon
      className="absolute top-1/2 left-3 transform -translate-y-1/2 text-green-500"
      size={18}
    />
  </div>
);

const CustomButton = ({ children, className, ...props }) => (
  <NextUIButton
    className={`w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </NextUIButton>
);

export default function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //REGISTER
  const register = async () => {
    try {
      ///EXAMPLE OF A FETCH
      // const data = await fetch("http://localhost:8081/api/users/signup", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // });

      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }
      );

      if (response.data.id) {
        localStorage.setItem("userId", response.data.id);
        console.log(response.data.id);
        navigate("/budget");
        window.location.reload();
      }

      if (response.data.message) {
        alert(response.data.message);
      }
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here

    if (password != confirmPassword) {
      //toastify or make your own component
      alert("Make sure that passwords match");
    } else {
      try {
        register();
      } catch (error) {}
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-450 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-black mb-1"
              >
                First Name
              </label>
              <Input
                icon={User}
                id="first-name"
                name="firstname"
                type="text"
                autoComplete="first-name"
                required
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-black mb-1"
              >
                Last Name
              </label>
              <Input
                icon={User}
                id="last-name"
                name="lastname"
                type="text"
                autoComplete="last-name"
                required
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-green-700 mb-1"
              >
                Email address
              </label>
              <Input
                icon={Mail}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black mb-1"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  icon={Lock}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-500 hover:text-green-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-green-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  icon={Lock}
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-500 hover:text-green-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <Button className="bg-green-600" type="submit">
              Sign up
            </Button>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-green-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
