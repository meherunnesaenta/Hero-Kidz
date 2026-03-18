import {  getSingleProducts } from "@/actions/server/product";
import AddtoCard from "@/components/button/AddtoCard";
import Image from "next/image";


export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProducts(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.description?.slice(0, 150),

    openGraph: {
      title: product.title,
      description: product.description?.slice(0, 150),
      images: [product.image],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description?.slice(0, 150),
      images: [product.image],
    },
  };
}

const ProductDetails = async ({ params }) => {
    const {id}=await params;
  const product = await getSingleProducts(id);


  if (!product) {
    return <div className="text-center py-20 text-xl font-semibold">Product not found</div>;
  }

  const {
    title,
    bangla,
    image,
    price,
    discount,
    description,
    ratings,
    sold,
    info,
    qna
  } = product;
  

  const discountPrice = (price - (price * discount) / 100).toFixed(0);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">

      {/* Image + Info */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <Image src={image} alt='ii' width={600} height={500} className="w-full object-contain" />
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-500">{bangla}</p>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="text-yellow-500 font-medium">⭐ {ratings}</span>
            <span>{sold} sold</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-green-600">৳{discountPrice}</span>
            {discount > 0 && (
              <>
                <span className="text-lg line-through text-gray-400">৳{price}</span>
                <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">-{discount}%</span>
              </>
            )}
          </div>

          <div className="flex gap-4 pt-2">
            <AddtoCard product={product}></AddtoCard>
            <button className="btn btn-outline">Buy Now</button>
          </div>

          <div className="pt-4">
            <h3 className="font-semibold text-lg mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {info?.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Product Description</h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">{description}</p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {qna?.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <p className="font-medium text-gray-800">Q: {item.question}</p>
              <p className="text-gray-600 mt-1">A: {item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;