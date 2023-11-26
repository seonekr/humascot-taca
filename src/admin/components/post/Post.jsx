import React, { useState, useRef, useEffect } from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import "./post.css";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [is_popular, setIs_popular] = useState(false);
  //   const [gallery, setGallery] = useState([]);

  //Add Color Box
  const [addColor, setaddColor] = useState([]);
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

  // Hanle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      category: "Electronic device",
      name: "Xiaomi Wifi Amplifier Pro",
      price: 80000,
      color: "Black",
      description: "uytgiyiitrfgyiu6yfughreghwertgfdgnjtui;lryktjdhb",
      is_popular: 1,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/addProduct", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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

  // image handle
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setMainImage([file]);
      };

      reader.readAsDataURL(file);
    }
  };

  // const [gallery, setGallery] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const uploadedGallery = Array.from(e.target.files);
    setGallery([...gallery, ...uploadedGallery]);
  };

  const handleImageDelete = (imageToDelete) => {
    const newGallery = gallery.filter((image) => image !== imageToDelete);
    setGallery(newGallery);

    // Reset the input field value to allow adding new images
    fileInputRef.current.value = null;
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
                  {/* This is gallery images */}
                  {gallery.map((image, index) => (
                    <div
                      key={
                        image.name /* Use a unique identifier for each image */
                      }
                    >
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Image ${index}`}
                        required
                      />
                      <button onClick={() => handleImageDelete(image)}>
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
                    {mainImage && mainImage.length > 0 ? (
                      <img src={URL.createObjectURL(mainImage[0])} />
                    ) : (
                      <p>Choose image</p>
                    )}{" "}
                    {/** This is description image */}
                  </label>
                  <input type="file" id="img" onChange={handleImage} required />
                </div>
              </div>
            </div>
            <div className="submit1">
              <button
                type="submit"
                disabled={addColor == "" || gallery == "" || image == ""}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Post;
