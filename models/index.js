// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  onDelete:"cascade"
})
// Categories have many Products
Category.hasMany(Product,{
  onDelete:"cascade"
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through:"product_tag",
  onDelete:"cascade"
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through:"product_tag",
  onDelete: "cascade"
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
