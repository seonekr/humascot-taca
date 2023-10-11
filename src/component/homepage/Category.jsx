import "./category.css";
import womenfashion from "../img/womenfashion.png";
import { Link } from "react-router-dom";

const Category = () =>{
    return(
        <section id="category">
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
            <div className="box-category">
                <Link to="/" className="box">
                    <img src={womenfashion} alt="img" />
                    <h1>name</h1>
                </Link>
            </div>
        </section>
    )
}

export default Category;