const express = require("express");
const app = express();

require("./route/index")(app);

app.use(express.static("static"));
app.listen(3000, () => {
    console.log("Running on :3000");
});
