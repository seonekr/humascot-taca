import { useState } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import './post.css'
import { FaAngleLeft } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Post = () => {
    const [image, setImage] = useState([])
    const [images, setImages] = useState([]);
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');


    // Hanle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form Data:', { // Here you can insert informatio to database
            "Product name": productName,
            "Product type": productType,
            "Product price": price,
            "Product details": details,
            "Image": image,
            "Gallery": images
        });

        setProductName('');
        setProductType('');
        setPrice('');
        setDetails('')
        setImage([]);
        setImages([]);
    };

    // handle Product name
    const handleProductName = (e) => {
        const value = e.target.value
        setProductName(value)
    };
    // handle Product type
    const handleProductType = (e) => {
        const value = e.target.value
        setProductType(value)
    };
    // handle Product price
    const handleProductPrice = (e) => {
        const value = e.target.value
        setPrice(value)
    };
    
    // handle Product details
    const handleProductDetails = (e) => {
        const value = e.target.value
        setDetails(value)
    };

    // image handle
    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onloadend = () => {
            setImage([file]);
          };

          reader.readAsDataURL(file);
        }
    };

    // image handle gallery
    const handleImageUpload = (e) => {
      const uploadedImages = Array.from(e.target.files);
      setImages([...images, ...uploadedImages]);
    };

    return(
        <>
            <AdminMenu/>
            <section id="post">
                <div className="boxcontainerSpan_Box"></div>
                <div className="box_container_product">
                    <div className="box_text">
                        <h2>Post Product</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="edit-product-form">

                        <div className="input-box">
                            <div className="box">
                                <label htmlFor="productName">Product name</label>
                                <input
                                    type="text"
                                    id="productName"
                                    placeholder="Name"
                                    value={productName}
                                    onChange={handleProductName}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="productType">Product type</label>
                                <input
                                    type="text"
                                    id="productType"
                                    placeholder="Type"
                                    value={productType}
                                    onChange={handleProductType}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="price">Price</label>
                                <input
                                    type="text"
                                    id="price"
                                    placeholder="Price"
                                    value={price}
                                    onChange={handleProductPrice}
                                />
                            </div>
                            
                            <div>
                                <div className="box">
                                    <label htmlFor="details">Details</label>
                                    <textarea id="details" rows="5" value={details} onChange={handleProductDetails}></textarea>
                                </div>
                            </div>
                            
                            <div className="box_color_product">
                                <h3>Color:</h3>
                                <div className="color_box">
                                    <div className="box_choose_color_post">
                                        <p>Red</p>
                                        <p>Red</p>
                                        <p>Red</p>
                                    </div>
                                    
                                    <div className="search_color_post">
                                        <div className="search_box_post">
                                            <input type="text" placeholder="Add Color..." />
                                        </div>
                                        <button className="icon_add_post">
                                            <BiPlus id="icon_add_product"/>
                                            <p>Color</p>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="input-img">
                            <div className="image">
                                <label htmlFor="img">
                                {(image && image.length > 0) ? <img src={URL.createObjectURL(image[0])}/>:<p>Choose image</p>}
                                </label>
                                <input
                                    type="file"
                                    id="img"
                                    onChange={handleImage}
                                />
                            </div>
                            <div className="gallery">
                                <h3>Image gallery</h3>
                                <div className="gallery-box">
                                    <input type="file" id="gallery" multiple onChange={handleImageUpload} />
                                    {images.map((image, index) => (
                                        <div key={index}>
                                        <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
                                            <button onClick={() => setImages(images.filter((_, i) => i !== index))}>
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    { (images && images.length > 0) ? 
                                        <label htmlFor="gallery" className="add-more">Add</label>:
                                        <label htmlFor="gallery" className="add-gallery">Choose gallery</label>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="submit1">
                            <button type="submit">Post</button>
                        </div>
                    </form>
                </div>
                
            </section>
        </>
    )
}

export default Post;