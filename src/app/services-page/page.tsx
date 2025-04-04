import React from 'react';
import ComputerCareSection from '@/components/services-header';
import RepairRisks from '@/components/risk-problems';
import TechnicalService from '@/components/technichal-service';
import ServicePricing from '@/components/service-tab';
import LogoServiceSection from '@/components/logo-service';
import ExpertsSection from '@/components/masters';
import ServiceSteps from '@/components/service-register-steps';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';

const Page = () => {
    return (
        <>
        <Navbar/>
        <ComputerCareSection/>
        <RepairRisks/>
        <TechnicalService/>
        <ServicePricing/>
        <LogoServiceSection/>
        <ExpertsSection/>
        <div className='w-full p-16'>
        <Separator className="mb-8  bg-gray-400  h-[1px]" />
        </div>

        <ServiceSteps/>
        <Footer/>
        </>
    );
}

export default Page;

