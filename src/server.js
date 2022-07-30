const express = require("express");
const bodyParser = require("body-parser");
const peopleRoutes = require("./people/routes");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/people", peopleRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
