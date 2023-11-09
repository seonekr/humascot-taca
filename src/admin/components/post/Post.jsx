import React, { useState } from "react";
import image1 from "../../../img/image1.png";
import AdminMenu from "../adminMenu/AdminMenu";
import { useLocation } from "react-router";
import './post.css'

const Post = () => {
    // Products 
    const [products, setProducts] = useState([
        { productID: 1, productName: 'Product 1', description: 'This is product 1', price: 10, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}] },
        { productID: 2, productName: 'Product 2', description: 'This is product 1', price: 11, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}] },
        { productID: 3, productName: 'Product 3', description: 'This is product 1', price: 12, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}] },
        { productID: 4, productName: 'Product 4', description: 'This is product 1', price: 10, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}] },
        { productID: 5, productName: 'Product 5', description: 'This is product 1', price: 11, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}] },
        { productID: 6, productName: 'Product 6', description: 'This is product 1', price: 12, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}] },
        { productID: 7, productName: 'Product 7', description: 'This is product 1', price: 10, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}] },
        { productID: 8, productName: 'Product 8', description: 'This is product 1', price: 11, productType: "clothes", images: [image1], colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}] },
    ]);

    const [image, setImage] = useState([])
    const [images, setImages] = useState([]);
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');


    // Get ID of produt for update
    const location = useLocation()
    const { sendProductID } = location.state || {};
    const [getId, setGetId] = useState(sendProductID);
    const [getProductID, setGetProductID] = useState(getId);
    
    // Match productID
    const filteredProducts = products.filter(
        (product) => product.productID === getProductID
    );

    // Update colors
    const getProductColors = () => {
        const filteredProducts = products.filter(product => product.productID === getProductID);
        const colorNames = filteredProducts.flatMap(product => product.colors.map(color => color.colorName));
        const colorArray = Array.from(new Set(colorNames));
        return colorArray;
    }

    const fetchColor = getProductColors()

    //Add Color Box
    const [addColor, setaddColor] = useState([...fetchColor]);
    const [colorInput, setcolorInput] = useState("");

    const handleInputChange = (e) => {
        setcolorInput(e.target.value);
    };

    const handleEnterClick = () => {
        if (colorInput.trim() !== "") {
            setaddColor([...addColor, colorInput]);
            setcolorInput("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleEnterClick();
        }
    };

    const handleTagDelete = (index) => {
        const newTags = addColor.filter((_, i) => i !== index);
        setaddColor(newTags);

    };

    // Update product by ID
    const [id, setId] = useState(getProductID);


    // Hanle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (e.nativeEvent.submitter.classList.contains("update")) { // this for update product
            console.log("Update")
            console.log('Form Data:', { // Here you can insert information to database
                "Product name": productName,
                "Product type": productType,
                "Product price": price,
                "Product details": details,
                "Color": addColor,
                "Image": image,
                "Gallery": images,
                "productID": id
            });
          } else { //this for post product
            console.log("Post")
            console.log('Form Data:', { // Here you can insert information to database
                "Product name": productName,
                "Product type": productType,
                "Product price": price,
                "Product details": details,
                "Color": addColor,
                "Image": image,
                "Gallery": images,
                "productID": id
            });
          }

        setProductName('');
        setProductType('');
        setPrice('');
        setDetails('')
        setImage([]);
        setImages([]);
        setImages([]);
        setId('')
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

    // Handle ID
    const handleID = (e) => {
        const value = e.target.value
        setId(value)
    };

    return (
        <>
            <AdminMenu />
            <section id="post">

                <div className="boxcontainerSpan_Box"></div>
                <div className="box_container_product">
                    <div className="box_text">
                        <h2>Post Product</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="edit-product-form">
                        {!sendProductID ? (
                            <div>
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

                                    {/* Add Color Box */}
                                    <div className="colorBox_chContainer">
                                        <h1>Color:</h1>
                                        <div className="addcolor_container">
                                            {addColor.map((colorB, index) => (
                                                <div className="Card_boxColor" key={index}>
                                                    {colorB}
                                                    <span className="spanCancelBox" onClick={() => handleTagDelete(index)}>×</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="addcolorContent">
                                            <input className="inputBoxaddcolor" type="text" value={colorInput} onChange={handleInputChange} onKeyDown={handleKeyPress}
                                                placeholder="Write your color..." />
                                            <a className="btn_addcolorbox" onClick={handleEnterClick}>
                                                Enter
                                            </a>
                                        </div>
                                    </div>
                                    {/* End Add Color Box */}
                                </div>

                                <div className="input-img">
                                    <div className="image">
                                        <label htmlFor="img">
                                            {(image && image.length > 0) ? <img src={URL.createObjectURL(image[0])} /> : <p>Choose image</p>}
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
                                            {(images && images.length > 0) ?
                                                <label htmlFor="gallery" className="add-more">Add</label> :
                                                <label htmlFor="gallery" className="add-gallery">Choose gallery</label>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="submit1">
                                    <button type="submit">Post</button>
                                </div>
                            </div>
                        ):(
                            <div>
                                {filteredProducts.map((product) => (
                                    <div key={product.productID}>
                                        <div className="input-box">
                                            <input
                                                className="id"
                                                type="text"
                                                value={id}
                                                onChange={handleID}
                                            />
                                            <div className="box">
                                                <label htmlFor="productName">Product name</label>
                                                <input
                                                    type="text"
                                                    id="productName"
                                                    placeholder="Name"
                                                    value={product.productName}
                                                    onChange={handleProductName}
                                                />
                                            </div>
                                            <div className="box">
                                                <label htmlFor="productType">Product type</label>
                                                <input
                                                    type="text"
                                                    id="productType"
                                                    placeholder="Type"
                                                    value={product.productType}
                                                    onChange={handleProductType}
                                                />
                                            </div>
                                            <div className="box">
                                                <label htmlFor="price">Price</label>
                                                <input
                                                    type="text"
                                                    id="price"
                                                    placeholder="Price"
                                                    value={product.price}
                                                    onChange={handleProductPrice}
                                                />
                                            </div>

                                            <div>
                                                <div className="box">
                                                    <label htmlFor="details">Details</label>
                                                    <textarea id="details" rows="5" value={product.description} onChange={handleProductDetails}></textarea>
                                                </div>
                                            </div>

                                            {/* Add Color Box */}
                                            <div className="colorBox_chContainer">
                                                <h1>Color:</h1>
                                                <div className="addcolor_container">
                                                    {addColor.map((colorB, index) => (
                                                        <div className="Card_boxColor" key={index}>
                                                            {colorB}
                                                            <span className="spanCancelBox" onClick={() => handleTagDelete(index)}>×</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="addcolorContent">
                                                    <input className="inputBoxaddcolor" type="text" value={colorInput} onChange={handleInputChange} onKeyDown={handleKeyPress}
                                                        placeholder="Write your color..." />
                                                    <a className="btn_addcolorbox" onClick={handleEnterClick}>
                                                        Enter
                                                    </a>
                                                </div>
                                            </div>
                                            {/* End Add Color Box */}
                                        </div>
                                                    
                                        <div className="input-img">
                                            <div className="image">
                                                <label htmlFor="img">
                                                    {(image && image.length > 0) ? <img src={URL.createObjectURL(image[0])} /> : <p>Choose image</p>}
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
                                                    {(images && images.length > 0) ?
                                                        <label htmlFor="gallery" className="add-more">Add</label> :
                                                        <label htmlFor="gallery" className="add-gallery">Choose gallery</label>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit1">
                                            <button type="submit" className="update">Update</button>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        )}
                    </form>
                </div>

            </section>
        </>
    )
}

export default Post;