import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

function Gigs() {
    const [sort, setSort] = useState("sales");
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();

    const { search } = useLocation();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["gigs"],
        queryFn: () =>
            newRequest
                .get(
                    `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
                )
                .then((res) => {
                    return res.data;
                }),
    });

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    useEffect(() => {
        refetch();
    }, [sort]);

    const apply = () => {
        refetch();
    };

    return (
        <div className="gigs">
            <div className="container mx-auto py-16">
                <span className="breadcrumbs text-slate-500 ">
                    Liverr {">"} Graphics & Design {">"}
                </span>
                <h1 className="text-2xl text-slate-500 ">AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Liverr's
                    AI artists
                </p>
                <div className="menu flex items-start justify-start flex-col md:items-center md:flex-row md:justify-between">
                    <div className="left flex items-center">
                        <div className="flex items-center gap-2">
                            <span>Budget</span>
                            <input
                                ref={minRef}
                                type="number"
                                placeholder="min"
                                className="w-[100px]"
                            />
                            <input
                                ref={maxRef}
                                type="number"
                                placeholder="max"
                                className="w-[100px]"
                            />
                        </div>
                        <button onClick={apply} className="">
                            Apply
                        </button>
                    </div>
                    <div className="right">
                        <span className="sortBy">Sort by</span>
                        <span className="sortType">
                            {sort === "sales" ? "Best Selling" : "Newest"}
                        </span>
                        <img
                            src="./img/down.png"
                            alt=""
                            onClick={() => setOpen(!open)}
                        />
                        {open && (
                            <div className="rightMenu">
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>
                                        Newest
                                    </span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>
                                        Best Selling
                                    </span>
                                )}
                                <span onClick={() => reSort("sales")}>
                                    Popular
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {isLoading
                        ? "loading"
                        : error
                        ? "Something went wrong!"
                        : data.map((gig) => (
                              <GigCard key={gig._id} item={gig} />
                          ))}
                </div>
            </div>
        </div>
    );
}

export default Gigs;
