import "./category.css";
import womenfashion from "../../../img/womenfashion.png";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Category = () =>{
    // const [searchTerm, setSearchTerm] = useState("");

    return(
        <section id="category">
            <form>
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
                <div className="box-category">
                    <Link to="/" className="box">
                        <img src={womenfashion} alt="img" />
                        <h1>name</h1>
                    </Link>
                </div>
                <div className="box-category">
                    <Link to="/" className="box">
                        <img src={womenfashion} alt="img" />
                        <h1>name</h1>
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Category;