import React from "react";
import { Link } from "react-router-dom";

//top navbar
import NavbarComp from "../components/Navbar";

export default function Home() {
  return (
    <div>
      {/**top navbar */}
      <NavbarComp />
      <div className="text-center">
        <h1 className=" text-muted mt-5 ">Welcome to ChatBox</h1>

        <button
          type="button"
          class="btn btn-outline-secondary btn-lg btn-block mt-3 "
        >
          <Link to="/chat" style={{ textDecoration: "none", color: "black" }}>
            Create Chat
          </Link>
        </button>
      </div>
    </div>
  );
}
