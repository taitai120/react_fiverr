import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [pressedKey, setPressedKey] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    // const checkKey = (e) => {
    //     if ((e.key === "Escape" || e.keyCode === 27) && openMenu)
    //         setOpenMenu(false);
    // };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    // useEffect(() => {
    //     window.addEventListener("keydown", checkKey);

    //     return () => window.removeEventListener("keydown", checkKey);
    // }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.data;

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            className={active || pathname !== "/" ? "navbar active" : "navbar"}
        >
            <div
                className={`fixed top-0 left-0 z-[999] w-full h-screen transition-transform ${
                    openMenu ? "" : "-translate-x-full"
                } flex`}
            >
                <div className="bg-white w-96 h-screen relative">
                    <div
                        className="closeButton absolute right-2 top-2 cursor-pointer"
                        onClick={() => {
                            setOpenMenu(false);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="black"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col items-center justify-between text-black p-6 gap-6">
                        <div className="smallLogo">
                            <Link className="link text-[#1dbf73]" to="/">
                                <span className="text-4xl">fiverr</span>
                            </Link>
                            <span className="dot text-4xl text-[#1dbf73]">
                                .
                            </span>
                        </div>
                        <div className="smallMenu flex flex-col gap-2">
                            <Link className="text-md" to="/gigs?cat=design">
                                Graphics & Design
                            </Link>
                            <Link className="text-md" to="/gigs?cat=marketing">
                                Video & Animation
                            </Link>
                            <Link
                                className="text-md"
                                to="/gigs?cat=translation"
                            >
                                Writing & Translation
                            </Link>
                            <Link className="text-md" to="/gigs?cat=animation">
                                AI Services
                            </Link>
                            <Link className="text-md" to="/gigs?cat=audio">
                                Digital Marketing
                            </Link>
                            <Link className="text-md" to="/gigs?cat=tech">
                                Music & Audio
                            </Link>
                            <Link className="text-md" to="/gigs?cat=data">
                                Programming & Tech
                            </Link>
                            <Link className="text-md" to="/gigs?cat=business">
                                Business
                            </Link>
                            <Link className="text-md" to="/gigs?cat=lifestyle">
                                Lifestyle
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    className="overlay bg-[rgba(0,0,0,0.6)] w-screen h-screen"
                    onClick={() => {
                        setOpenMenu(false);
                    }}
                ></div>
            </div>

            <div className="container flex mx-auto items-center justify-between py-3">
                <div className="logo flex items-center gap-2">
                    <div
                        className="toggleButton block lg:hidden cursor-pointer"
                        onClick={() => {
                            setOpenMenu(true);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </div>
                    <Link className="link" to="/">
                        <span className="text">fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span className="hidden md:block">Fiverr Business</span>
                    <span className="hidden md:block">Explore</span>
                    <span className="hidden md:block">English</span>
                    {!currentUser?.isSeller && (
                        <span className="hidden md:block">Become a Seller</span>
                    )}
                    {currentUser ? (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img
                                src={currentUser.img || "/img/noavatar.jpg"}
                                alt=""
                            />
                            <span>{currentUser.username}</span>
                            {open && (
                                <div className="options">
                                    {currentUser.isSeller && (
                                        <>
                                            <Link className="link" to="/mygigs">
                                                Gigs
                                            </Link>
                                            <Link className="link" to="/add">
                                                Add New Gig
                                            </Link>
                                        </>
                                    )}
                                    <Link className="link" to="/orders">
                                        Orders
                                    </Link>
                                    <Link className="link" to="/messages">
                                        Messages
                                    </Link>
                                    <Link
                                        className="link"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="link">
                                Sign in
                            </Link>
                            <Link className="link" to="/register">
                                <button>Join</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu container mx-auto hidden lg:flex items-center justify-between">
                        <Link className="link menuLink" to="/gigs?cat=design">
                            Graphics & Design
                        </Link>
                        <Link
                            className="link menuLink"
                            to="/gigs?cat=marketing"
                        >
                            Video & Animation
                        </Link>
                        <Link
                            className="link menuLink"
                            to="/gigs?cat=translation"
                        >
                            Writing & Translation
                        </Link>
                        <Link
                            className="link menuLink"
                            to="/gigs?cat=animation"
                        >
                            AI Services
                        </Link>
                        <Link className="link menuLink" to="/gigs?cat=audio">
                            Digital Marketing
                        </Link>
                        <Link className="link menuLink" to="/gigs?cat=tech">
                            Music & Audio
                        </Link>
                        <Link className="link menuLink" to="/gigs?cat=data">
                            Programming & Tech
                        </Link>
                        <Link className="link menuLink" to="/gigs?cat=business">
                            Business
                        </Link>
                        <Link
                            className="link menuLink"
                            to="/gigs?cat=lifestyle"
                        >
                            Lifestyle
                        </Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    );
}

export default Navbar;
