import React, { useState, useEffect, useRef } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import { useLocation } from "react-router-dom";

import "./post.css";

const UpdateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [popular, setPopular] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [addColor, setAddColor] = useState([]);
  const [colorInput, setColorInput] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const fileInputRef = useRef(null);

  const [products, setProducts] = useState([]);

  //   Get product ID
  const location = useLocation();
  const { sendProductID } = location?.state || {};

  // Effect to fetch and set details of Product
  useEffect(() => {
    // Find the product with the specified ID
    const productToUpdate = products.find(
      (product) => product.productID === parseInt(sendProductID)
    );

    if (productToUpdate) {
      // Set state variables with details of the found product
      setProductName();
      setProductType();
      setPrice();
      setDetails();
      setPopular();
      setAddColor(map(() => ''));
    //   setGallery(productToUpdate.images.slice(1)); // Exclude the first image
      setMainImage();
    }
  }, [products, sendProductID]); // Run this effect whenever the products array or sendProductID changes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console
    // console.log("Form Data:", {
    //   productName,
    //   productType,
    //   price,
    //   details,
    //   popular,
    //   colors: addColor,
    //   gallery: gallery.map((image) => // Make 
    //     image instanceof File ? "File: " + image.name : "URL: " + image.src
    //   ),
    //   mainImage:
    //     mainImage instanceof File
    //       ? "File: " + mainImage.name
    //       : "URL: " + mainImage,
    // });

    // Reset form fields if needed
    setProductName("");
    setProductType("");
    setPrice("");
    setDetails("");
    setPopular(false);
    setAddColor([]);
    setGallery([]);
    setMainImage(null);
  };

  // Handle input change for color input
  const handleInputChange = (e) => {
    setColorInput(e.target.value);
  };

  // Handle key press for color input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEnterClick();
    }
  };

  // Handle click for adding color
  const handleEnterClick = () => {
    if (colorInput.trim() !== "") {
      setAddColor([...addColor, colorInput]);
      setColorInput("");
    }
  };

  // Handle image selection for the main product image
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setMainImage(URL.createObjectURL(file)); // Use createObjectURL directly
    }
  };

  const handleImageUpload = (e) => {
    const uploadedGallery = Array.from(e.target.files);
    setGallery([...gallery, ...uploadedGallery]);
  };

  // Handle click for removing color
  const handleTagDelete = (index) => {
    const newTags = addColor.filter((_, i) => i !== index);
    setAddColor(newTags);
  };

  // Handle checked popular
  const handlePopular = (event) => {
    setPopular(event.target.checked);
  };

  // handle Product name
  const handleProductName = (e) => {
    const value = e.target.value;
    setProductName(value);
  };
  // handle Product type
  const handleProductType = (e) => {
    const value = e.target.value;
    setProductType(value);
  };
  // handle Product price
  const handleProductPrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  // handle Product details
  const handleProductDetails = (e) => {
    const value = e.target.value;
    setDetails(value);
  };

  // Handle click for removing image from the gallery
  const handleImageDelete = (index) => {
    const newGallery = [...gallery];
    newGallery.splice(index, 1);
    setGallery(newGallery);
  };
  // Update......

  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="boxcontainerSpan_Box"></div>
        <div className="box_container_product">
          <div className="box_text">
            <h2>Update Product</h2>
          </div>

          {/* The form to update the product */}
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
                  required
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
                  required
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
                  required
                />
              </div>

              <div>
                <div className="box">
                  <label htmlFor="details">Details</label>
                  <textarea
                    id="details"
                    rows="5"
                    value={details}
                    onChange={handleProductDetails}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="popular">
                <label htmlFor="popular">Popular product</label>
                <input
                  type="checkbox"
                  id="popular"
                  checked={popular}
                  onChange={handlePopular}
                />
              </div>

              {/* Add Color Box */}
              <div className="colorBox_chContainer">
                <h1>Color:</h1>
                <div className="addcolor_container">
                    {/* This is colors */}
                  {addColor.map((color, index) => (
                    <div className="Card_boxColor" key={index}>
                      {color}
                      <span
                        className="spanCancelBox"
                        onClick={() => handleTagDelete(index)}
                      >
                        ×
                      </span>
                    </div>
                  ))}
                </div>
                <div className="addcolorContent">
                  <input
                    className="inputBoxaddcolor"
                    type="text"
                    value={colorInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Write your color..."
                  />
                  <a className="btn_addcolorbox" onClick={handleEnterClick}>
                    Enter
                  </a>
                </div>
              </div>
              {/* End Add Color Box */}
            </div>

            <div className="input-img">
              <div className="gallery">
                <h3>Image gallery</h3>
                <div className="gallery-box">
                  <input
                    type="file"
                    id="gallery"
                    multiple
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                  />
                  {/* This is gallery image */}
                  {gallery.map((image, index) => (
                    <div key={index}>
                      <img
                        src={
                          image instanceof File
                            ? URL.createObjectURL(image)
                            : image.src
                        }
                        alt={`Image ${index}`}
                      />
                      <button
                        type="button"
                        onClick={() => handleImageDelete(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}

                  {gallery && gallery.length > 0 ? (
                    <label htmlFor="gallery" className="add-more">
                      +
                    </label>
                  ) : (
                    <label htmlFor="gallery" className="add-gallery">
                      Choose gallery
                    </label>
                  )}

                </div>
              </div>
              <div className="box_description">
                <h3>Description image</h3>
                <div className="image">
                  <label htmlFor="img">
                    {/* This is description image */}
                    {mainImage ? (
                      <img src={mainImage} alt="Main Product" />
                    ) : (
                      <p>Choose image</p>
                    )}
                  </label>
                  <input type="file" id="img" onChange={handleImage} />
                </div>
              </div>
            </div>
            <div className="submit1">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateProduct;
