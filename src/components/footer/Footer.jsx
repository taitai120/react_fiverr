import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-[#ffffff] border border-t-2">
            <div className="container mx-auto pt-12 pb-6">
                <div className="top">
                    {/* small screen footer */}
                    <div
                        id="accordion-collapse"
                        data-accordion="collapse"
                        className="block md:hidden"
                    >
                        <h2 id="accordion-collapse-heading-1">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                data-accordion-target="#accordion-collapse-body-1"
                                aria-expanded="true"
                                aria-controls="accordion-collapse-body-1"
                            >
                                <span>What is Flowbite?</span>
                                <svg
                                    data-accordion-icon
                                    className="w-6 h-6 rotate-180 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-collapse-body-1"
                            className="hidden"
                            aria-labelledby="accordion-collapse-heading-1"
                        >
                            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is an open-source library of
                                    interactive components built on top of
                                    Tailwind CSS including buttons, dropdowns,
                                    modals, navbars, and more.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Check out this guide to learn how to{" "}
                                    <a
                                        href="/docs/getting-started/introduction/"
                                        className="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        get started
                                    </a>{" "}
                                    and start developing websites even faster
                                    with components on top of Tailwind CSS.
                                </p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                data-accordion-target="#accordion-collapse-body-2"
                                aria-expanded="false"
                                aria-controls="accordion-collapse-body-2"
                            >
                                <span>Is there a Figma file available?</span>
                                <svg
                                    data-accordion-icon
                                    className="w-6 h-6 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-collapse-body-2"
                            className="hidden"
                            aria-labelledby="accordion-collapse-heading-2"
                        >
                            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is first conceptualized and
                                    designed using the Figma software so
                                    everything you see in the library has a
                                    design equivalent in our Figma file.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Check out the{" "}
                                    <a
                                        href="https://flowbite.com/figma/"
                                        className="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Figma design system
                                    </a>{" "}
                                    based on the utility classes from Tailwind
                                    CSS and components from Flowbite.
                                </p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-3">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                data-accordion-target="#accordion-collapse-body-3"
                                aria-expanded="false"
                                aria-controls="accordion-collapse-body-3"
                            >
                                <span>
                                    What are the differences between Flowbite
                                    and Tailwind UI?
                                </span>
                                <svg
                                    data-accordion-icon
                                    className="w-6 h-6 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-collapse-body-3"
                            className="hidden"
                            aria-labelledby="accordion-collapse-heading-3"
                        >
                            <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    The main difference is that the core
                                    components from Flowbite are open source
                                    under the MIT license, whereas Tailwind UI
                                    is a paid product. Another difference is
                                    that Flowbite relies on smaller and
                                    standalone components, whereas Tailwind UI
                                    offers sections of pages.
                                </p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    However, we actually recommend using both
                                    Flowbite, Flowbite Pro, and even Tailwind UI
                                    as there is no technical reason stopping you
                                    from using the best of two worlds.
                                </p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Learn more about these technologies:
                                </p>
                                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li>
                                        <a
                                            href="https://flowbite.com/pro/"
                                            className="text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Flowbite Pro
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://tailwindui.com/"
                                            rel="nofollow"
                                            className="text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Tailwind UI
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5">
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold">Categories</h1>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=design"
                            >
                                Graphics & Design
                            </Link>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=marketing"
                            >
                                Digital Marketing
                            </Link>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=translation"
                            >
                                Writing & Translation
                            </Link>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=animation"
                            >
                                Video & Animation
                            </Link>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=audio"
                            >
                                Music & Audio
                            </Link>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=tech"
                            >
                                Programming & Tech
                            </Link>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=data"
                            >
                                Data
                            </Link>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=business"
                            >
                                Business
                            </Link>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=lifestyle"
                            >
                                Lifestyle
                            </Link>
                            <Link
                                className="text-slate-500"
                                to="/gigs?cat=photography"
                            >
                                Photography
                            </Link>
                            <Link className="text-slate-500" to="/">
                                Sitemap
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold">About</h1>
                            <Link className="text-slate-500">Careers</Link>
                            <Link className="text-slate-500">Press & News</Link>
                            <Link className="text-slate-500">Partnerships</Link>
                            <Link className="text-slate-500">
                                Privacy Policy
                            </Link>
                            <Link className="text-slate-500">
                                Terms of Service
                            </Link>
                            <Link className="text-slate-500">
                                Intellectual Property Claims
                            </Link>
                            <Link className="text-slate-500">
                                Investor Relations
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold">Support</h1>
                            <Link className="text-slate-500">
                                Help & Support
                            </Link>
                            <Link className="text-slate-500">
                                Trust & Safety
                            </Link>
                            <Link className="text-slate-500">
                                Selling on Fiverr
                            </Link>
                            <Link className="text-slate-500">
                                Buying on Fiverr
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold">Community</h1>
                            <Link className="text-slate-500">
                                Customer Success Stories
                            </Link>
                            <Link className="text-slate-500">
                                Community hub
                            </Link>
                            <Link className="text-slate-500">Forum</Link>
                            <Link className="text-slate-500">Events</Link>
                            <Link className="text-slate-500">Blog</Link>
                            <Link className="text-slate-500">Influencers</Link>
                            <Link className="text-slate-500">
                                Affiliates
                            </Link>{" "}
                            <Link className="text-slate-500">Podcast</Link>
                            <Link className="text-slate-500">
                                Invite a Friend
                            </Link>
                            <Link className="text-slate-500">
                                Become a Seller
                            </Link>
                            <Link className="text-slate-500">
                                Community Standards
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold">More From Fiverr</h1>
                            <Link className="text-slate-500">
                                Fiverr Business
                            </Link>
                            <Link className="text-slate-500">Fiverr Pro</Link>
                            <Link className="text-slate-500">
                                Fiverr Logo Maker
                            </Link>
                            <Link className="text-slate-500">
                                Fiverr Guides
                            </Link>
                            <Link className="text-slate-500">Get Inspired</Link>
                            <Link className="text-slate-500">
                                Fiverr Select
                            </Link>
                            <Link className="text-slate-500">
                                ClearVoice <br />
                                <i className="text-gray-300 not-italic">
                                    Content Marketing
                                </i>
                            </Link>
                            <Link className="text-slate-500">
                                Fiverr Workspace <br />
                                <i className="text-gray-300 not-italic">
                                    Invoice Software
                                </i>
                            </Link>
                            <Link className="text-slate-500">
                                Learn <br />
                                <i className="text-gray-300 not-italic">
                                    Online Courses
                                </i>
                            </Link>
                            <Link className="text-slate-500">
                                Working Not Working
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="mt-10 mb-4" />

                <div className="bottom pt-3 pb-6 flex flex-col justify-start md:flex-row md:justify-between">
                    <div className="left flex items-center gap-5 pb-6 md:pb-0 flex-col sm:flex-row">
                        <Link to="/">
                            <svg
                                width={91}
                                height={27}
                                viewBox="0 0 91 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="#7A7D85">
                                    <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z" />
                                </g>
                                <g fill="#7A7D85">
                                    <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z" />
                                </g>
                            </svg>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            © Fiverr International Ltd. 2023
                        </p>
                    </div>
                    <div className="right flex items-center gap-4 flex-col sm:flex-row">
                        <div className="social-links flex items-center gap-6">
                            <img
                                src="./img/twitter.png"
                                alt=""
                                className="h-[27px]"
                            />
                            <img
                                src="./img/facebook.png"
                                alt=""
                                className="h-[27px]"
                            />
                            <img
                                src="./img/linkedin.png"
                                alt=""
                                className="h-[27px]"
                            />
                            <img
                                src="./img/pinterest.png"
                                alt=""
                                className="h-[27px]"
                            />
                            <img
                                src="./img/instagram.png"
                                alt=""
                                className="h-[27px]"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <img
                                    src="./img/language.png"
                                    alt=""
                                    className="h-[27px]"
                                />
                                <p className="text-sm">English</p>
                            </div>
                            <div>
                                <p className="text-sm"> US$ USD</p>
                            </div>
                            <img
                                src="./img/accessibility.png"
                                alt=""
                                className="h-[27px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
