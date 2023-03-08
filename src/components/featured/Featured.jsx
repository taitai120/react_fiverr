import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`/gigs?search=${input}`);
    };
    return (
        <div className="featured">
            <div className="container mx-auto flex items-center">
                <div className="left">
                    <h1>
                        Find the perfect <span>freelance</span> services for
                        your business
                    </h1>
                    <div className="search flex items-center justify-between flex-col md:flex-row">
                        <div className="searchInput flex justify-between w-full">
                            <img src="./img/search.png" alt="" />
                            <input
                                type="text"
                                className="w-full !ring-0"
                                placeholder="Search by gig title"
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-full md:w-[120px]"
                            onClick={handleSubmit}
                        >
                            Search
                        </button>
                    </div>
                    <div className="popular hidden md:flex md:items-center">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right hidden md:block">
                    <img src="/img/mman.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Featured;
