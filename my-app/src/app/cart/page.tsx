import Image from "next/image";
import Footer from "../../../components/footer";
export default function cart() {
  return (
    <>
      <div className="main  ">
        <div className="flex  mt-6">
          <div className=" mb-14  border-2   bg-neutral-100 w-[717.33px] h-[62.89px] ml-32 ">
            <p>
              <span className="font-medium text-black ">
                Free Delievry
                <br />
              </span>
              <span className="text-black font-normal">
                {" "}
                Applies to orders of ₹ 14 000.00 or more.
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="font-semibold text-black underline">
                {" "}
                View details
              </span>
            </p>
          </div>
          <div className="flex-col">
          <div className=" field-5 ml-10">
            <h1 className="  font-medium text-xl ">Summary</h1>
            <p className="mt-6">
              Subtotal
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹
              20 890.00
            </p>
            <p className="mt-2 ">
              Esatimated Delivery & Handling
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free
            </p>
            <br />
          </div>
          <div className="field-4 ml-10">
            <p className=" mt-6 mb-5 ">Total  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;₹ 20 890.00</p>
          </div>
          <div className="ml-16 mt-8 ">
            <button className="bg-black text-white w-[284px] h-[60px] rounded-full ">Member Checkout</button>
          </div>
          </div>
        </div>
        <h1 className="font-medium text-xl ml-32">Bag</h1>
        <Image
          className="ml-32"
          src={"/Auto Layout Vertical.png"}
          alt="oops"
          width={717}
          height={436}
        />
      </div>
      <div className="mt-36">
        {" "}
        <Footer />
      </div>
    </>
  );
}
