import "./category.css";
import womenfashion from "../../../img/womenfashion.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Category = () =>{
    const [searchCate, setSearchCate] = useState("");

    const navigate = useNavigate();

    // Submit the category
    const handleSearch = (e) => {
        e.preventDefault();

        navigate('/humascot-taca/categories/',{ // Navigate to the payment page with the address props
            state: {
                searchCate: searchCate
            }
        });

      };

    return(
        <section id="category">
            <form onSubmit={handleSearch}>
                <div className="box-category">
                    <input
                        type="text"
                        id="clothes"
                        value="30"
                        onChange={(e) => setSearchCate(e.target.value)}
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