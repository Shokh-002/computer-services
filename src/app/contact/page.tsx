import Contactbannerone from '@/components/contact-banner-one';
import Contactbannertwo from '@/components/contact-banner-two';

import React from 'react';
import Footer from '../../components/footer';
import ContactForm from '../../components/contact-form';
import Navbar  from '@/components/Navbar';

const Page = () => {
  return (
   <>
   <Navbar/>
    <Contactbannerone/>
    <Contactbannertwo/>
    <ContactForm/>
    <Footer/>
   </>

    
  );
}

export default Page;
