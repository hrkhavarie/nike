'use client'
const { createContext , useState} = require("react");
const  HeroContext = createContext();

import { bigShoe1 } from "@/public/assets/images"

function HeroProvider({children}){
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return <HeroContext.Provider value={{bigShoeImg}}> 
  {children}
  </HeroContext.Provider>

}
export default HeroProvider