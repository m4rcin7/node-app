import { useState, useRef, useEffect } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [toastMessage, setToastMessage] = useState({
    title: "",
    description: "",
    status: "",
  });
  const toastRef = useRef(null);

  const { createProduct } = useProductStore();

  useEffect(() => {
    if (toastRef.current && window.bootstrap) {
      const toastInstance = window.bootstrap.Toast.getOrCreateInstance(
        toastRef.current
      );
      toastInstance.show();
    }
  }, [toastMessage]);

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    setToastMessage({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "danger",
    });

    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Create New Product</h1>
      </div>

      <div className="card shadow p-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
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

      <div
        className="toast-container position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <div
          ref={toastRef}
          className={`toast align-items-center text-bg-${toastMessage.status} border-0`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              <strong>{toastMessage.title}:</strong> {toastMessage.description}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
