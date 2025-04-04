import React from 'react';
import TeamSection from '../../components/about-us-team-section';
import AboutCompany from '../../components/about-company';
import Footer from '../../components/footer';
import Navbar  from '@/components/Navbar';

const Page = () => {
    return (
        <>
        <Navbar/>
        <TeamSection/>
        <AboutCompany/>
        <Footer/>
        </>
    );
}

export default Page;
