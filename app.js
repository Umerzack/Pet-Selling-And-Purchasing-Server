const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// IMPORTS
const healthRoute = require("./routes/healthRoute");
const authRoute = require("./routes/authRoute");
const productsRoute = require("./routes/productsRoute");
const cartRoute = require("./routes/cartRoute");

// MIDDLE WARE
app.use(express.json());
app.use(bodyParser.json());

// CORS (CROSS-ORIGIN RESOURCE SHARING)
app.use(cors());

// ROUTES
app.use("/", healthRoute);

app.use("/auth", authRoute);

app.use("/products", productsRoute);

app.use("/cart", cartRoute);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
