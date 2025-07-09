import { useState } from "react";
import { useProductStore } from "../store/product"

export default function CreateProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    alert(`${success ? "Success" : "Error"}: ${message}`);
    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create New Product</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary w-100" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
