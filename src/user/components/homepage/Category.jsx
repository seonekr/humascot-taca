import "./category.css";
import womenfashion from "../../../img/womenfashion.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Category = () =>{

    return(
        <section id="category">
            <form className="category_container">
                <div className="box-category">
                    <input
                        type="text"
                        id="clothes"
                    />
                    <label htmlFor="clothes" className="box">
                        <img src={womenfashion} alt="img" />
                        <h1>names</h1>
                    </label>
                </div>
            </form>

        </section>
    )
}

export default Category;