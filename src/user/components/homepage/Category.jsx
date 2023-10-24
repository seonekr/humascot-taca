import "./category.css";
import womenfashion from "../../../img/womenfashion.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Category = () => {
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

    return (
        <section id="category">
            <div className="category_container">
                <Link to="/" className="box-category">
                    <img src={womenfashion} alt="img" />
                    <p>names</p>
                </Link>
                <Link to="/" className="box-category">
                    <img src={womenfashion} alt="img" />
                    <p>names</p>
                </Link>
                <Link to="/" className="box-category">
                    <img src={womenfashion} alt="img" />
                    <p>names</p>
                </Link>
            </div>

        </section>
    )
}

export default Category;