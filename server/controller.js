module.exports = {

getInventory:(req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_inventory()
    .then(response => {
        res.status(200).json(response);
    }).catch(err => console.log(err));
    console.log('It worked!!! Woohoo!!!')
},


create:(req,res)=>{
    const dbInstance = req.app.get('db');
      const { name, price, img} = req.body;
      dbInstance.create_product([name,price,img])
    .then(response=>{
        res.sendStatus(200);
    }).catch(err=>console.log(err));
},

edit:(req,res)=>{
    const dbInstance = req.app.get('db');
    const {name,price,img} = req.body;
    console.log(price)
    const{id}=req.params;
    console.log(id)
    dbInstance.edit_product([name,price,img,id])
    .then(response=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.log("oops")
    });
},


deleteProduct:(req, res) => {
    const dbInstance = req.app.get('db');
    console.log('byebye');
    dbInstance.delete_product(req.params.id)
    .then(response => {
        res.sendStatus(200);
    }).catch(err => console.log(err));
},

}
