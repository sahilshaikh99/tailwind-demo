import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Cards } from "./components/cards";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero />
   <Cards/>
   <Footer/>
   </>
  );
}
