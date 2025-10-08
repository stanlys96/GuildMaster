import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Coins,
  TrendingUp,
  PersonStandingIcon,
  LucideVerified,
  Search,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { BsPatchCheckFill, BsShop, BsShopWindow } from "react-icons/bs";
import GradientButton from "../components/GradientButton";
import { FaDonate } from "react-icons/fa";
import { FaqItem } from "../components/FaqItem";

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  { name: "Alice", text: "This product changed my life!" },
  { name: "Bob", text: "Excellent customer service." },
  { name: "Charlie", text: "I love using this every day." },
  { name: "Dana", text: "Highly recommended to all my friends!" },
  { name: "Eve", text: "Affordable and high quality." },
  { name: "Frank", text: "A must-have in my daily routine." },
];

const paymentMethodImages = [
  {
    id: 1,
    imgUrl: "/images/gopay.avif",
  },
  {
    id: 2,
    imgUrl: "/images/ovo.avif",
  },
  {
    id: 3,
    imgUrl: "/images/shopee.avif",
  },
  {
    id: 4,
    imgUrl: "/images/dana.avif",
  },
  {
    id: 5,
    imgUrl: "/images/linkaja.avif",
  },
  {
    id: 6,
    imgUrl: "/images/mandiri.webp",
  },
  {
    id: 7,
    imgUrl: "/images/bri.avif",
  },
  {
    id: 8,
    imgUrl: "/images/bni.avif",
  },
  {
    id: 9,
    imgUrl: "/images/jcb.webp",
  },
  {
    id: 10,
    imgUrl: "/images/permata.svg",
  },
  {
    id: 11,
    imgUrl: "/images/amex.avif",
  },
  {
    id: 12,
    imgUrl: "/images/mastercard.avif",
  },
  {
    id: 13,
    imgUrl: "/images/uob.avif",
  },
  {
    id: 14,
    imgUrl: "/images/visa.avif",
  },
  {
    id: 15,
    imgUrl: "/images/qris.png",
  },
];

