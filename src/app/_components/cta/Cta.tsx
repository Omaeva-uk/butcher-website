import Image from 'next/image';
import React from 'react';
import ctaImage from "../../../../public/assets/footer-img.png"
import Sectiontitle from '../Sectiontitle';
import PrimaryButton from '../primary-button/PrimaryButton';
import HorizontalLine from '../HorizontalLine';

const Cta = () => {
  return (
    <section id='contact-us' className='container px-6 lg:px-6'>
        <div className=' relative max-md:h-[350px] h-[570px] w-full'>
            <Image src={ctaImage} fill alt='man selling meat' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between mt-12'>
            <div>
                <div>
                    <Sectiontitle title='Visit us' />
                    <p className='font-merriweather mt-3 text-sm md:text-md lg:text-lg max-w-[300px]'> 216 Normanton Rd, Derby DE23 6WA</p>
                </div>
                <div className='mt-12'>
                    <Sectiontitle title='Days Open' />
                    <p className='font-merriweather mt-3 text-sm md:text-md lg:text-lg max-w-[300px]'> Open 7 Days: 8 AM – 8 PM</p>
                </div>
            </div>
            <div className='flex flex-col max-md:mt-12 items-start'>
                <Sectiontitle title='Contact us' />
                <p className='font-merriweather mt-3 mb-6 text-sm md:text-md lg:text-lg max-w-[300px]'>Craving fresh halal meat? From tender chicken and lamb to premium beef and goat, we’ve got it all. Need a special cut or bulk order? Visit us or call today!</p>
                <PrimaryButton text=' 07424 274823' />
            </div>
        </div>
        <HorizontalLine />
    </section>
  )
}

export default Cta;