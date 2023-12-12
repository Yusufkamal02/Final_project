// resources/js/Pages/Profile/Edit.jsx
import UserLayout from '@/Layouts/UserLayout';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ authenticatedUser, roles, userImageUrl, csrf_token }) => {
  const {
    firstname,
    lastname,
    city,
    address,
    email,
    phonenumber,
    birthday,
    organization,
    institution,
    postalcode,
    role_id,
    gambar,
  } = authenticatedUser;

  const [formData, setFormData] = React.useState({
    firstname,
    lastname,
    city,
    address,
    email,
    phonenumber,
    birthday,
    organization,
    institution,
    postalcode,
    role_id: role_id.toString(),
    gambar,
    newImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Membuat URL data untuk pratinjau gambar
    const imageURL = URL.createObjectURL(file);

    setFormData((prevData) => ({
      ...prevData,
      newImage: file,
      imageURL,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implementasi logika untuk memperbarui data pengguna
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('newImage', formData.newImage);

      // Menambahkan data formulir lainnya ke FormData
      Object.keys(formData).forEach((key) => {
        if (key !== 'newImage' && key !== 'imageURL') {
          formDataWithImage.append(key, formData[key]);
        }
      });

      await Inertia.post(`/master/users/${authenticatedUser.id}`, formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRF-TOKEN': csrf_token, // Use the provided csrf_token prop
          '_method': 'POST'
        },
      });

      console.log('Data pengguna berhasil diperbarui');
      // Mengarahkan atau melakukan tindakan lain setelah pembaruan berhasil
    } catch (error) {
      console.error('Error updating user data:', error);
      // Menangani kesalahan, menampilkan pesan, atau melakukan tindakan lainnya
    }
  };

  const handleCancel = () => {
    // Kembali ke halaman sebelumnya menggunakan Inertia
    Inertia.visit('/');
  };
  return (
    <UserLayout>
      <h1>Edit User</h1>
      {/* <form onSubmit={handleSubmit} >
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

          <label>
            Role:
            <select
              name="role_id"
              value={formData.role_id}
              onChange={handleChange}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </label>
          <br />

          <button type="submit">Update</button>
        </form> */}

      <form className="w-full my-8" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="hidden" name="_token" value={csrf_token} />
        <div className="flex justify-between my-3">
          <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        </div>

        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="md:col-span-4 col-span-12 rounded-sm w-full">
            <div className="grid grid-col-12 gap-x-4 w-full">
              {/* <div className="col-span-12 bg-white p-6">
                <img src={userImageUrl} alt="Profile Belum Tersedia" className="w-2/3 rounded-lg" />
                input
              </div> */}
              <div className="lg:col-span-6 col-span-12">
                <div className="mb-4">
                  <label htmlFor="gambar" className="block text-sm font-medium text-gray-700">
                    Profile Picture
                  </label>
                  {formData.imageURL && (
                    <img
                      src={formData.imageURL}
                      alt="Pratinjau Gambar"
                      className="mt-2 mb-4 w-32 h-32 object-cover rounded-md border border-gray-300"
                    />
                  )}
                  <input
                    type="file"
                    id="gambar"
                    name="newImage"
                    onChange={handleImageChange}
                    accept="image/*" // Hanya menerima file gambar
                    className="mt-1 p-1 border rounded-md w-full"
                  />
                </div>
              </div>
              <div className="col-span-12 bg-white p-6 mt-4">
                <h5 className="text-xl">Hobbies</h5>
                <div className="flex flex-wrap gap-x-2">
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 col-span-12 p-3 bg-white rounded-sm w-full">
            <h5 className="text-xl">General Information</h5>
            <div className="grid grid-cols-12 gap-4">
              <div className="lg:col-span-6 col-span-12">
                <div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                      placeholder='ex. Jokowi'
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                      placeholder='ex. Bogor'
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="name"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                      placeholder='ex. jokowi@gmail.com'
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Birthday
                    </label>
                    <input
                      type="date"
                      id="name"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                      placeholder='ex. 19-02-2030'
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <select
                      id="role"
                      name="role_id"
                      value={formData.role_id}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                    >
                      {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12">
                <div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                      placeholder='ex. Jokowi'
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                      placeholder='ex. Jokowi'
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Whatsapp
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="phonenumber"
                      value={formData.phonenumber}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                      placeholder='ex. Bogor'
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Company/Institution
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                      placeholder='ex. jokowi@gmail.com'
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="mt-1 p-1 border rounded-md w-full"
                      placeholder='ex. 19-02-2030'
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-x-4 -mt-4">
                <button type='submit' className='rounded-md text-white bg-blue-500 text-sm py-2 px-4'>Save</button>
                <button onClick={handleCancel} className='rounded-md text-white bg-green-500 text-sm py-2 px-4'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </UserLayout>
  );
};

export default Edit;
