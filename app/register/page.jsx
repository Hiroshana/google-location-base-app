import React from "react";
import Link from "next/link";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <RegistrationForm />
      <p className="my-3">
         Already have an account?
        <Link className="mx-2 underline" href="/home">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
