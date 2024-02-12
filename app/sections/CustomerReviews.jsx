import Image from "next/image"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className=" max-container">
      <h3 className="font-bold leading-normal text-4xl font-palanquin text-center ">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg font-sm text-xl info-text  text-slate-gray text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
    <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">

      {
        reviews.map(review=>(
          <div className="flex flex-col justify-center items-center " key={review.customerName}>
            <Image className="rounded-full" src={review.imgURL} alt={review.customerName} width={120} height={120}/>
            <p className="mt-5 mx-w-sm info-text text-center">{review.feedback}</p>
            <span className="mt-5 info-text text-lg flex gap-3 items-center justify-between"><Image src='/assets/icons/star.svg' width={24} height={24} alt="star"/>{review.rating}</span>
            <span className=" font-bold font-palanquin text-2xl mt-5">{review.customerName}</span>

          </div>
        ))
      }

    </div>
    </section>
  )
}

export default CustomerReviews