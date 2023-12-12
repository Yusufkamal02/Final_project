import UserLayout from "@/Layouts/UserLayout";
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Index = ({ catalogCourses, userImageUrl }) => {
  return (
    <UserLayout>
      <div className="w-full my-8">
        <div className="flex flex-col justify-between my-3">
          <h1 className="text-2xl font-semibold mb-4">My Course</h1>
          <p className="text-lg">Selalu upgrade skill, ilmu, dan pengalaman kamu di bidang teknologi</p>
        </div>
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
          <div className="border border-slate-900 bg-slate-900 text-sm text-white rounded-lg py-3 px-10">All Course</div>
          <div className="border border-gray-500 bg-gray-500 text-sm text-white rounded-lg py-3 px-10">Premium</div>
          <div className="border border-gray-500 bg-gray-500 text-sm text-white rounded-lg py-3 px-10">Finished</div>
        </div>

        {catalogCourses.length !== 0 ? (
          <div className="flex gap-4 flex-wrap lg:flex-nowrap">
            <img src={userImageUrl} alt="" />
            <div className="mt-10">
              <p>Sepertinya kamu belum mengikuti kelas. <br />
                Jangan khawatir, yuk cari kelas sesuai dengan kebutuhanmu</p>
              <a href="/master/catalog">
                <button className="py-3 px-10 text-white bg-purple-600 text-lg rounded-lg mt-2">
                  Lihat Katalog Kelas
                </button>
              </a>
            </div>
          </div>

        ) : (
          // Tampilkan katalog kursus jika ada
          <div className="mt-8">
            <h1>Turu aja dek</h1>
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default Index;
