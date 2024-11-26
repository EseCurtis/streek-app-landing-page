"use client";

import { Faq } from "@/components/molecules/Faq/faq";
import Features from "@/components/molecules/Features";
import { Footer } from "@/components/molecules/Footer/footer";
import Hero from "@/components/molecules/Hero";
import Intro from "@/components/molecules/Intro";
import NavBar from "@/components/molecules/NavBar";
import { Pricing } from "@/components/molecules/Pricing/pricing";
import SponsorsBanner from "@/components/molecules/SponsorsBanner";
import Container from "@/layouts/Container";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <SponsorsBanner />
      <Intro />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
    </Container>
  );
}
