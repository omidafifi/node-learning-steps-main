const express = require("express");
const app = express();
const queryString = require("querystring"); //  و آن رو call کنی این رو کلا یادت رفت که یک core module هست
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

app.get("/foo/", (req, res) => {
  console.log(queryString.parse("key=value&ket2=value2&key3=value3"));
  console.log(
    queryString.stringify({
      key: "value",
      ket2: "value2",
      key3: "value3",
      key4: "value4",
    }),
  );
  res.send(req.query);
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
