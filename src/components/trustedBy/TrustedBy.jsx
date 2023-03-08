import React from "react";
import "./TrustedBy.scss";

const TrustedBy = () => {
    return (
        // <div className="trustedBy">
        //     <div className="container mx-auto flex items-center justify-center gap-x-4 h-full">
        //         <span className="hidden md:block">Trusted by:</span>
        //         <img
        //             src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
        //             alt=""
        //             className="max-w-[60px] w-auto"
        //         />
        //         <img
        //             src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
        //             alt=""
        //             className="max-w-[60px] w-auto"
        //         />
        //         <img
        //             src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
        //             alt=""
        //             className="max-w-[60px] w-auto"
        //         />
        //         <img
        //             src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
        //             alt=""
        //             className="max-w-[60px] w-auto"
        //         />
        //         <img
        //             src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
        //             alt=""
        //             className="max-w-[60px] w-auto"
        //         />
        //     </div>
        // </div>
        <div className="trustedBy">
            <div className="container mx-auto flex items-center justify-center gap-2 h-full">
                <div className="hidden md:block">
                    <span>Trusted by:</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                    <img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
                        alt=""
                        className="h-[50px]"
                    />
                    <img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
                        alt=""
                        className="h-[50px]"
                    />
                    <img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
                        alt=""
                        className="h-[50px]"
                    />
                    <img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
                        alt=""
                        className="h-[50px]"
                    />
                    <img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
                        alt=""
                        className="h-[50px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
