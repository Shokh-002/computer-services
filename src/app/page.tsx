import Header from "@/components/header";
import Navbar from "@/components/Navbar";
import Brands from '../components/brands';
import Features from '../components/feature-cards';
import Services from "@/components/prices-card";
import Works from "@/components/works";
import ServiceBanner from './../components/banner';
import WhyUpgrade from '../components/upgrading';
import FAQ from './../components/questions';
import Articles from './../components/articles';
import ConsultationSection from './../components/consultation';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Brands/>
    <Features/>
    <Services/>
    <Works/>
    <ServiceBanner/>
    <WhyUpgrade/>
    <FAQ/>
    <Articles/>
    <ConsultationSection/>
    <Footer/>
    </>
  );
}
