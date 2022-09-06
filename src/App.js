import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
    return(
      <div>
        <Navbar/>
          <div className="container">
            <Hero />
            <Card
               img="k-zaferes.png"
               rating="5.0"
               reviewCount={6}
               country="USA"
               title="Life Lessons with Katie Zaferes"
               price={136}
            />
          </div> 
        </div> 
    
    )
}


