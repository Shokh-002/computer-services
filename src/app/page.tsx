import Header from "@/components/header";
import Navbar from "@/components/Navbar";
import Brands from '../components/brands';
import Features from '../components/feature-cards';
import Services from "@/components/prices-card";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Brands/>
    <Features/>
    <Services/>
    </>
  );
}
