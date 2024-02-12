import Image from "next/image"
import Link from "next/link"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-start max-lg:flex-col gap-10 w-full max-container  ">
        <div className="flex  flex-1 flex-col ">
          <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg">We Provide You <span className="text-coral-red"> Super Quality</span> Shoes</h2>
          <p className="mt-5 font-montserrat text-xl text-slate-gray leading-normal font-normal">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.

          </p>
          <p className="mt-5 font-montserrat text-xl text-slate-gray leading-normal font-normal">
Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className="mt-12">
            <Link href='/' className="bg-coral-red text-xl py-4 leading-none font-montserrat px-7 rounded-full text-center   text-white"> View Details</Link>

            </div>

         
        </div>
        <div className="">
          <Image src="/assets/images/shoe8.svg" alt="" width={570} height={520}/>
        </div>

       
     
    </section>
  )
}

export default SuperQuality