const DiscoverPage: React.FC = () => {
  const repeated = [...testimonials, ...testimonials];
  return (
    <div className="min-h-screen bg-background w-[100vw]">
      {/* Hero Section */}
      <section className="flex justify-center items-center relative bg-gradient-to-br from-surface via-background to-dark-900 py-20 h-[90vh] w-[100vw]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1254736/pexels-photo-1254736.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="flex flex-row items-center justify-center">
          <div>
            <Link
              to="/"
              className="flex items-center mb-2 justify-center space-x-2 text-xl font-bold text-white hover:text-accent-purple transition-colors"
            >
              <PersonStandingIcon className="h-[40px] w-[40px] text-accent-purple" />
              <span className="bg-gradient-to-r text-[40px] from-accent-purple to-accent-blue bg-clip-text text-transparent">
                AlterFun
              </span>
            </Link>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up mt-5">
                Invest in your favorite Vtubers and build communities.
              </p>
              <div className="flex justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-accent-purple" />
                  <p className="text-[18px]">Active Communities</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Coins className="h-5 w-5 text-accent-blue" />
                  <p className="text-[18px]">Profit Sharing</p>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                  <p className="text-[18px]">Growth Potential</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <DotLottieReact
              src="https://lottie.host/9629a5ea-0d50-4aab-b697-371a421ec955/GPPnwg35TH.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      {/* Featured Guilds */}
      <section className="py-16">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Featured Vtubers
          </h2>
          <p className="text-white text-center text-[18px]">
            Where Vtubers build communities and earn more income (with their
            fans).
          </p>
          <div className="relative flex overflow-hidden w-full mt-[40px]">
            <div className="animate-scroll flex gap-6">
              {repeated.map((t, i) => (
                <div
                  key={i}
                  className="min-w-[300px] max-w-[300px] bg-gray-50 rounded-xl shadow-md p-6 text-center flex-shrink-0"
                >
                  <img
                    src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
                    className="w-[200px] h-[200px] mx-auto mb-2 rounded-md"
                  />
                  <p className="text-gray-700 italic mb-3">"{t.text}"</p>
                  <div className="flex gap-x-2 items-center justify-center">
                    <h3 className="font-semibold text-gray-900">— {t.name}</h3>
                    <BsPatchCheckFill size={20} className="text-blue-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Guilds */}
      <section className="py-16 bg-surface/30">
        <div className="mx-auto w-[100vw]">
          <div className="relative flex overflow-hidden w-full mt-[40px] mx-auto">
            <div className="grid grid-cols-3 gap-6 mx-auto">
              {repeated.slice(0, 3).map((t, i) => (
                <div
                  key={i}
                  className="min-w-[300px] max-w-[300px] bg-gray-50 rounded-xl shadow-md p-6 text-center flex-shrink-0"
                >
                  <img
                    src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
                    className="w-[200px] h-[200px] mx-auto mb-2 rounded-md"
                  />
                  <div className="flex gap-x-2 items-center justify-center mt-3">
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    <BsPatchCheckFill size={20} className="text-blue-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="favorite-vtuber mt-2">
            <GradientButton className="mt-2" onClick={() => {}}>
              <p className="text-white flex gap-x-2 items-center">
                Find your favorite Vtuber <Search />
              </p>
            </GradientButton>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="flex items-center justify-center">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col items-center justify-center mx-auto">
              <div className="flex flex-row gap-x-2 items-center justify-center">
                <FaDonate color="white" size={35} />
                <div>
                  <p className="text-white">AlterFun Earn</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-white text-[18px] text-center">
                  Donate, buy items and buy shares to support your idols.
                </p>
                <p className="text-white text-[18px] text-center">
                  Earn income if your idols' shares go up.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <DotLottieReact
                src="https://lottie.host/aa12aad2-4278-4028-93e1-da29d7f33fb5/D4JkHAOANy.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface/30 px-16">
        <div className="rounded-lg px-5 text-white bg-[#204D83] border border-[#88888850] h-[90vh] grid grid-cols-2 justify-center items-center">
          <div className="">
            <div className="flex gap-x-2 items-center">
              <BsShopWindow size={50} color="white" />
              <div>
                <p className="">AlterFun Shop</p>
              </div>
            </div>
            <p className="mt-5">
              Jual Karya Digital di Trakteer Shop, Simpel dan Auto Cuan!
            </p>
            <p className="mt-5">
              Trakteer Shop memungkinkan kreator menjual produk digital dengan
              proses otomatis dan tanpa batasan format. Upload sekali, jual
              berkali-kali, dan biarkan pembeli menikmati karyamu dalam hitungan
              detik!
            </p>
            <GradientButton className="mt-5" onClick={() => {}}>
              <p className="text-white flex gap-x-2 items-center">
                Create your own shop <ArrowRight />
              </p>
            </GradientButton>
          </div>
          <div className="relative h-full overflow-hidden grid grid-cols-2 gap-4">
            <div className="relative h-full overflow-hidden">
              <div className="animate-scroll-up flex flex-col gap-4">
                {repeated.map((t, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl shadow-lg p-6 text-center flex-shrink-0"
                    style={{ boxShadow: "0 8px 15px rgba(0,0,0,0.4)" }} // thick bottom shadow
                  >
                    <img
                      src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
                      className="w-[100px] h-[100px] mx-auto mb-2 rounded-md"
                    />
                    <p className="text-gray-700 italic mb-2">"{t.text}"</p>
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full overflow-hidden">
              <div className="animate-scroll-down flex flex-col gap-4">
                {repeated.map((t, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl shadow-lg p-6 text-center flex-shrink-0"
                    style={{ boxShadow: "0 8px 15px rgba(0,0,0,0.4)" }} // thick bottom shadow
                  >
                    <img
                      src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
                      className="w-[100px] h-[100px] mx-auto mb-2 rounded-md"
                    />
                    <p className="text-gray-700 italic mb-2">"{t.text}"</p>
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="grid grid-cols-2 gap-4 text-white">
          <div className="flex flex-col gap-y-2 px-16">
            <p className="text-[28px] font-semibold">
              Flexible payment method, supporters can easily support you!
            </p>
            <p className="text-white/50">
              Supporters can support creators through many payment methods, from
              e-wallets to bank online transfer. The easier it is for supporters
              to make payment, the more chances the creators will get support.
            </p>
            <div className="flex flex-row gap-6 flex-wrap bg-white p-5 mt-2 rounded-md">
              {paymentMethodImages?.map((paymentMethod) => (
                <img
                  className="w-[70px] h-[30px]"
                  src={paymentMethod?.imgUrl}
                />
              ))}
            </div>
            <GradientButton className="mt-5" onClick={() => {}}>
              <p className="text-white flex gap-x-2 items-center">
                Create your own shop <ArrowRight />
              </p>
            </GradientButton>
          </div>
          <div className="">
            <DotLottieReact
              className="h-fit"
              src="https://lottie.host/819209bc-8e6d-4b8e-ad67-aa02367b25e4/snoz8w2xpV.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface/30 px-16 text-white">
        <p className="text-center text-[28px] font-semibold">
          Frequently Asked Questions (FAQ)
        </p>
        <div className="md:w-2/3 space-y-6 mx-auto mt-6">
          <FaqItem
            question="How secure is my data on Eternity Chain?"
            answer="Your data is encrypted and secured on the Solana blockchain, making it virtually impossible to tamper with or delete. We use military-grade encryption and decentralized storage to ensure your digital legacy remains intact for generations."
          />

          <FaqItem
            question="How accurate is my AI twin?"
            answer="The accuracy depends on the quality and quantity of data you provide. Most users report that their AI captures 85-95% of their personality and communication style after uploading sufficient data. The AI continues to improve as you add more content."
          />

          <FaqItem
            question="What happens to my AI after I'm gone?"
            answer="You can designate inheritors who will manage access to your AI. They can decide whether to keep it private for family only or make it public. Any revenue generated will go to designated beneficiaries according to your instructions."
          />

          <FaqItem
            question="How is my privacy protected?"
            answer="You have complete control over what data you share. Our platform uses zero-knowledge proofs to ensure only authorized users can access your AI. You decide what's private, what's shared with family, and what's public."
          />
        </div>
      </section>
      <section className="py-16 bg-surface px-16 text-white">
        <div className="rounded-md bg-[#204D83] p-16 flex gap-x-2">
          <div className="flex flex-col gap-y-5">
            <p className="text-[28px] font-semibold">
              Bergabung Sekarang dan Mulai Monetisasi Karya Kamu!
            </p>
            <p>
              Gabung di Trakteer, monetisasi karya kreatifmu, dan mulai hasilkan
              uang dengan mudah! Manfaatkan platform kami untuk berinteraksi
              dengan audiens, membangun brand, dan mengembangkan potensi kamu
              sebagai kreator.
            </p>
            <GradientButton className="" onClick={() => {}}>
              <p className="text-white flex gap-x-2 items-center">
                Create your own shop <ArrowRight />
              </p>
            </GradientButton>
          </div>
          <DotLottieReact
            src="https://lottie.host/cd9271b6-d508-4b0a-8fbb-7bf3f3af7984/BPkVWQAoxZ.lottie"
            loop
            autoplay
          />
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
