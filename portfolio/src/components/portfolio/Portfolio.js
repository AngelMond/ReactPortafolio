import React from "react";

import Images from './Images'

const Portfolio =()=>{
        return(
            <section className="container mt-5">
                <article className=" section-border  p-1 shadow text-center">
                    <h3 className="p-2">Portfolio</h3>
                        <Images/>
                </article>
            </section>
        );
};

export default Portfolio;