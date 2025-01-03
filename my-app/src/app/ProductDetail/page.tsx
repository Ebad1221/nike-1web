import Footer from "../../../components/footer";
import Image from "next/image";

export default function ProductDetail() {
  return (
    <div className="">
    <div className="container  ml-[70px] flex justify-center">
      <div className="main flex  items-center justify-center gap-8  mt-10">
        <div className="mt-[150px]">
          <Image src={"/Rectangle.png"} alt="Product Image" width={550} height={550} className="" />
        </div>
        <div className="flex-grow">
          <h1 className="detail-1 font-medium text-4xl w-[367px] ml-10 text-[#111111] mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
          <div className="w-[300px]  font-normal text-sm text-[#111111] mb-4 ml-10">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its "inside out"-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </div>
          <h1 className="font-medium text-2xl md:text-4xl text-[#111111] mb-4 ml-10">₹ 8,695.00</h1>
          <span>
           <button className="text-white bg-black rounded-full w-[170px] h-[44px]">Add To Cart</button>
          </span>
        </div>
      </div>
    </div>
    <div className="mt-[360px]"><Footer /></div>
    </div>

  );
}
