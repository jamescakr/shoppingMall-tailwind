const mongoose = require("mongoose");
const User = require("/User");
const Product = require("/Product");
const Schema = mongoose.Schema;
const cartSchema = Schema(
  {
    userId: { type: mongoose.ObjectId, ref: User }, // "Product" 처럼 따옴표를 반드시 넣어야 하나?
    items: [
      {
        productId: { type: mongoose.ObjectId, ref: Product },
        size: { type: String, required: true },
        qty: { type: Number, default: 1, required: true },
      },
    ],
  },
  { timestamps: true }
);
cartSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.updatedAt;
  return obj;
};

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
