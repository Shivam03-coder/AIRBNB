import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

function SignUpPage() {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("SIGNUP").showModal()}
      >
        SIGN UP
      </button>
      <dialog id="SIGNUP" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-[18px] text-center mb-5">
            Log in or Sign-up page
          </h3>
          <hr className="bg-[#000000]" />
          <form >
            <div className="inputbox flex flex-col bg-white my-2 BorderClass ">
              <input
                className="h-14 text-xl rounded-[7px] outline-none px-5"
                type="text"
                placeholder="Email"
              />
              <hr className="bg-[#000000] h-[1.7px]" />
              <input
                className="h-14 text-xl outline-none rounded-[7px] px-5"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="w-full text-center my-5 space-y-3">
              <p className="text-[13px] my-2 text-justify">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.{" "}
                <span className="underline">Privacy policy</span>
              </p>
              <button
                type="submit"
                className="btn w-full bg-red-500 hover:bg-red-500 text-white text-xl mx-auto"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <div className="divider text-[13px] mt-5 ">or</div>

          <div className="Media space-y-5">
            <div className="facebook grid grid-cols-4 borderClass2 p-3 hover:bg-[#c7c8cc]">
              <div className="col-span-1">
                <IoLogoFacebook className="text-[#3b9ffd] text-4xl" />
              </div>
              <div className="col-span-3 text-center text-[18px]">
                Continue with facebook.
              </div>
            </div>
            <div
              className="Google cursor-pointer grid grid-cols-4 borderClass2 p-3 hover:bg-[#c7c8cc]"
            >
              <div className="col-span-1">
                <FcGoogle className="text-[#3b9ffd] text-4xl" />
              </div>
              <div className="col-span-3 text-center text-[18px]">
                Continue with google.
              </div>
            </div>
            <div className="Apple grid grid-cols-4 borderClass2 p-3 hover:bg-[#c7c8cc]">
              <div className="col-span-1">
                <IoLogoApple className="text-[#000000] text-4xl" />
              </div>
              <div className="col-span-3 text-center text-[18px]">
                Continue with apple.
              </div>
            </div>
            <div className="Email grid grid-cols-4 borderClass2 p-3 hover:bg-[#c7c8cc]">
              <div className="col-span-1">
                <MdOutlineMail className="text-[#000000] text-4xl" />
              </div>
              <div className="col-span-3 text-center text-[18px]">
                Continue with email.
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default SignUpPage;
