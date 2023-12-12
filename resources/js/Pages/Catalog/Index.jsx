import UserLayout from "@/Layouts/UserLayout";
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Index = ({ catalogCourses, userImageUrl }) => {
  return (
    <UserLayout>
      <div className="w-full my-8">
        <div className="flex flex-col justify-between my-3">
          <p className="text-sm text-green-500 font-semibold mb-2">#LearnFromExpert</p>
          <h1 className="text-2xl font-semibold mb-2">Katalog Kelas</h1>
          <p className="text-lg">Eitena menyediakan berbagai macam kelas untuk kebutuhan skills <br /> yang banyak dicari oleh perusahaan atau industri saat ini</p>
        </div>

        {/* Popular Category */}
        <p className="text-lg mb-2">Popular Category</p>
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-4 col-span-12 text-lg border border-gray-500 bg-gray-50 rounded-lg py-4 px-6">
            <div className="w-1/2 bg-gray-600 rounded-full">
            </div>
            UI/UX & Web Design
          </div>
          <div className="lg:col-span-4 col-span-12 text-lg border border-gray-500 bg-gray-50 rounded-lg py-4 px-6">
            <div className="w-1/2 bg-gray-600 rounded-full">
            </div>
            Website Development
          </div>
          <div className="lg:col-span-4 col-span-12 text-lg border border-gray-500 bg-gray-50 rounded-lg py-4 px-6">
            <div className="w-1/2 bg-gray-600 rounded-full">
            </div>
            Mobile Development
          </div>
        </div>

        {/* Popular Category */}
        <p className="text-lg mb-2 mt-6">Popular Tools</p>
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-4 col-span-12 text-lg border border-gray-500 bg-gray-50 rounded-lg py-4 px-6">
            React Js
            <p className="text-gray-500/80 text-sm">Development</p>
          </div>
          <div className="lg:col-span-4 col-span-12 text-lg border border-gray-500 bg-gray-50 rounded-lg py-4 px-6">
            Figma
            <p className="text-gray-500/80 text-sm">UI/UX Design</p>
          </div>
          <div className="lg:col-span-4 col-span-12 text-lg border border-gray-500 bg-gray-50 rounded-lg py-4 px-6">
            Flutter
            <p className="text-gray-500/80 text-sm">Mobile Development</p>
          </div>
        </div>

        <p className="text-lg mb-2 mt-6">Terbaru Di rilis</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {catalogCourses.map((course) => (
            <a key={course.id} className="bg-white p-4 rounded-md shadow-md tet-start" href={`catalog/${course.id}`} >
              <img src={course.image_url} alt={course.title} className="w-full h-32 object-cover mb-2 rounded-md" />
              <h2 className="text-lg font-semibold mb-2" > {course.title}</h2>
              {/* <p className="text-gray-500 text-sm">{course.description}</p> */}
              <p className="text-gray-500 text-sm">Rp {course.price}</p>
              {/* <button className="mt-4 bg-blue-500 text-sm text-white py-2 px-4 rounded-md">Lihat Detail</button> */}
            </a>
          ))}
        </div>
      </div >
    </UserLayout >
  );
};

export default Index;
