import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Suspense } from "react";
// app/page.tsx  (Homepage)


export const metadata = {
  title: 'Hero Kidz - শিশুদের সেরা খেলনা ও শিক্ষামূলক পণ্য',
  description: 'আমাদের হোমপেজে দেখুন সুপারহিরো কস্টিউম, লার্নিং বোর্ড, ফ্ল্যাশ কার্ড, ডাক্তার সেট এবং আরও অনেক মজার পণ্য। শিশুদের কল্পনা ও শেখার জন্য পারফেক্ট!',
  openGraph: {
    title: 'Hero Kidz - Fun Learning Starts Here',
    description: 'Explore our collection of educational toys, costumes, and creative tools for kids.',
    images: [
      {
        url: 'https://i.ibb.co.com/DPSvZ6Kq/image.png', // homepage image
        width: 1200,
        height: 630,
        alt: 'Hero Kidz Homepage Preview',
      },
    ],
    url: 'https://hero-kidz-coral.vercel.app/',
  },
  twitter: {
    images: ['https://i.ibb.co.com/DPSvZ6Kq/image.png'],
  },
};

// ... rest of your page component
export default async function Home() {
  const session = await getServerSession(authOptions);
  

  return (
    <div className='space-y-12'>

      <section>
        <Banner></Banner>
      </section>
      <section>
        <Suspense >
          <Products></Products>
        </Suspense>
      </section>
    </div>
  );
}
