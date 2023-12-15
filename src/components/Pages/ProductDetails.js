import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  const details = {
    p1: {
      title: "Beyond the Horizon",
      description:
        "Explore the captivating journey of love, adventure, and self-discovery in this bestselling novel. Beyond the Horizon takes you on a literary voyage filled with unexpected twists and profound insights.",
      images: ["/assets/book1.jpg", "/assets/book2.jpg", "/assets/book3.jpg"],
    },
    p2: {
      title: "Urban Comfort Tee",
      description:
        "Embrace comfort and style with our Urban Comfort Tee. Crafted from premium cotton, this T-shirt combines a modern design with a relaxed fit, making it a versatile wardrobe essential for any casual occasion.",
      images: [
        "/assets/tshirt1.jpg",
        "/assets/tshirt2.jpg",
        "/assets/tshirt3.jpg",
      ],
    },
    p3: {
      title: "TechMaster Pro 5G",
      description:
        "Experience the future of technology with the TechMaster Pro 5G. Packed with cutting-edge features, this smartphone offers lightning-fast 5G connectivity, a stunning AMOLED display, and a powerful camera system to capture every moment in vivid detail.",
      images: [
        "/assets/mobile1.jpg",
        "/assets/mobile2.jpg",
        "/assets/mobile3.jpg",
      ],
    },
  };
  const product = details[params.productId];
  return (
    <section className="container mt-4">
      <h1 className="display-4">Product Details</h1>
      {product ? (
        <>
          {product.images.map((img) => (
            <img className="img-thumbnail img-fluid w-50 h-25" src={img} />
          ))}
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </>
      ) : (
        <p className="alert alert-danger">Product not found!!</p>
      )}
    </section>
  );
};

export default ProductDetails;
