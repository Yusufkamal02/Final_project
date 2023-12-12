import React from "react";
import Sidebar from "./Sidebar";
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <nav>
        <div className="flex gap-10">
          <p>Home</p>
          <p>My Cart</p>
          <p>Saved</p>
        </div>
      </nav>
    </div>
  )
}

export default Profile