import React from "react";

function About() {
    return (
        <div className="my-20 px-20" id="about">
            <div className="flex flex-col items-center justify-center mt-40">
                <p className="">#WhatIsEITENA??</p>
                <p className="font-bold text-2xl">
                    <span className="text-indigo-500">EITENA</span> adalah perusahaan yang berfokus pada Pengembangan Hardskill dan Softskill.
                </p>
            </div>
            <div className="grid my-20 grid-cols-1 text-center gap-10 md:grid-cols-2 xl:grid-cols-4">
                <div className="">
                    <img
                        src="/assets/focus.png"
                        className="w-40 m-auto mb-5"
                        alt=""
                    />
                    <p>
                        Pembelajaran yang berfokus pada mengembangkan talenta
                        dan pengembangan diri dalam berbagai bidang keahlian.
                    </p>
                </div>
                <div>
                    <img
                        src="/assets/easy-learn.png"
                        className="w-40 m-auto mb-5"
                        alt=""
                    />
                    <p>
                        Telah terverifikasi oleh lembaga pemerintahan dan resmi
                        sebagai perusahaan dalam bidang pendidikan.
                    </p>
                </div>
                <div>
                    <img
                        src="/assets/neural-network.png"
                        className="w-40 m-auto mb-5"
                        alt=""
                    />
                    <p>
                        Materi pelajaran yang disusun secara sistematis dan
                        terstruktur juga memiliki tingkatan atau level untuk
                        menyesuaikan diri.
                    </p>
                </div>
                <div>
                    <img
                        src="/assets/saving.png"
                        className="w-40 m-auto mb-5"
                        alt=""
                    />
                    <p>
                        Save Money and time, karena Dengan harganya yang terjangkau dan
                        pembelajaran yang fokus dan interaktif.
                    </p>
                </div>
            </div>
            <div className="mt-60">
            <p className="text-center ">#LearnWithUs</p>
            <h2
                className="font-bold text-4xl text-center mb-20"
                id="trainer"
            >
                Our{" "}
                <span className="text-indigo-500">
                    Trainer
                </span>
            </h2>
            <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 text-center">
                <div className="col-span-1">
                    <img
                        src="/assets/1.jpeg"
                        className="w-full m-auto mb-5 rounded hover:-translate-y-4 transition duration-700 hover:shadow-xl hover:shadow-indigo-500"
                        alt=""
                    />
                    <h2 className="font-bold">Abraham Lington</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem, voluptate.
                    </p>
                </div>
                <div className="col-span-1">
                    <img
                        src="/assets/2.jpeg"
                        className="w-full m-auto mb-5 rounded hover:-translate-y-4 transition duration-700 hover:shadow-xl hover:shadow-indigo-500"
                        alt=""
                    />
                    <h2 className="font-bold">Ragil Setiawan</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quas, cumque.
                    </p>
                </div>
                <div className="col-span-1">
                    <img
                        src="/assets/3.jpeg"
                        className="w-full m-auto mb-5 rounded hover:-translate-y-4 transition duration-700 hover:shadow-xl hover:shadow-indigo-500"
                        alt=""
                    />
                    <h2 className="font-bold">Budi harman</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae, consequatur!
                    </p>
                </div>
                <div className="col-span-1">
                    <img
                        src="/assets/4.jpeg"
                        className="w-full m-auto mb-5 rounded hover:-translate-y-4 transition duration-700 hover:shadow-xl hover:shadow-indigo-500"
                        alt=""
                    />
                    <h2 className="font-bold">Ucok kurniawan</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quas, soluta.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;
