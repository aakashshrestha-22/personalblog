import Image from "next/image";
function Heropage() {
  return (
    <>
      <div className="  pt-20  ">
        <div className=" md:block hidden  relative  ">
          <Image
            alt="mypage"
            src="/assets/bgimage.jpg"
            className=" w-full h-[850px] "
            height={500}
            width={500}
            quality={75}
          />
        </div>
        <div className=" w-full block md:hidden relative ">
          <Image
            alt="mypage"
            className="  h-[650px]    "
            src="/assets/pencilmobile.webp"
            height={1000}
            width={1000}
            quality={75}
          />
        </div>
        <div className=" flex flex-col text-5xl   font-semibold md:text-9xl md:top-72 md:left-96 absolute top-60 left-5 ">
          <p className=" text-[#3E613E]">My </p>
          <p className="md:py-9 py-4 text-[#658265]">Lifestyle </p>
          <p className="text-[#658265]">Blog</p>
        </div>
      </div>
    </>
  );
}

export default Heropage;
