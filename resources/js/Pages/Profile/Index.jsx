import UserLayout from "@/Layouts/UserLayout";
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Index = ({ users, authenticatedUser, userImageUrl }) => {
  //method deletePost
  const deletePost = async (id) => {
    Inertia.delete(`/master/users/${id}`);
  }

  const formattedDate = new Date(authenticatedUser.created_at).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  const data = ['Football', 'Table Tennis', 'Movie', 'Football', 'Table Tennis', 'Movie', 'Table Tennis', 'Movie'];

  return (
    <UserLayout>
      <div className="w-full my-8">
        <div className="flex justify-between my-3">
          <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        </div>
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="md:col-span-4 col-span-12 rounded-sm w-full">
            <div className="grid grid-col-12 gap-x-4 w-full">
              <div className="col-span-12 bg-white p-6">
                <div className="grid grid-cols-12">
                  <div className="col-span-6 text-sm">
                    <img src={userImageUrl} alt="Profile Belum Tersedia" className="w-2/3 rounded-lg" />
                  </div>
                  <div className="col-span-6">
                    <p className="text-[16px] mb-1">{authenticatedUser.firstname} {authenticatedUser.lastname}</p>
                    <p className="text-sm text-slate-900/60">{authenticatedUser.departemen}</p>
                    <p className="text-sm text-slate-900/60">{authenticatedUser.city}</p>
                  </div>
                </div>

                <div className="my-2">
                  <p className="text-sm text-slate-900/60">Email address</p>
                  <p className="text-sm text-slate-900/80">{authenticatedUser.email} </p>
                </div>

                <div className="my-2">
                  <p className="text-sm text-slate-900/60">Whatsapp</p>
                  <p className="text-sm text-slate-900/80">{authenticatedUser.phonenumber}</p>
                </div>

                <div className="my-2">
                  <p className="text-sm text-slate-900/60">Instution</p>
                  <p className="text-sm text-slate-900/80">{authenticatedUser.institution}</p>
                </div>
              </div>
              <div className="col-span-12 bg-white p-6 mt-4">
                <h5 className="text-xl">Hobbies</h5>
                <div className="flex flex-wrap gap-x-2">
                  {
                    data.map((item, index) => (
                      <a key={index} href="" className="border border-blue-500 py-1 px-3 text-sm bg-blue-500 text-white rounded-md mt-2">
                        {item}
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 col-span-12 p-3 bg-white rounded-sm w-full">
            <h5 className="text-xl">General Information</h5>
            <p className="text-[16px] text-slate-900/90 my-2">About Me</p>
            <p className="text-sm text-slate-900/95">
              {authenticatedUser.about}
            </p>
            {/* <a href="" className="border border-blue-700 py-1 px-3 text-sm bg-blue-700 font-semibold text-white rounded-md mt-2">Edit About</a> */}
            <div className="grid grid-cols-12 my-4">
              <div className="col-span-6">
                <p className="text-sm text-slate-900/60">Join Date</p>
                <p className="text-sm text-slate-900">{formattedDate}</p>
                <p className="text-sm text-slate-900/60 mt-2">Birthday</p>
                <p className="text-sm text-slate-900">{authenticatedUser.birthday}</p>
              </div>
              <div className="col-span-6">
                <p className="text-sm text-slate-900/60">Company/Instution</p>
                <p className="text-sm text-slate-900">{authenticatedUser.institution}</p>
                <p className="text-sm text-slate-900/60 mt-2">Role</p>
                <p className="text-sm text-slate-900">{authenticatedUser.role_id == 1 ? 'admin' : 'user'}</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="md:col-span-6 col-span-12">
                <h5 className="text-xl">Skills</h5>
                <div className="flex flex-wrap gap-x-2">
                  {
                    data.map((item, index) => (
                      <a key={index} href="" className="border border-blue-500 py-1 px-3 text-sm bg-blue-500 text-white rounded-md mt-2">
                        {item}
                      </a>
                    ))
                  }
                </div>
              </div>
              <div className="md:col-span-6 col-span-12">
                <h5 className="text-xl">Settings</h5>
                <a href={`/master/users/${authenticatedUser.id}/edit`} className="border border-blue-700 py-1 px-3 text-sm bg-blue-700 font-semibold text-white rounded-md mt-2">Edit Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Index;
