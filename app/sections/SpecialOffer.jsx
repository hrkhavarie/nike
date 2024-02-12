import Image from "next/image"
import Link from "next/link"

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-container max-xl:flex-col-reverse   gap-9">
<div>
      <Image src='/assets/images/offer.svg' alt="offer" width={733} height={687}/>
    </div>

    <div className="flex-1 flex-col flex">
      <h3 className=" font-bold text-4xl font-palanquin capitalize"> <span className="text-coral-red">special</span> offer</h3>
      <p className="font-normal mt-5 text-xl text-justify text-slate-gray leading-normal font-montserrat">
      Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
      </p>
      <p className="font-normal mt-5 text-xl text-justify text-slate-gray leading-normal font-montserrat">
      Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
      </p>

      <div className="flex flex-row justify-start gap-4 items-center mt-5 font-montserrat">
        <Link href="/" className="bg-coral-red py-4 px-7 text-white rounded-full flex items-center text-lg  leading-none gap-3">Show New<Image src="/assets/icons/arrow-right.svg" alt="icon" height={20} width={20} /></Link>
        <Link href="/" className="border border-1 bg-slate-50 border-coral-red text-coral-red py-4 px-7 text-lg rounded-full flex gap-3 items-center leading-none">Learn more</Link>
      </div>
    </div>
    

    </section>
  )
}

export default SpecialOffer