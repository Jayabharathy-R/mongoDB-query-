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
     