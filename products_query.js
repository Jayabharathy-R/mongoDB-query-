// Find all the information about each products
// Find the product price which are between 400 to 800
// Find the product price which are not between 400 to 600
// List the four product which are grater than 500 in price 
// Find the product name and product material of each products
// Find the product with a row id of 10
// Find only the product name and product material
// Find all products which contain the value of soft in product material 
// Find products which contain product color indigo  and product price 492.00
// Delete the products which product price value are same





db.products.find({});
db.products.find({$and:[
    {product_price:{$gte: 400}}, 
    {product_price:{$lte: 800}}
    ]})
 db.products.find({$or:[
    {product_price:{$lt: 400}}, 
    {product_price:{$gt: 600}}
 
    ]})
 db.products.find({product_price:{$gt: 500}}).limit(4);
 db.products.find({},{_id:0,"product_name":1,"product_material":1});
 db.products.find({"id":'10'});
 db.products.find({},{_id:0,"product_name":1,"product_material":1});
 db.products.find({"product_material":'Soft'});
 db.products.find({$and: [{"product_color":'indigo'},{"product_price":492}])
 db.products.aggregate([
     {
         $group: { _id: "$product_price",
        noOfproduct: {"$sum":1}
         }
     }
 ]);
     
