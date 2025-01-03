import Image from "next/image"
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
export default function Header(){
    return (
    <>
        <div className="header w-{1440px} h-{36px}  flex items-center  bg-[#f5f5f5]">
                <div className="">
                    <Image className="ml-12 items-center h-{24px} w-{24px}"
                    src={"/Frame (1).png"}
                    alt="oops"
                    width={24}  
                    height={24}
                    />
                </div>
                    <ul className=" navbar-left flex items-center gap-5 ">
                       <Link href={"https://www.google.com/maps/search/nike+office+india/@12.9659611,77.6302174,14z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"}> Find a store  </Link>&nbsp; |  
                      <Link href={"/Contact-us"}>  Help</Link>  &nbsp;| 
                        <Link href={"/join-us"}>Join Us  </Link>&nbsp;|
                        <Link href={"/login"}>Sign In</Link>
                    </ul>
        </div>
        <div className="main flex items-center  ">
            <div>
                <Image className="ml-10 "
                src={"/Frame.png"}
                alt="oops"
                width={58}
                height={20} 
                />
            </div>
            <ul className="list-2  ">
                <Link href={"/AllProducts"}><li>New & Featured</li></Link>
                <Link href={"/AllProducts"}><li>Men</li></Link>
                <Link href={"/AllProducts"}><li>Women</li></Link>
                <Link href={"/AllProducts"}><li>Kids</li></Link>
                <Link href={"/AllProducts"}><li>Sale</li></Link>
                <Link href={"/AllProducts"}><li>SNKRS</li></Link>
            </ul>
            <div className=" navbar-left2 flex items-center">
            <IoSearchOutline className="navbar-left3"/>
                <input type="search" className="navbar-left1 bg-[#f5f5f5] " placeholder="Search" />
            </div>
            <div className="flex ">
            <Link href={"/AllProducts"}><IoMdHeartEmpty className="navbar-icons"/></Link>
           <Link href={"/cart"}> <IoBagOutline className="navbar-icons1"/></Link>
            </div>
        </div>


    </>
)
}

