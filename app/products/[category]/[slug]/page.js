import { products } from "@/data/products";
import ProductDetails from "./ProductDetails";

//Add this function so Next.js can pre-generate all product pages
export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  const { category, slug } = params;

  const product = products.find(
    (p) => p.category === category && p.slug === slug
  );

  if (!product) {
    return (
      <div className="text-center py-10 text-red-600 text-lg">
        Product not found
      </div>
    );
  }

  return <ProductDetails product={product} />;
}
