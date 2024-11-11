import Image from "next/image";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Counter from "./component/counter";
import Slider from "./component/slider";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Counter/>
      <Slider/>
    
    </div>
    
    
  );
}
