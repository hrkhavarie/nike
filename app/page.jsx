import Image from 'next/image'
import { Hero , SuperQuality , Footer , SpecialOffer , Subscribe , CustomerReviews , Services, PopularProducts ,  } from './sections'
import Nav from './components/Nav'

import HeroProvider from './constants/HeroContexts'

export default function Home() {
  
  return (
    <main className='relative'>

      <Nav/>

      <section className='xl:padding-l wide:padding-r padding-b'>
        <HeroProvider>
          <Hero />
        </HeroProvider>
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
          <SuperQuality />
         </section>
      <section id='about' className='padding padding-x py-10'>
        <Services/> 
        </section>
      <section className='padding'>
        <SpecialOffer/>
        </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews/>
        </section>
      <section className='padding-x sm:py-32 py16'>
        <Subscribe/>
        </section>
      <section className='padding bg-black padding-x pb-8'>
        <Footer/>
        </section>
    </main>
  )
}
