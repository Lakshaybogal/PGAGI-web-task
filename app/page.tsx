"use client";
import Explore from "./components/Home/Explore";
import FAQ from "./components/Home/FAQ";
import Features from "./components/Home/Features";
import Hero from "./components/Home/Hero";

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-between
      px-4 gap-8 w-[30rem]"
    >
      <Hero />
      <Explore />
      <Features />
      <FAQ />
    </section>
  );
}
