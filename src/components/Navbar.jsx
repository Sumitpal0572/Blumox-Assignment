import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 text-white">
      <h1 className="text-2xl font-semibold">Fly Globe</h1>
      <ul className="flex gap-6 text-sm">
        <li>Home</li>
        <li>First</li>
        <li>Business</li>
        <li>About Us</li>
        <li>Contact us</li>
      </ul>
      <div className="flex gap-4 text-sm">
        <span>UK | ENG</span>
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </nav>
  );
};

export default Navbar;
