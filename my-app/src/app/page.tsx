import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col ">
      <div className="hero-1 flex flex-col items-center justify-center bg-[#f5f5f5] ">
        <h1 className="font-helvetica font-medium   text-[#111111]">
          Hello Nike App
        </h1>
        <p className="text-center">
          Download the app to access everything Nike.
          <span className="underline font-medium">Get Your Great</span>
        </p>
      </div>
      <div className="flex ml-12  ">
        <Image
          src={"/Image.png"}
          alt="oops"
          width={1245}
          height={700}
        />
      </div>
      <div className="flex justify-center mt-6 w-full">
        <Image
          src={"/Frame (4).png"}
          alt="oops"
          width={1000}
          height={229}
          className="w-full max-w-[1000px] h-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
        <h1 className="new-hero font-medium text-2xl">Best of Air Max</h1>
        <div className="flex items-center">
          <span className="new-hero font-semibold text-base">Shop</span>
          <span>
            <Image
              src={"/Frame (6).png"}
              alt="oops"
              width={48}
              height={48}
            />
          </span>
          <span>
            <Image
              src={"/Frame (5).png"}
              alt="oops"
              width={48}
              height={48}
            />
          </span>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={"/Frame (8).png"}
          alt="oops"
          width={1440}
          height={540.36}
          className="w-full h-auto"
        />
      </div>
      <div>
        <h2 className="new-hero text-2xl font-medium ml-12">Featured</h2>
      </div>
      <div className="flex justify-center mt-6 w-full">
        <Image
          src={"/Image (1).png"}
          alt="oops"
          width={1200}
          height={300}
          className="w-full max-w-[1200px] h-auto"
        />
      </div>
      <div className="flex justify-center items-center mt-6">
        <h1 className="new-hero text-5xl font-medium">STEP INTO WHAT FEELS GOOD</h1>
      </div>
      <div className="flex justify-center items-center mt-6">
        <p className="new-hero text-base font-normal text-center">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link href={"/AllProducts"} ><button className="bg-[#111111] text-white rounded-full px-6 py-3 text-sm">
          Find Your Shoe
        </button></Link>
      </div>
      <div className="new-hero text-2xl font-medium ml-12">Gear Up</div>
      <div>
        <Image
          src={"/Frame (7).png"}
          alt="oops"
          width={1356}
          height={509}
          className="w-full h-auto"
        />
      </div>
      <div className="new-hero ml-12 text-2xl font-medium">
        <h1>Don't Miss</h1>
        <Image
          className="mt-4 "
          src ={"/Image (2).png"}
          alt="oops"
          width={1245}
          height={700}
        />
      </div>
      <div className="new-hero text-5xl font-medium flex justify-center items-center mt-6">
        <h1>FLIGHT ESSENTIALS</h1>
      </div>
      <p className="new-hero font-normal text-base flex justify-center items-center mt-6">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <div className="flex justify-center items-center mt-6">
        <button className="bg-[#111111] text-white rounded-full px-6 py-3 text-sm">
          Shop
        </button>
      </div>
      <h2 className="text-xl font-bold mb-8 ml-12 mt-12">The Essentials</h2>
       <div className="flex gap-2 ">
       <Image 
         src={"/Image (5).png"}
         alt="oops"
         width={420}
         height={440}
         className="ml-12"
         />
          <Image 
         src={"/Image (3).png"}
         alt="oops"
         width={420}
         height={440}
         />
        <Image 
         src={"/Image (4).png"}
         alt="oops"
         width={420}
         height={440}
         />
        
       </div>
       <div className="w-full flex justify-center py-8 mt-20 mb-14" >
      <div className="grid grid-cols-4 gap-8 w-10/12">

        <div>
          <h3 className="text-lg font-medium mb-4">Icons</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Shoes</h3>
          <ul className="space-y-2 text-gray-600">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Clothing</h3>
          <ul className="space-y-2 text-gray-600">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Kids</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Infant & Toddler Shoes</li>
            <li>Kids Shoes</li>
            <li>Kids Jordan Shoes</li>
            <li>Kids Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}