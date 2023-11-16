import React, { useState } from "react";
import dress from "../../../img/dress.png";
import image1 from "../../../img/image1.png";
import acer from "../../../img/acer.png";
import productImage from "../../../img/productImage.png";
import AdminMenu from "../adminMenu/AdminMenu";
import "./post.css";
import { useLocation } from "react-router-dom";

const Post = () => {
  // Products
  const [products, setProducts] = useState([
    {
      productID: 1,
      productName: "pro1",
      productType: "clothes",
      price: 15,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 2,
      productName: "pro2",
      productType: "clothes",

      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: dress,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 3,
      productName: "pro3",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 4,
      productName: "pro4",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: dress,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 5,
      productName: "pro5",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 6,
      productName: "pro6",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 7,
      productName: "pro7",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 8,
      productName: "pro8",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 9,
      productName: "pro9",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 10,
      productName: "pro10",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "black" },
        { colorID: 2, colorName: "blue" },
        { colorID: 3, colorName: "red" },
        { colorID: 4, colorName: "green" },
      ],
    },
    {
      productID: 11,
      productName: "pro11",
      productType: "clothes",
      price: 10,
      description: "desc for this product",
      popular: true,
      images: [
        {
          src: image1,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: acer,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
        {
          src: acer,
        },
        {
          src: productImage,
        },
        {
          src: image1,
        },
        {
          src: dress,
        },
      ],
      colors: [
        { colorID: 1, colorName: "red" },
        { colorID: 2, colorName: "green" },
      ],
    },
  ]);

  // Get ID of produt for update
  const location = useLocation();
  const { sendProductID } = location.state || {};

  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [popular, setPopular] = useState(false);

  // Filter products based on sendProductID
  const filteredProduct = products.find(
    (product) => product.productID === sendProductID
  );

  // Extract colors for the specific product
  const productColors = filteredProduct
    ? filteredProduct.colors.map((color) => color.colorName)
    : [];

  // Extract images for the specific product
  const productImages = filteredProduct ? filteredProduct.images : [];

  // Add Color Box
  const [addColor, setAddColor] = useState([...productColors]);
  const [colorInput, setColorInput] = useState("");

  const handleColorInputChange = (e) => {
    setColorInput(e.target.value);
  };

  const handleColorEnterClick = () => {
    if (colorInput.trim() !== "") {
      setAddColor([...addColor, colorInput]);
      setColorInput("");
    }
  };

  const handleColorKeyPress = (e) => {
    if (e.key === "Enter") {
      handleColorEnterClick();
    }
  };

  const handleColorTagDelete = (index) => {
    const newColors = addColor.filter((_, i) => i !== index);
    setAddColor(newColors);
  };

  // Add Image Box
  const [addImages, setAddImages] = useState([...productImages]);
  const [newImageUrl, setNewImageUrl] = useState("");

  //   const handleNewImageUrlChange = (e) => {
  //     setNewImageUrl(e.target.value);
  //   };

  const handleNewImageUrlChange = (e) => {
    const files = e.target.files;

    // Map the selected files to an array of objects with src properties
    const newImagesArray = Array.from(files).map((file) => ({
      src: URL.createObjectURL(file),
    }));

    // Update the addImages state with the new images
    setAddImages([...addImages, ...newImagesArray]);
  };

  const handleAddImageClick = () => {
    if (newImageUrl.trim() !== "") {
      setAddImages([...addImages, { src: newImageUrl }]);
      setNewImageUrl("");
    }
  };

  const handleImageDelete = (index) => {
    const newImages = addImages.filter((_, i) => i !== index);
    setAddImages(newImages);
  };

  const handleEnterClick = () => {
    const newColor = "New Color"; // Replace with your actual logic
    setAddColor([...addColor, newColor]);
    setColorInput("");
  };

  // Update product by ID
  const [id, setId] = useState(sendProductID);

  // Hanle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", {
      // Here you can insert informatio to database
      "Product name": productName,
      "Product type": productType,
      "Product price": price,
      "Product details": details,
      Color: addColor,
      Image: image,
      Gallery: images,
      productID: id,
    });

    setProductName("");
    setProductType("");
    setPrice("");
    setDetails("");
    setImage([]);
    setImages([]);
    setImages([]);
    setId("");
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

  // Handle checked popular
  const handlePopular = (event) => {
    setPopular(event.target.checked);
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
    const value = e.target.value;
    setId(value);
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
                      <textarea
                        id="details"
                        rows="5"
                        value={details}
                        onChange={handleProductDetails}
                      ></textarea>
                    </div>
                  </div>

                  {/* Add Color Box */}
                  <div className="colorBox_chContainer">
                    <h1>Color:</h1>
                    <div className="addcolor_container">
                      {addColor.map((colorB, index) => (
                        <div className="Card_boxColor" key={index}>
                          {colorB}
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
                  <div className="image">
                    <label htmlFor="img">
                      {image && image.length > 0 ? (
                        <img src={URL.createObjectURL(image[0])} />
                      ) : (
                        <p>Choose image</p>
                      )}
                    </label>
                    <input type="file" id="img" onChange={handleImage} />
                  </div>
                  <div className="gallery">
                    <h3>Image gallery</h3>
                    <div className="gallery-box">
                      <input
                        type="file"
                        id="gallery"
                        multiple
                        onChange={handleImageUpload}
                      />
                      {images.map((image, index) => (
                        <div key={index}>
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Image ${index}`}
                          />
                          <button
                            onClick={() =>
                              setImages(images.filter((_, i) => i !== index))
                            }
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      {images && images.length > 0 ? (
                        <label htmlFor="gallery" className="add-more">
                          Add
                        </label>
                      ) : (
                        <label htmlFor="gallery" className="add-gallery">
                          Choose gallery
                        </label>
                      )}
                    </div>
                  </div>
                </div>
                <div className="submit1">
                  <button type="submit">Post</button>
                </div>
              </div>
            ) : (
              <div>
                {filteredProduct && (
                  <div key={filteredProduct.productID}>
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
                          value={filteredProduct.productName}
                          onChange={handleProductName}
                        />
                      </div>
                      <div className="box">
                        <label htmlFor="productType">Product type</label>
                        <input
                          type="text"
                          id="productType"
                          placeholder="Type"
                          value={filteredProduct.productType}
                          onChange={handleProductType}
                        />
                      </div>
                      <div className="box">
                        <label htmlFor="price">Price</label>
                        <input
                          type="text"
                          id="price"
                          placeholder="Price"
                          value={filteredProduct.price}
                          onChange={handleProductPrice}
                        />
                      </div>

                      <div>
                        <div className="box">
                          <label htmlFor="details">Details</label>
                          <textarea
                            id="details"
                            rows="5"
                            value={filteredProduct.description}
                            onChange={handleProductDetails}
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
                          {addColor.map((colorB, index) => (
                            <div className="Card_boxColor" key={index}>
                              {colorB}
                              <span
                                className="spanCancelBox"
                                onClick={() => handleColorTagDelete(index)}
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
                            onChange={handleColorInputChange}
                            onKeyDown={handleColorKeyPress}
                            placeholder="Write your color..."
                          />
                          <a
                            className="btn_addcolorbox"
                            onClick={handleColorEnterClick}
                          >
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
                            onChange={handleNewImageUrlChange}
                          />
                          {addImages.map((image, index) => (
                            <div key={index}>
                              <img src={image.src} alt={`Image ${index}`} />
                              <button onClick={() => handleImageDelete(index)}>
                                Remove
                              </button>
                            </div>
                          ))}
                          {addImages && addImages.length > 0 ? (
                            <label htmlFor="gallery" className="add-more">
                              Add
                            </label>
                          ) : (
                            <label htmlFor="gallery" className="add-gallery">
                              Choose gallery
                            </label>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="submit1">
                      <button type="submit">Post</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Post;
