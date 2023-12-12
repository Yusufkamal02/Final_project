import UserLayout from "@/Layouts/UserLayout";
import React from 'react';

const Index = ({ catalog }) => {
  const handlePurchase = async () => {
    try {
      // Assuming you have a CSRF token available, replace 'your_csrf_token' with the actual token
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

      await fetch(`/purchase-catalog/${catalog.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
      });

      // Manually redirect after successful purchase
      window.location.href = '/master/course';
    } catch (error) {
      console.error('Error purchasing catalog:', error);
      // Handle errors if needed
    }
  };

  return (
    <UserLayout>
      <div className="w-full my-8 rounded-lg px-4 py-6 bg-gray-100">
        <div>
          <img src={catalog.image_url} alt={catalog.title} className="w-full h-96 object-cover mb-2 rounded-md" />
          <h1 className="text-xl text-slate-900 font-semibold">{catalog.title}</h1>
          <h1 className="text-sm my-4 font-normal">{catalog.description}</h1>
          <div className="border border-slate-900 bg-slate-200 p-4 w-80 text-center rounded-xl">
            <h1 className="text-lg font-bold "><span className="font-semibold">Lansung Beli</span> Rp {catalog.price}</h1>
          </div>
          <button onClick={handlePurchase} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Beli Sekarang
          </button>
        </div>
      </div>
    </UserLayout>
  );
};

export default Index;
