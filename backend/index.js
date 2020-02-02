const app = require("express")();
const cors = require("cors");
const routes = require("./routes/objects.routes");
const port = process.env.PORT || 8080;

app.use(cors());
app.use(routes);

module.exports = app.listen(port, () => console.log(`Server is running on port ${port}`));