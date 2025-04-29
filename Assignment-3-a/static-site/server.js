const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
console.log("...");
