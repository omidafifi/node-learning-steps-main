const express = require("express");
const app = express();
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
app.get("/", (req, res) => {
  console.log("welcome to first step");
  res.status(200).send({ message: "Alles Gute" });
});
app.get("/users/:id", (req, res) => {
  // const userId = id == users.id; // اینم غلط بود
  const { id } = req.params; // params و {id} یادم نبود اصلا
  const user = users.find((user) => user.id == id); //این رو اصلا  نتونستم
  // if (userId == id) {
  // res.status(200).send(userId); ==>false
  // } else {
  //  res.status(404).send({ message: "Not found user" });
  // }
  if (!user) {
    res.status(404).send({ message: "Not found user" }); // Rout Not Found ==false
  } else {
    res.status(200).send(user);
  }
});
//test api protocol://hostname:port/path http://localhost:3000/users
// app.get("/users", (req, res) => {
//   res
//     .status(200)
//     .json([
//       {
//         users: {
//           id: 1,
//           name: "user1",
//           id: 2,
//           name: "user2",
//           id: 3,
//           name: "user3",
//         },
//       },
//     ]);
// });

// app.get("/products/:id", (req, res) => {
//   // const {id} = id.params; //چرا داره یادم میره logicesh ؟؟؟ غلط گفنی چون reqیادت رفته بود  و هیچ وقت دو نا id = id پیش هم قرار نمیگیرن داداش
//   const { id } = req.params;
//   // const productsId = products.find((id) => products.id == id);
//   // const product = products.find((id) => product.id == id);
//   const product = products.find((p) => p.id == p);

//   if (!product) {
//     // res.send(404).json("Product not found"); status code رو اشتباه کردی
//     // res.status(404).send.json("Product not found");خراب کردی
//     // return res.status(404).send({ message: "Not found user" }); //جمله اشتباه هست false
//     return res.status(404).send({ message: "Product not found" });
//   } else {
//     // res.send(200).json(productsId);
//     return res.status(200).send(product);
//   }
// });
app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).send({ message: "Product not found" });
  }

  return res.status(200).send(product);
});
app.listen(3000, () => {
  console.log("server run on port 3000");
});


