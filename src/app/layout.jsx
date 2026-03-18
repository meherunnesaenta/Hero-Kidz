import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins =Poppins({
  weight:['100','200','300','400','500','600']
})

export const fontBangla = localFont({
  src: "../../public/fonts/mayaboti-normal.ttf",
});

// app/layout.tsx এর metadata অংশ



export const metadata = {
  title: {
    default: 'Hero Kidz - শিশুদের শিক্ষামূলক খেলনা ও পোশাক',
    template: '%s | Hero Kidz',
  },
  description:
    'শিশুদের জন্য সেরা শিক্ষামূলক খেলনা, সুপারহিরো কস্টিউম, ডাক্তার সেট, লার্নিং বোর্ড, ফ্ল্যাশ কার্ড, লজিক গেম ও ইঞ্জিনিয়ারিং টুলস। মজার মাধ্যমে শেখা ও বেড়ে ওঠা!',
  keywords: [
    'শিশুদের খেলনা',
    'educational toys for kids',
    'superman costume kids',
    'doctor costume kids',
    'learning board bangla',
    'flash cards kids',
    'kids graduation hat',
    'hero kidz',
  ],
  authors: [{ name: 'Hero Kidz Team', url: 'https://yourdomain.com' }],
  creator: 'Hero Kidz',
  publisher: 'Hero Kidz',

  // Open Graph (Facebook, WhatsApp, LinkedIn preview)
  openGraph: {
    title: 'Hero Kidz - Fun & Learning Toys for Children',
    description:
      'Discover safe, non-toxic educational toys, costumes, and creative play items for kids. Perfect for birthdays, parties, and imaginative learning!',
    url: 'https://hero-kidz-coral.vercel.app/', // তোমার আসল ডোমেইন দাও (localhost-এ test করলে পরে চেঞ্জ করো)
    siteName: 'Hero Kidz',
    images: [
      {
        url: 'https://i.ibb.co.com/DPSvZ6Kq/image.png', // তোমার homepage image
        width: 1200,
        height: 630,
        alt: 'Hero Kidz - শিশুদের শিক্ষামূলক খেলনা ও কস্টিউম',
      },
    ],
    locale: 'bn_BD,en_US', // Bangla + English
    type: 'website',
  },

  // Twitter/X Card
  twitter: {
    card: 'summary_large_image',
    title: 'Hero Kidz - শিশুদের মজার খেলা ও শেখা',
    description: 'শিক্ষামূলক খেলনা ও কস্টিউমের সেরা স্টোর',
    images: ['https://i.ibb.co.com/DPSvZ6Kq/image.png'],
    creator: '@herokidzbd', // তোমার Twitter handle যদি থাকে
  },

  // Icons (তোমার logo ব্যবহার করতে চাইলে public/logo.png-এ রাখো)
  icons: {
    icon: 'https://i.ibb.co.com/84B7s15F/image.png', // 32x32 বা 512x512 PNG/SVG
    shortcut: 'https://i.ibb.co.com/84B7s15F/image.png',
    apple: 'https://i.ibb.co.com/84B7s15F/image.png',
  },

  // Robots & other SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (Google Search Console যদি যোগ করো)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <header className="py-2 max-w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 max-w-11/12 mx-auto min-h-[calc(100vh-300px)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
