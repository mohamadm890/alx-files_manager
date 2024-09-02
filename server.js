const express = require("express")
const routes = ('./routes/index')
const app = express()
const port = 5000;
app.use('/', routes)
app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});
