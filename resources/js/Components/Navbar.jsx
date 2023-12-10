import { Link } from "@inertiajs/react";
import React from "react";
import Dropdown from "./Dropdown";

function Navbar({ user, className }) {
    return (
        <nav className={className}>
            <div className="flex justify-between h-24 max-w-7xl mx-auto">
                <div className="flex justify-start items-center">
                    <img
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        className="w-10"
                        alt=""
                    />
                    <h1 className="text-3xl py-6 pl-2 font-bold text-indigo-600">
                        Eitena
                    </h1>
                </div>

                <div className="hidden lg:flex items-center space-x-5">
                    <button className="bg-indigo-500 hover:bg-sky-700 w-20 rounded-md py-2">
                        <a href="#home" className="text-white">
                            Home
                        </a>
                    </button>
                    <a href="#about">About Us</a>
                    <a href="#trainer">Our Trainer</a>
                    <a href="#popular-course">Most Popular</a>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center py-2 border border-transparent leading-4 focus:outline-none transition ease-in-out duration-150"
                                >
                                    Alur Belajar
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Front-end Developer
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Beckend Developer
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Mobile Developer
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                UI/UX Designer
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                    <a href="#course">Kelas</a>
                    <a href="#footer">Contact</a>
                </div>

                <div className="sm:top-0 sm:right-0 p-6 flex items-center">
                    {user ? (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {user.name}

                                        <svg
                                            className="ms-2 -me-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route("users.index")}>
                                    My Profile
                                </Dropdown.Link>
                                <Dropdown.Link href={route("dashboard")}>
                                    My Courses
                                </Dropdown.Link>
                                <Dropdown.Link href={route("dashboard")}>
                                    Learning Progress
                                </Dropdown.Link>
                                <Dropdown.Link href={route("dashboard")}>
                                    Transactions
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
