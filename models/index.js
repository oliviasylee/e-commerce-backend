// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {



})

// Categories have many Products
Category.hasMany(Product, {


})

// Products belongToMany Tags (through ProductTag)
// Tag - product's feature such as color, what genre of the music? 
Product.belongsToMany(Tag, {


})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {


})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
