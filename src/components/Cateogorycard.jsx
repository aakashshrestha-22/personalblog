import Image from "next/image";

export default function CategoryCard() {
  return (
    <>
      <h1 className="text-center text-5xl text-[#3E613E] font-semibold mt-[66px]">
        Category
      </h1>
      <div className="md:flex justify-center gap-0  md:my-[66px] my-[40px] md:mx-[80px] ">
        <div className=" flex flex-col  items-center  md:w-1/4 md:pb-0 pb-16 ">
          <div className=" relative  ">
            <Image
              height={300}
              width={300}
              alt="travel"
              className="  h-[420px]  cursor-pointer "
              src="/assets/images/travel.webp"
            />
            <div className=" flex justify-center shadow-md cursor-pointer   ">
              <h1 className=" px-10 py-4 text-white rounded-md text-center text-4xl absolute bg-[#658265] -bottom-7 hover:bg-[#3E613E] duration-300 ease-in-out ">
                Travels
              </h1>
            </div>
          </div>
          <p className="mt-14 text-lg px-16 text-center">
            Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id
            velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula
            molestie. Nunc at mauris at tortor pretium vestibulum.
          </p>
        </div>
        <div className=" flex flex-col  items-center  md:w-1/4 md:pb-0 pb-16 ">
          <div className=" relative  ">
            <Image
              height={300}
              width={300}
              alt="travel"
              className=" h-[420px] cursor-pointer "
              src="/assets/images/interior.webp"
            />
            <div className=" flex justify-center shadow-md cursor-pointer   ">
              <h1 className=" px-10 py-4 text-white rounded-md text-center text-4xl absolute bg-[#658265] -bottom-7 hover:bg-[#3E613E] duration-300 ease-in-out ">
                Interiors
              </h1>
            </div>
          </div>
          <p className="mt-14 text-lg px-16 text-center">
            Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id
            velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula
            molestie. Nunc at mauris at tortor pretium vestibulum.
          </p>
        </div>
        <div className=" flex flex-col  items-center  md:w-1/4 md:pb-0 pb-16 ">
          <div className=" relative  ">
            <Image
              height={300}
              width={300}
              alt="travel"
              className=" h-[420px] cursor-pointer "
              src="/assets/images/personaldev.webp"
            />
            <div className=" flex justify-center shadow-md cursor-pointer   ">
              <h1 className=" px-10 py-4 text-white rounded-md text-center text-4xl absolute bg-[#658265] -bottom-7 hover:bg-[#3E613E] duration-300 ease-in-out ">
                Personal
              </h1>
            </div>
          </div>
          <p className="mt-14 text-lg px-16 text-center">
            Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id
            velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula
            molestie. Nunc at mauris at tortor pretium vestibulum.
          </p>
        </div>
        <div className=" flex flex-col  items-center  md:w-1/4 md:pb-0 pb-16 ">
          <div className=" relative  ">
            <Image
              height={300}
              width={300}
              alt="travel"
              className=" h-[420px] cursor-pointer "
              src="/assets/images/food.webp"
            />
            <div className=" flex justify-center shadow-md cursor-pointer   ">
              <h1 className=" px-10 py-4 text-white rounded-md text-center text-4xl absolute bg-[#658265] -bottom-7 hover:bg-[#3E613E] duration-300 ease-in-out ">
                Food
              </h1>
            </div>
          </div>
          <p className="mt-14 text-lg px-16 text-center">
            Ut at felis pulvinar, volutpat eros et, egestas purus. Integer id
            velit ac sem porttitor pulvinar. Cras varius quam ac tortor vehicula
            molestie. Nunc at mauris at tortor pretium vestibulum.
          </p>
        </div>
      </div>
    </>
  );
}
