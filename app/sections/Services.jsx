import Image from "next/image"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="flex flex-wrap justify-center max-lg:flex-row max-container gap-9">
        {
          services.map(service=>(
            <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px]  shadow-3xl px-10 py-16 " key={service.label}>
           <div className="bg-coral-red w-[50px] h-[50] p-3 rounded-full">

              <Image src={service.imgURL} alt={service.label} width={40} height={40}/>
            </div>
              <h3 className="mt-5 font-semibold text-3xl font-palanquin leading-normal">{service.label}</h3>
              <p className="mt-5 text-lg font-montserrat text-slate-gray leading-normal">{service.subtext}</p>
            </div>
          ))
        }
    </section>
  )
}

export default Services