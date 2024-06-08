"use client";
import Footer from "./components/Footer";
import Explore from "./components/Home/Explore";
import FAQ from "./components/Home/FAQ";
import Features from "./components/Home/Features";
import Hero from "./components/Home/Hero";

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-between
      gap-8 md:w-[30rem]"
    >
      <div className="px-4 ">
        {" "}
        <Hero />
        <Explore />
        <Features />
        <FAQ />
      </div>
      <Footer />
    </section>
  );
}
