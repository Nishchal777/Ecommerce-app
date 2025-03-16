import { useState } from "react";
import React from "react";

function Login() {
    const onSubmitHandler = async (e) =>{
        e.preventDefault();
    }
  const [currentState, setCurrentState] = useState("Log In");
  return (
    <form onSubmit={onSubmitHandler}
      action=""
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
      </div>
      {currentState === "Log In" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          name=""
          id=""
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        name=""
        id=""
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        name=""
        id=""
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your Password</p>

        {currentState === "Log In" ? (
          <p
            onClick={() => setCurrentState("Sign In")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Log In")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-red-600  text-white rounded-lg px-8 py-2 mt-4">
        {currentState === "Log In" ? "Log In" : "Sign In"}
      </button>
    </form>
  );
}

export default Login;
