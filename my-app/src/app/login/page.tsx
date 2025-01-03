import Image from "next/image";
import Footer from "../../../components/footer";
export default function Login() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Image src={"/Frame.png"} alt="oops" width={60} height={30} />
      </div>
      <div className="login-1    flex justify-center items-center text-center">
        <h1 className="font-bold text-lg ">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </h1>
      </div>
      <center>
        <div className=" justify-center items-center mb-4">
          <input
            type="text"
            placeholder="Email address"
            className="border-2 w-[374px] h-12 mb-5 pl-8 rounded"
          />
          <div>
            <input
              type="password"
              placeholder="password"
              className="border-2 w-[374px] h-12 pl-8 rounded"
            />
          </div>
        </div>
      </center>
      <div className=" login-1  flex justify-center items-center gap-5">
        <input type="checkbox"  className="ml-14" />
        <p className="text-[#8d8d8d] font-normal text-xs ">Keep me signed in</p>
        <p className="ml-24 text-[#8d8d8d] ">Forgotten your password?</p>
      </div>
      <div className="flex justify-center items-center text-center">
        <p className="text-[#8d8d8d] font-normal text-xs mb-8 mt-8">
          By logging in, you agree to Nike'
          <span className="underline">
            {" "}
            Privacy Policy <br />{" "}
          </span>{" "}
          <span className="underline"> and Terms of Use.</span>
        </p>
      </div>
      <div>
        <center>
          <button className=" login-1 bg-[#000000] text-[#ffffff] w-[324px] h-[40px] rounded mb-8 font-normal text-base ">
            SIGN IN
          </button>
        </center>
      </div>
      <div className="login-1 mb-16 font-normal text-sm items-center flex justify-center "><p> <span className="text-[#8d8d8d]">Not a Member</span>?<span className="font-semibold  underline text-[#111111]"> Join Us.</span></p></div>
          <Footer /> 
    </div>
  );
}
