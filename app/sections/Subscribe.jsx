
const Subscribe = () => {
  return (
    <section id="contact-us" className="flex  justify-between items-center max-container max-lg:flex-col gap-10">
      <h3 className="text-4xl font-palanquin lg:max-w-md  font-bold leading-[68px] capitalize">
        sign up for <span className="text-coral-red">Updates</span> & news letter
      </h3>
      <div className="flex lg:max-w-[40%] w-full items-center max-sm:flex-col rounded-full gap-5 p-2.5 sm:border sm:border-slate-gray">
        <input placeholder="youremail@gmail.com" className=" input" />
        <button className="bg-coral-red rounded-full py-3 px-7 text-white  ">Sign Up</button>
      </div>
    </section>
  )
}

export default Subscribe