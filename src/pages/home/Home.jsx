import React, { useState, useEffect } from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import { Link } from "react-router-dom";

function Home() {
    const [featureSlide, setFeatureSlide] = useState(5);
    const [projectSlide, setProjectSlide] = useState(4);

    return (
        <div className="home">
            <Featured />

            <TrustedBy />

            <Slide>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Slide>

            <div className="features">
                <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12 lg:gap-x-[50px] py-16">
                    <div className="item basis-1/2">
                        <h1 className="text-4xl">
                            A whole world of freelance talent at your fingertips
                        </h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No
                            hourly rates, just project-based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Quality work done quickly
                        </div>
                        <p>
                            Find the right freelancer to begin working on your
                            project within minutes.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Protected payments, every time
                        </div>
                        <p>
                            Always know what you'll pay upfront. Your payment
                            isn't released until you approve the work.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            24/7 support
                        </div>
                        <p>
                            Find high-quality services at every price point. No
                            hourly rates, just project-based pricing.
                        </p>
                    </div>
                    <div className="item basis-1/2 flex justify-center">
                        <video
                            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                            className="!w-full"
                            controls
                        />
                    </div>
                </div>
            </div>

            <div className="explore">
                <div className="container mx-auto py-16">
                    <h1 className="text-3xl font-bold text-gray-700 pb-10 text-center md:text-left">
                        Explore the marketplace
                    </h1>
                    <div className="items grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Graphics & Design</span>
                        </div>
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Digital Marketing</span>
                        </div>
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Writing & Translation</span>
                        </div>
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Video & Animation</span>
                        </div>
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Music & Audio</span>
                        </div>
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Programming & Tech</span>
                        </div>
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Business</span>
                        </div>
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Lifestyle</span>
                        </div>
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Data</span>
                        </div>
                        <div className="item flex flex-col items-center pb-6 md:pb-10">
                            <Link to="/">
                                <img
                                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                                    alt=""
                                    className=""
                                />
                            </Link>
                            <div className="line"></div>
                            <span>Photography</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features dark">
                <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12 lg:gap-x-[50px] py-16">
                    <div className="item">
                        <h1 className="text-3xl font-bold pb-4 text-center sm:text-left">
                            fiverr <i>business</i>
                        </h1>
                        <h1>
                            A business solution designed for <i>teams</i>
                        </h1>
                        <p>
                            Upgrade to a curated experience packed with tools
                            and benefits, dedicated to businesses
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Connect to freelancers with proven business
                            experience
                        </div>

                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get matched with the perfect talent by a customer
                            success manager
                        </div>

                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Manage teamwork and boost productivity with one
                            powerful workspace
                        </div>
                        <button>Explore Fiverr Business</button>
                    </div>
                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <Slide>
                {projects.map((card) => (
                    <ProjectCard key={card.id} card={card} />
                ))}
            </Slide>
        </div>
    );
}

export default Home;
