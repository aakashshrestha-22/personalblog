import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function AboutMe() {
  return (
    <>
      <div className=" pt-20 ">
        <div className="md:flex justify-around px-5 py-5 my-28 w-full  ">
          <div className="md:w-3/5 flex justify-center items-center ">
            <div className=" md:w-1/2   ">
              <h1 className="text-[#3E613E] md:text-4xl text-3xl font-medium">
                My name is Aakash Shrestha ...
              </h1>
              <p className="text-black text-justify md:text-xl md:pt-5 pt-3 md:leading-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                aliquam dui ac nunc egestas interdum. Suspendisse dapibus luctus
                dolor quis dignissim. Proin ac auctor nibh. Mauris sed urna id
                elit dictum suscipit. Maecenas hendrerit mollis ligula vel
                lacinia. Donec tellus nisi, dignissim ut massa at, aliquet
                posuere augue. Phasellus dapibus libero purus, quis gravida
                nulla pulvinar at. Morbi porttitor eros magna, convallis
                vehicula sapien gravida nec. Praesent facilisis elit varius
                metus fermentum euismod. Phasellus vulputate nunc mi, eget
                rutrum enim posuere vitae.{" "}
              </p>
            </div>
          </div>
          <div className=" flex  md:w-2/5">
            <Image
              height={1000}
              width={1000}
              alt="myImage"
              src="/assets/aakash.jpg"
              className="rounded-md  md:h-[500px]  w-auto "
            />
          </div>
        </div>
        <div className="relative">
          <Image
            height={800}
            width={800}
            alt="myImage"
            src="/assets/images/aboutbg.webp"
            className="rounded-md  md:h-[600px]  w-full "
          />

          <div className="absolute top-60 left-96 flex flex-col justify-center gap-[80px] py-6 ">
            <div className="flex flex-col items-center justify-center">
              <p className="text-5xl text-white font-medium mb-14 ">
                Let&apos;s be in touch
              </p>
              <div className="flex gap-[50px]">
                <div className=" border hover:scale-125  border-white  text-white py-3 px-3 rounded-md ">
                  <FaFacebookF className="text-3xl  " />
                </div>
                <div className=" border border-white  hover:scale-125 duration-300 ease-in-out  text-white py-3 px-3 rounded-md ">
                  <FaInstagram className="text-3xl" />
                </div>
                <div className=" border border-white   hover:scale-125 duration-300 ease-in-out text-white py-3 px-3 rounded-md ">
                  <FaTwitter className="text-3xl" />
                </div>
                <div className="    border border-white hover:scale-125 duration-300 ease-in-out text-white py-3 px-3 rounded-md ">
                  <FaLinkedin className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
