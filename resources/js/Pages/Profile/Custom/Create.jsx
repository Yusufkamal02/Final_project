// resources/js/Pages/Profile/Create.jsx
import UserLayout from '@/Layouts/UserLayout';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Create = ({ roles }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    city: '',
    address: '',
    email: '',
    phonenumber: '',
    birthday: '',
    organization: '',
    departemen: '',
    postalcode: '',
    role_id: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement logic to create a new user
    try {
      await Inertia.post('/master/users', formData);
      console.log('User created successfully');
      // Redirect or perform any other actions after successful creation
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error, display a message, or perform other actions
    }
  };

  return (
    <UserLayout>
      <div>
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          {/* Input fields */}
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Password :
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Phone Number:
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Birthday:
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Organization:
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Department:
            <input
              type="text"
              name="departemen"
              value={formData.departemen}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Postal Code:
            <input
              type="text"
              name="postalcode"
              value={formData.postalcode}
              onChange={handleChange}
            />
          </label>
          <br />

          {/* Dropdown for Role selection */}
          <label>
            Role:
            <select
              name="role_id"
              value={formData.role_id}
              onChange={handleChange}
            >
              <option value="" disabled>Select a role</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </label>
          <br />

          <button type="submit">Create User</button>
        </form>
      </div>
    </UserLayout>
  );
};

export default Create;
