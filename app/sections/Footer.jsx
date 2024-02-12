import Image from "next/image"
import { socialMedia } from "../constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex max-lg:flex-col justify-between items-center">
      <div className="flex flex-col">
         <Image src="/assets/images/footer-logo.svg" alt="logo" height={50} width={150}/>
         <p className="mt-5  text-xl font-montserrat sm:max-lg text-slate-100">
         Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
         </p>
          <div className="mt-5 flex justify-between w-full items-center">
         {

          socialMedia.map(item=>(

              <Link href='' key={item.alt} className="w-[40px] h-[40px] rounded-full bg-slate-50" ><Image src={item.src} alt={item.alt} width={32} height={32}/></Link>
          ))
         }
          </div>
      </div>
      <div className="flex flex-col"></div>
      <div className="flex flex-col"></div>
      <div className="flex flex-col"></div>

    </footer>
  )
}

export default Footer