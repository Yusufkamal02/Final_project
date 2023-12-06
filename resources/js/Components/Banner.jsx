import React from "react";

function Banner() {
    return (
        <div id="banner">
            <div className="bg-indigo-100 h-screen pt-24 flex justify-center">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-2">
                    <div className="self-center col-span-2 md:col-span-1">
                        <h2 className="text-2xl font-bold text-indigo-500">
                            Start to Succes
                        </h2>
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold my-2 leading-tight">
                            Wujudkan{" "}
                            <label htmlFor="" className="text-indigo-500">
                                impian
                            </label>{" "}
                            anda <br />
                            bersama{" "}
                            <label htmlFor="" className="text-indigo-500">
                                Eitena!
                            </label>{" "}
                            Jadikan <br />masa depan yang cerah
                        </p>
                        <p>
                        Jasa Profesional, Produk Inovatif, dan Bimbingan Teknik – Solusi Terbaik untuk Bisnis Anda.
                        </p>
                        <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg my-5 hover:bg-indigo-700">Info Selengkapnya</button>
                    </div>
                    <div className="flex items-center -mt-20 col-span-2 md:col-span-1">
                        <img
                            src="/assets/Flat2.png"
                            className="w-full object-cover"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
