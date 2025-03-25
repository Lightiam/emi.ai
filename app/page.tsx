import React from 'react';
import EmilistExpertSection from "../components/EmilistExpertSection/EmilistExpertSection";
import HeroSection from "../components/HeroSection/HeroSection";
import MainLayout from "../components/MainLayout/MainLayout";
import PopularMaterials from "../components/PopularMaterials/PopularMaterials";
import PopularExperts from "../components/PopularExperts/PopularExperts";
import PopularJobs from "../components/PopularJobs/PopularJobs";
import ServiceCategories from "../components/ServiceCategories/ServiceCategories";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection currentLink={0} />
      <ServiceCategories />
      <PopularExperts />
      <PopularMaterials bgColor="bg-[#F7F7F7]" />
      <PopularJobs />
      <EmilistExpertSection />
    </MainLayout>
  );
}
