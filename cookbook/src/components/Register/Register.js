import React, { useState } from "react";
import logo from "../../logo-color.png";

const Register = ({ onRouteChange }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  const [registerError, setRegisterError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password || !name) {
        setErrorMessage("Please Complete All Fields");
        setRegisterError(true);
        return;
      }
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        console.log(response);
        // handle error response here
        console.log(
          "!response.ok entered. Successful error message on unsuccessful registration"
        );
        // setRegisterError(true);
        if (response.status === 400) {
          setRegisterError(true);
          setErrorMessage("Email already registered");
        }
        throw new Error("Failed to register");
      }
      setErrorMessage("");
      setRegisterError(false);

      const data = await response.json();
      // Assuming your backend returns a JWT token upon successful sign-in
      const { token } = data;
      // Store the token in localStorage or sessionStorage for future authenticated requests
      localStorage.setItem("token", token);
      // Do something with the user data, such as updating state or redirecting to another page
      // console.log("Successfully registered:", user);
      // Route to user home page
      onRouteChange("grocery");
      // console.log("registered");
    } catch (error) {
      // Handle any errors that occur during the fetch request
      console.error("Error signing in:", error.message);
    }

    // fetch("http://localhost:3000/register", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: this.state.name,
    //     email: this.state.email,
    //     password: this.state.password,
    //   }),
    // })
    //   .then((resonse) => resonse.json())
    //   .then((data) => {
    //     if (data.id) {
    //       this.props.onRouteChange("main");
    //     }
    //   });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 pb-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-40 w-auto border rounded"
          src={logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      {registerError && (
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm bg-red-100 rounded">
          <p>{errorMessage}</p>
        </div>
      )}

      <form
        className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={handleRegister}
      >
        {/* <form className="space-y-6" action="#" method="POST"> */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          {/* <div className="flex items-center justify-between"> */}
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          {/* <div className="text-sm"> */}
          {/* <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a> */}
          {/* </div> */}
          {/* </div> */}
          <div className="mt-2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-2">
          <button
            // onClick={handleRegister}
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
        {/* </form> */}
      </form>
    </div>
  );
};

export default Register;
