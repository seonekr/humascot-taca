import "./category.css";
import womenfashion from "../../../img/womenfashion.png";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <section id="category">
            <div className="category_container">
                <Link to="/" className="box-category">
                    <img src={womenfashion} alt="img" />
                    <p>name</p>
                </Link>
                <Link to="/" className="box-category">
                    <img src={womenfashion} alt="img" />
                    <p>name</p>
                </Link>
                <Link to="/" className="box-category">
                    <img src={womenfashion} alt="img" />
                    <p>name</p>
                </Link>
            </div>
        </section>
    )
}

export default Category;