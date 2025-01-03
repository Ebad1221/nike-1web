import Image from "next/image";
import Footer from "../../../components/footer";

export default function products(){
    return (
        <>
        <div className="main    ">
            <h1 className="text-2xl font-medium  ml-10">
                New (500)
            </h1><br /> <br />
            <div className="ml-[300px] mt-[0px] mb-52   absolute">
                <Image src={"/Frame (17).png"}
                alt="oops"
                width={1092}
                height={18013}
                />
            </div>
            <div className="elements border-b-2 max-w-64 ">
                <ul className="ml-10 font-medium text-lg mb-6">
                    <li>Shoes</li>
                    <li>Sports Bras</li>
                    <li>Tops & T-Shirts</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Jackets</li>
                    <li>Trousers & Tights</li>
                    <li>Shorts</li>
                    <li>Tracksuites</li>
                    <li>Jumpsuites & Rompers</li>
                    <li>Skirts & Dresses</li>
                    <li>Socks</li>
                    <li>Accessories & Equipment</li>
                </ul>
            </div>
           
            <div>
                <ul className="border-b-2 max-w-64 pb-6  ">
                    <section className="">
                    <li className="ml-10 flex font-medium text-lg gap-32 mb-6">Gender   <Image className=""
                    src={"/Frame (16).png"}
                    alt="oops"
                    width={15}
                    height={10}
                    /></li>
                  
                    </section>
                    <li className="flex gap-3 ml-10"><input type="checkbox" />Men</li>
                    <li className="flex gap-3 ml-10"><input type="checkbox" />Women</li>
                    <li className="flex gap-3 ml-10 "><input type="checkbox" />Unisex</li>
                </ul>
                <ul className="border-b-2 max-w-64 pb-6">
                    <section>
                    <li className="ml-10 flex font-medium text-lg gap-36 mb-6">Kids  <Image className=""
                    src={"/Frame (16).png"}
                    alt="oops"
                    width={15}
                    height={10}
                    /> </li>
                    </section>
                    <li className="flex gap-3 ml-10"><input type="checkbox" />Boys</li>
                    <li className="flex gap-3 ml-10"><input type="checkbox" />Girls</li>
                </ul>
                <ul className="border-b-2 max-w-64 pb-6">
                    <li className="ml-10 flex font-medium text-lg gap-20 mb-6 ">Shop By Price  <Image className=""
                    src={"/Frame (16).png"}
                    alt="oops"
                    width={15}
                    height={10}
                    />  </li>
                    <li className="flex gap-3 ml-10"><input type="checkbox" />Under ₹ 2 500.00</li>
                    <li className="flex gap-3 ml-10"><input type="checkbox" />₹ 2 501.00 </li>
                </ul>
            </div>
            
        </div>
        <span className="flex mt-[16550px]  "><Footer/></span>
        </>
    )
}