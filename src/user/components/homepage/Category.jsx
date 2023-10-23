import "./category.css";
import womenfashion from "../../../img/womenfashion.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Category = () =>{
    const [clothes, setClothes] = useState('1')
    const [electronic, setElectronic] = useState('2')
    const [ll, setLl] = useState('3')

    const navigate = useNavigate();

        // submit
        const handleSubmit = (e) => {
            e.preventDefault();
    
            setClothes('');
            setElectronic('');
            setLl('');
    
            navigate('/humascot-taca/categories',{ // Navigate to the payment page with the address props
                state: {
                    clothes: clothes,
                    electronic: electronic,
                    ll: ll
                }
            });
        }

    const handleClothes = (e) => {
        const value = e.target.value;
        setClothes(value);
    };
    const handleElectronic = (e) => {
        const value = e.target.value;
        setClothes(value);
    };
    const handleLl = (e) => {
        const value = e.target.value;
        setClothes(value);
    };
    return(
        <section id="category">
            <form onSubmit={handleSubmit}>
                <div className="box-category">
                    <input
                        type="text"
                        id="clothes"
                        value={clothes}
                        onChange={handleClothes}
                    />
                    <button type="submit">
                        <label htmlFor="clothes" className="box">
                            <img src={womenfashion} alt="img" />
                            <h1>name</h1>
                        </label>
                    </button>
                </div>
                <div className="box-category">
                    <input
                        type="text"
                        id="electronic"
                        value={electronic}
                        onChange={handleElectronic}
                    />
                    <button type="submit">
                        <label htmlFor="electronic" className="box">
                            <img src={womenfashion} alt="img" />
                            <h1>name</h1>
                        </label>
                    </button>
                </div>
                <div className="box-category">
                    <input
                        type="text"
                        id="ll"
                        value={ll}
                        onChange={handleLl}
                    />
                    <button type="submit">
                        <label htmlFor="ll" className="box">
                            <img src={womenfashion} alt="img" />
                            <h1>name</h1>
                        </label>
                    </button>
                </div>
            </form>

        </section>
    )
}

export default Category;