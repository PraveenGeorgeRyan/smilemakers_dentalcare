import AboutUs from "@/components/homepages/home1/AboutUs";
import DentalServices from "@/components/homepages/home1/DentalServices";
import Doctor from "@/components/homepages/home1/Doctor";
import Equipments from "@/components/homepages/home1/Equipment";
import Hero from "@/components/homepages/home1/Hero";

import Patient from "@/components/homepages/home1/Patient";

import Works from "@/components/homepages/home1/Works";
import Layout from "@/components/layout/Layout";
export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Hero />
        <Works />
        <DentalServices />
        <Patient />
        <Equipments />
        <Doctor />
        <AboutUs />
      </Layout>
    </>
  );
}
