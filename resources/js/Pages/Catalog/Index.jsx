import UserLayout from "@/Layouts/UserLayout";
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {

  return (
    <UserLayout>
      <div className="w-full my-8">
        <div className="flex justify-between my-3">
          <h1 className="text-2xl font-semibold mb-4">Catalog</h1>
        </div>
      </div>
    </UserLayout>
  );
};

export default Index;
