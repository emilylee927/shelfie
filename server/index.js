const express = require('express');
const massive = require('massive');
require('dotenv').config({ path: '../.env'});

const app = express();
const {getInventory, create,edit,deleteProduct} = require("./Controller.js")


app.use(express.json());



massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected');
}).catch(err=>{
    console.log(err);
})

app.get("/api/inventory",getInventory)
app.post("/api/product",create)
app.put("/api/product/:id", edit)
app.delete("/api/product/:id", deleteProduct)


app.listen(4000, () => {
    console.log(`hi cookie monster~ I am listening on port 4000 `);
  });