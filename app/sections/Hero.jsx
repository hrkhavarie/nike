'use client'
import { arrowRight } from "@/public/assets/icons"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import Image from "next/image"
import { bigShoe1 } from "@/public/assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section className="w-full l flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container " id="home">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-center w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red ">Our Summer Collection</p>
        <h1 className="mt-10 font-palanqin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold "><span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
        <br />
        <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now "
          iconURL={arrowRight}
        />

        <div className="flex justify-start flex-wrap items-start w-full mt-20 gap-16">
            {
              statistics.map(stat =>(
                <div key={stat.lable}>
                  <p className="text-4xl  font-palanquin font-bold">{stat.value}</p>
                  <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                </div>
              ))
            }
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40  bg-primary bg-hero bg-cover bg-center padding bg-pale-blue">
      <Image
         src={bigShoeImg} 
         alt="" 
         width={610} 
         height={502}
         className="object-contain relative z-10" 
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm-left-[10%] max-sm:px-6">{
            shoes.map(shoe =>(
              <div key={shoe}>
              <ShoeCard
                 changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}}
                  bigShoeImg = {bigShoeImg}
                  imgURL={shoe}
                />
              </div>
            ))
          }</div>
      </div>
    </section>
  )
}

export default Hero