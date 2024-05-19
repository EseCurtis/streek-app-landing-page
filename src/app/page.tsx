"use client";

import Hero from "@/components/molecules/Hero";
import Intro from "@/components/molecules/Intro";
import NavBar from "@/components/molecules/NavBar";
import SponsorsBanner from "@/components/molecules/SponsorsBanner";
import Container from "@/layouts/Container";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <SponsorsBanner />
      <Intro />
    </Container>
  );
}
