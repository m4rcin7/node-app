import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2
          className="fw-bold"
          style={{
            background: "linear-gradient(to right, #06b6d4, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Current Products 🚀
        </h2>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product._id} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center mt-5">
          <h5 className="text-muted fw-bold">
            No products found 😢{" "}
            <Link
              to="/create"
              className="text-primary text-decoration-underline"
            >
              Create a product
            </Link>
          </h5>
        </div>
      )}
    </div>
  );
}
