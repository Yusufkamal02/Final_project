import UserLayout from "@/Layouts/UserLayout";
import { Link } from "@inertiajs/react";
import React from 'react';

const Show = ({ user }) => {

  return (
    <UserLayout>
      <div>
        <a href="/master/users">
          <button className="bg-yellow-500 px-3 py-2 rounded-md text-white">
            Back
          </button>
        </a>
        <h1>User Detail</h1>
        <p>First Name: {user.firstname}</p>
        <p>Last Name: {user.lastname}</p>
        <p>Email: {user.email}</p>
      </div>
    </UserLayout>
  );
};

export default Show;
