import "./board.css";
import { IoDocumentText } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { TbShoppingCartStar } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Board = () => {

  // All Product
  const [products, setProducts] = useState([
    { productID: 1, productName: 'Product 1', description: 'This is product 1', price: 10, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    { productID: 2, productName: 'Product 2', description: 'This is product 1', price: 11, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    { productID: 3, productName: 'Product 3', description: 'This is product 1', price: 12, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    { productID: 4, productName: 'Product 4', description: 'This is product 1', price: 10, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    { productID: 5, productName: 'Product 5', description: 'This is product 1', price: 11, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    { productID: 6, productName: 'Product 6', description: 'This is product 1', price: 12, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    { productID: 7, productName: 'Product 7', description: 'This is product 1', price: 10, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    { productID: 8, productName: 'Product 8', description: 'This is product 1', price: 11, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    { productID: 9, productName: 'Product 9', description: 'This is product 1', price: 11, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
    { productID: 10, productName: 'Product 9', description: 'This is product 1', price: 11, productType: "clothes", colors: [{colorID: 1, colorName: "black"}, {colorID: 2, colorName: "blue"}, {colorID: 3, colorName: "red"}, {colorID: 4, colorName: "green"}]},
  ]);

  // All Orders
  const [orders, setOrders] = useState([
    {
      orderID: 1,
      userID: 2,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Houngaloun",
    },
    {
      orderID: 2,
      userID: 1,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro2",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colW",
          size: "l",
        },

        {
          productID: 3,
          productName: "pro3",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "xl",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 3,
      userID: 1,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Houngaloun",
    },
    {
      orderID: 4,
      userID: 3,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 5,
      userID: 4,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 6,
      userID: 5,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 7,
      userID: 6,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 8,
      userID: 7,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 9,
      userID: 5,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
  ]);

  // All Users
  const [users, setUsers] = useState([
    { userID: 1, userName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { userID: 2, userName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { userID: 3, userName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { userID: 4, userName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { userID: 5, userName:"Kham", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { userID: 6, userName:"Sam", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
  ]);

  // All Admins
  const [admins, setAdmins] = useState([
    { adminID: 1, adminName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { adminID: 2, adminName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { adminID: 3, adminName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { adminID: 4, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { adminID: 5, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { adminID: 6, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
    { adminID: 7, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******" },
  ]);

  // Count product
  const countProducts = products.length;

  // Count order
  const countOrder = orders.length;

  // Count users
  const countUsers = users.length;

  // Count Admins
  const countAdmins = admins.length;

  return (
    <>
      <section>
        <div className="boxspentainer"></div>
        <div className="board">
          <div className="manage-target">
            <div className="manage">
              <div className="containerBox_db">
                <h3>Dashboard</h3>
                <div className="contentBox_db">
                  <div className="menu-box one">
                    <div>
                      <IoDocumentText className="iconGad gone1" />
                      <p>Porducts</p>
                    </div>
                    <h2>{countProducts}</h2>
                    <Link to="/product/" className="txtcol">
                      View More
                    </Link>
                  </div>
                  <div className="menu-box two">
                    <div>
                      <IoDocumentText className="iconGad gone2" />
                      <p>Orders</p>
                    </div>
                    <h2>{countOrder}</h2>
                    <Link to="/orderpage/" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                  <div className="menu-box three">
                    <div>
                      <IoDocumentText className="iconGad gone3" />
                      <p>Users</p>
                    </div>
                    <h2>{countUsers}</h2>
                    <Link to="/users/" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                  <div className="menu-box four">
                    <div>
                      <IoDocumentText className="iconGad gone4" />
                      <p>Admins</p>
                    </div>
                    <h2>{countAdmins}</h2>
                    <Link to="/admins/" className="txtcol">
                      <p>View More</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="target">
                <h2>Target vs Reality</h2>
                <div className="target-graph">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="103"
                    viewBox="0 0 36 103"
                    fill="none"
                  >
                    <rect
                      x="20"
                      y="0.908203"
                      width="16"
                      height="102.092"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="24.3237"
                      width="16"
                      height="78.6761"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="93"
                    viewBox="0 0 36 93"
                    fill="none"
                  >
                    <rect
                      x="20"
                      y="0.274902"
                      width="16"
                      height="92.7253"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="24.627"
                      width="16"
                      height="68.3732"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="117"
                    viewBox="0 0 36 117"
                    fill="none"
                  >
                    <rect
                      x="20"
                      y="0.859375"
                      width="16"
                      height="116.141"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="58.9297"
                      width="16"
                      height="58.0704"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="93"
                    viewBox="0 0 36 93"
                    fill="none"
                  >
                    <rect
                      x="20"
                      y="0.274902"
                      width="16"
                      height="92.7253"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="24.627"
                      width="16"
                      height="68.3732"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="133"
                    viewBox="0 0 36 133"
                    fill="none"
                  >
                    <rect
                      x="20"
                      width="16"
                      height="133"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="37.4648"
                      width="16"
                      height="95.5352"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="133"
                    viewBox="0 0 36 133"
                    fill="none"
                  >
                    <rect
                      x="20"
                      width="16"
                      height="133"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="37.4648"
                      width="16"
                      height="95.5352"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="133"
                    viewBox="0 0 36 133"
                    fill="none"
                  >
                    <rect
                      x="20"
                      width="16"
                      height="133"
                      rx="4"
                      fill="#FFCF00"
                    />
                    <rect
                      y="37.4648"
                      width="16"
                      height="95.5352"
                      rx="4"
                      fill="#4AB58E"
                    />
                  </svg>
                </div>
                <div className="gouplast">
                  <div className="reality">
                    <p className="bag">
                      <BsHandbagFill />
                    </p>
                    <span>
                      <h4>Reality</h4>
                      <p>Global</p>
                    </span>
                    <p className="number">8.822</p>
                  </div>
                  <div className="target-sale">
                    <p className="sale">
                      <TbShoppingCartStar />
                    </p>
                    <span>
                      <h4>Reality</h4>
                      <p>Global</p>
                    </span>
                    <p className="number">12.122</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products-visit">
            <div className="products">
              <h3>Top products</h3>
              <div className="item_guopBox">
                <div className="items">
                  <h4>#</h4>
                  <h4>name</h4>
                  <h4>Popularity</h4>
                  <h4>Sales</h4>
                </div>
                <div className="items">
                  <span>1</span>
                  <span>ttt</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="4"
                      viewBox="0 0 180 4"
                      fill="none"
                    >
                      <rect width="180" height="4" rx="2" fill="#CDE7FF" />
                      <rect width="140" height="4" rx="2" fill="#0095FF" />
                    </svg>
                  </span>
                  <span className="sales_persian sales_an1">45%</span>
                </div>
                <div className="items">
                  <span>1</span>
                  <span>ttt</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="4"
                      viewBox="0 0 180 4"
                      fill="none"
                    >
                      <rect width="180" height="4" rx="2" fill="#8CFAC7" />
                      <rect width="110" height="4" rx="2" fill="#00E096" />
                    </svg>
                  </span>
                  <span className="sales_persian sales_an2">29%</span>
                </div>
                <div className="items">
                  <span>1</span>
                  <span>ttt</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="4"
                      viewBox="0 0 180 4"
                      fill="none"
                    >
                      <rect width="180" height="4" rx="2" fill="#C5A8FF" />
                      <rect width="100" height="4" rx="2" fill="#884DFF" />
                    </svg>
                  </span>
                  <span className="sales_persian sales_an3">24%</span>
                </div>
                <div className="items">
                  <span>1</span>
                  <span>ttt</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="4"
                      viewBox="0 0 180 4"
                      fill="none"
                    >
                      <rect width="180" height="4" rx="2" fill="#FFD5A4" />
                      <rect width="60" height="4" rx="2" fill="#FF8F0D" />
                    </svg>
                  </span>
                  <span className="sales_persian sales_an4">18%</span>
                </div>
              </div>
            </div>
            <div className="visit">
              <h3>Visitor insights</h3>
              <div className="visitor-graph">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="420"
                  height="71"
                  viewBox="0 0 420 71"
                  fill="none"
                >
                  <path
                    d="M-4.06934 49.5096C7.93066 24.1762 47.3307 -18.1904 108.931 15.0096C185.931 56.5096 200.931 84.0096 274.931 49.5096C348.931 15.0096 382.931 7.50957 440.931 49.5096C487.331 83.1096 513.931 63.5096 521.431 49.5096"
                    stroke="#3CD856"
                    strokeWidth="4"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="420"
                    height="115"
                    viewBox="0 0 420 115"
                    fill="none"
                  >
                    <path
                      d="M-4.06934 53.9577C20.9307 25.4577 45.3307 51.7577 106.931 84.9577C183.931 126.458 184.903 51.324 257.931 14.8103C324.931 -18.6897 382.931 22.3103 440.931 64.3103C487.331 97.9103 515.431 121.958 522.931 107.958"
                      stroke="#EF4444"
                      strokeWidth="4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="420"
                    height="90"
                    viewBox="0 0 420 90"
                    fill="none"
                  >
                    <path
                      d="M-4.06934 14.8105C20.9307 -13.6895 45.3307 12.6105 106.931 45.8105C183.931 87.3105 189.403 60.8242 262.431 24.3105C329.431 -9.18951 381.431 26.8105 439.431 68.8105C485.831 102.41 515.431 82.8105 522.931 68.8105"
                      stroke="#A700FF"
                      strokeWidth="4"
                    />
                  </svg>
                </svg>
              </div>
              <div className="detial">
                <span>
                  <p className="blue"></p>ble
                </span>
                <span>
                  <p className="red"></p>red
                </span>
                <span>
                  <p className="green"></p>green
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Board;
