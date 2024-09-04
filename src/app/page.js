import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProject";
import Herosection from "@/components/Herosection";
import Highlight from "@/components/Highlight";
import LatestInsight from "@/components/LatestInsight";
import Portfolio from "@/components/Portfolio";
import Schedulesection from "@/components/Sceduledsection";
import Wierdsection from "@/components/Wierdsection";
import Image from "next/image";

export default function Home() {
  return (
    <main >
       <Herosection/>
        <About/>
        <FeaturedProjects/>
        <Highlight/>
        <Wierdsection/>
        <LatestInsight/>
        <Schedulesection/>
    </main>
  );
}
