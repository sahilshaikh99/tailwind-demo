import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero />
   <Footer/>
   </>
  );
}
