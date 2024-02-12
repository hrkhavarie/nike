import Image from "next/image"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular</span> Products</h2>

      <p className="lg:max-w-lg font-montserrat text-slate-gray mt-2">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap4 gap-14">
        {
          products.map(product=>(
        <div className="flex flex-1 flex-col w-full max-sm:full gap-4" key={product.name}>
          <Image src={product.imgURL} alt={product.name} width={290} height={290}/>
          <span className="flex gap-2 justify-start items-center text-xl font-montserrat"><Image src='/assets/icons/star.svg' alt="star" width={24} height={24}/>(4.8)</span>
          <h3 className="font-palanquin text-2xl font-semibold leading-normal">{product.name}</h3>
          <span className="text-coral-red text-2xl font-medium leading-normal font-montserrat">{product.price}</span>



        </div>
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts