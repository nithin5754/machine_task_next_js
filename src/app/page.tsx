// import Image from "next/image";

import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div className=" bg-[#331707]">
    {/* Main Content Container */}
    <main className="container h-full mx-auto px-4 pt-12 pb-24 relative flex flex-col ">
   <LandingPage/>
      </main>
 
    </div>
  );
}
