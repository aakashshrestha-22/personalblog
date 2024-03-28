import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#658265] flex justify-center gap-[80px] py-6 ">
      <div className=" border hover:scale-125 duration-300 ease-in-out border-[#658265] bg-white text-[#658265] py-3 px-3 rounded-md ">
        <FaFacebookF className="text-3xl  " />
      </div>
      <div className=" border border-[#658265] hover:scale-125 duration-300 ease-in-out bg-white text-[#658265] py-3 px-3 rounded-md ">
        <FaInstagram className="text-3xl" />
      </div>
      <div className=" border border-[#658265] bg-white hover:scale-125 duration-300 ease-in-out text-[#658265] py-3 px-3 rounded-md ">
        <FaTwitter className="text-3xl" />
      </div>
      <div className=" border border-[#658265] bg-white hover:scale-125 duration-300 ease-in-out text-[#658265] py-3 px-3 rounded-md ">
        <FaLinkedin className="text-3xl" />
      </div>
    </div>
  );
}

export default Footer;
