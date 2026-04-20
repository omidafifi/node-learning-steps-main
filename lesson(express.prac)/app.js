const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());

const products = [
  {
    id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    price: 89.99,
  },
  {
    id: "2",
    name: "iPhone 11 Pro 256GB Memory",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    price: 599.99,
  },
  {
    id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    price: 929.99,
  },
  {
    id: "4",
    name: "Sony Playstation 4 Pro White Version",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    price: 399.99,
  },
  {
    id: "5",
    name: "Logitech G-Series Gaming Mouse",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    price: 49.99,
  },
];

const users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
];

// ==============================
//        HOME ROUTE
// ==============================
app.get("/", (req, res) => {
  res.status(200).send({ message: "Alles Gute" });
});

// ==============================
//         USERS ROUTES
// ==============================
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "List of users",
    data: users,
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(200).send(user);
});

// ==============================
//        PRODUCTS ROUTES
// ==============================

// GET all products
app.get("/products", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All products fetched successfully",
    data: products,
  });
});

// GET single product
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id == id);

  if (!product) {
    return res.status(404).json({
      success: false,
      status: 404,
      message: "Product not found",
      data: null,
    });
  } else {
    return res.status(200).json({
      success: true,
      status: 200,
      message: "Product fetched successfully",
      data: product,
    });
  }
});

// ==============================
//  MULTIPLE PARAMS (Practice)
// ==============================
app.get("/products/:id/:version/:userName", (req, res) => {
  res.status(400).json({
    statusCode: 400,
    message: "Bad request",
    params_received: req.params,
  });
});
//####
// ==============================
//        START SERVER
// ==============================
// app.use(morgan("tiny"));
app.use(morgan("dev"));
app.listen(3000, () => {
  console.log("server running on port 3000");
});
