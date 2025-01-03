import Image from "next/image";
import "../globals.css";
import Footer from "../../../components/footer";
import { CiSearch } from "react-icons/ci";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
export default function contact() {
  return (
    <>
      <div className="login-1    flex justify-center items-center text-center">
        <h1 className="font-medium text-lg ">GET HELP</h1>
      </div>
      <div className="flex  justify-center items-center mt-3 mb-8 relative  ">
        <input type="text"placeholder="What can we help you "className=" field-1 w-[500px] h-[50px] p-4 " />
        <CiSearch  className="absolute w-[24] h-[18] left-[880px]  "/>
      </div>
    <div className="flex border-r-2  ">
      <div>
      <div className="contact-1 font-medium text-2xl ml-12">
        <h1>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
      </div>
      <div className="ml-12">
        <p className="font-normal text-base text-[#111111]">
          We want to make buying your favourite Nike shoes and gear online fast
          and easy, and we accept the following payment options:
          <br />
          <br />
          Visa, Mastercard, Diners Club, Discover, American Express, Visa
          Electron, Maestro
          <br />
          <br />
          If you enter your PAN information at checkout, you'll be able to pay
          for your order with PayTM or a local credit or debit card.
          <br />
          <br />
          Apple Pay
          <br />
          <br />
          Nike Members can store multiple debit or credit cards in their profile
          for faster checkout. If you're not already a Member, join us today.
          <br />
          <br />
        </p>
        <div> 
            <button className="border-2 rounded-full bg-[#111111] text-[#ffffff] w-[106.12px] h-[39px]">
                JOIN US
            </button>
            <button className=" border-2 rounded-full bg-[#111111] text-[#ffffff] w-[129.12px] h-[39px] ">
                 SHOP NIKE
            </button>
            </div>
            <div>
                <h1 className="font-medium text-[#111111] text-xl">
                    FAQs
                </h1><br />
                <p>
               <span className="font-bold text-base "> Does my card need international purchases enabled?<br /></span>
                <span className="font-normal text-base">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout <br /> if international purchases need to be enabled.<br /><br />
                Please note, some banks may charge <span className="underline font-medium"> a small transaction fee</span> for international orders.</span><br /> <br />
               <span className="font-bold text-base"> Can I pay for my order with multiple methods?</span><br />
                No, payment for Nike orders can't be split between multiple payment methods.<br /><br />
                <span className="font-bold text-base">What payment method is accepted for SNKRS orders?</span><br />
                You can use any accepted credit card to pay for your SNKRS order.<br /><br />
                <span className="font-bold text-base"> Why don't I see Apple Pay as an option?</span><br />
                To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest <br />OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use <br />Apple Pay on Nike.com. 

                </p>
                <div className="mt-9">
                  <p>
                    Was this answer helpful?
                  </p>
                  <span className="flex gap-3 mt-3 mb-3"><FaThumbsUp />   <FaThumbsDown /></span>
                  <h3 className="text-[#757575] font-serif font-medium">RELATED</h3>
                  <p className="underline text-black font-medium mt-3 ml-8">WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                  <p className="underline text-black font-medium mt-3 ml-8">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                </div>
            </div>
                    
      </div>
      
    </div>
    <div>
    <Image className=""
        src={"/Frame (13).png"}
        alt="oops"
        height={1042}
        width={313.25}
        />
        
    </div>
    </div>
    <Footer />
    </>
  );
}
