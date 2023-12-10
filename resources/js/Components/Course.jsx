import React from "react";

export default function Course() {
  return (
    <div className="px-20" id="course">
        <p>#LearnFromExpert</p>
        <h2 className="text-4xl font-bold">Kelas Pilihan</h2>
        <p className="text-xl font-bold"><span className="text-indigo-500">Eitena</span> menyediakan Kelas Online dan Bootcamp Offline untuk Umum</p>
        <div className="flex flex-wrap justify-center gap-5 py-20">
            <div className="flex w-full md:w-5/12 lg:w-3/12 border-2 p-5 rounded-lg justify-between items-center hover:-translate-y-2 transition duration-700 hover:shadow-xl hover:border-indigo-800 ">
                <img src="/assets/world-wide-web.png" className="w-10 h-10 me-3" alt="" />
                <p>Web Development</p>
                <img src="/assets/edit.png" className="w-10 h-10" alt="" />
            </div>
            <div className="flex w-full md:w-5/12 lg:w-3/12 border-2 p-5 rounded-lg justify-between items-center hover:-translate-y-2 transition duration-700 hover:shadow-xl hover:border-indigo-800">
                <img src="/assets/html.png" className="w-10 h-10 me-3" alt="" />
                <p>Html Fundamental</p>
                <img src="/assets/edit.png" className="w-10 h-10" alt="" />
            </div>
            <div className="flex w-full md:w-5/12 lg:w-3/12 border-2 p-5 rounded-lg justify-between items-center hover:-translate-y-2 transition duration-700 hover:shadow-xl hover:border-indigo-800">
                <img src="/assets/css-3.png" className="w-10 h-10 me-3" alt="" />
                <p>Css Styling</p>
                <img src="/assets/edit.png" className="w-10 h-10" alt="" />
            </div>
            <div className="flex w-full md:w-5/12 lg:w-3/12 border-2 p-5 rounded-lg justify-between items-center hover:-translate-y-2 transition duration-700 hover:shadow-xl hover:border-indigo-800">
                <img src="/assets/js.png" className="w-10 h-10 me-3" alt="" />
                <p>Javascript</p>
                <img src="/assets/edit.png" className="w-10 h-10" alt="" />
            </div>
            <div className="flex w-full md:w-5/12 lg:w-3/12 border-2 p-5 rounded-lg justify-between items-center hover:-translate-y-2 transition duration-700 hover:shadow-xl hover:border-indigo-800">
                <img src="/assets/ui-design.png" className="w-10 h-10 me-3" alt="" />
                <p>UI/UX Designer</p>
                <img src="/assets/edit.png" className="w-10 h-10" alt="" />
            </div>
            <div className="flex w-full md:w-5/12 lg:w-3/12 border-2 p-5 rounded-lg justify-between items-center hover:-translate-y-2 transition duration-700 hover:shadow-xl hover:border-indigo-800">
                <img src="/assets/digital-marketing.png" className="w-10 h-10 me-3" alt="" />
                <p>Digital Marketing</p>
                <img src="/assets/edit.png" className="w-10 h-10" alt="" />
            </div>
            <div className="flex w-full md:w-5/12 lg:w-3/12 border-2 p-5 rounded-lg justify-between items-center hover:-translate-y-2 transition duration-700 hover:shadow-xl hover:border-indigo-800">
                <img src="/assets/ML.png" className="w-10 h-10 me-3" alt="" />
                <p>Machine Learning</p>
                <img src="/assets/edit.png" className="w-10 h-10" alt="" />
            </div>
            <div className="flex w-full md:w-5/12 lg:w-3/12 border-2 p-5 rounded-lg justify-between items-center hover:-translate-y-2 transition duration-700 hover:shadow-xl hover:border-indigo-800">
                <img src="/assets/AI-logo.png" className="w-10 h-10 me-3" alt="" />
                <p>Artificial Intelligence</p>
                <img src="/assets/edit.png" className="w-10 h-10" alt="" />
            </div>
        </div>
    </div>
  );
}