import Image from "next/image";

export default function Philosophy() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center  md:mx-[50px] md:my-[80px]">
        <div className="md:w-1/2 flex flex-col md:items-start items-center">
          <p className="text-[#3E613E] text-4xl font-medium">My philosophy</p>
          <p className="text-lg py-4 w-3/4 leading-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            rutrum libero nec odio vulputate, sed finibus nisl lobortis. Morbi
            justo arcu, viverra venenatis maximus ut, sagittis in diam.
            Phasellus sollicitudin euismod auctor. Etiam ornare, felis et
            molestie maximus, ex dolor cursus eros, non gravida lorem turpis
            congue eros. Nam molestie odio leo, et lacinia augue varius at.
            Aliquam elementum lorem eu massa semper, ac volutpat lectus
            sagittis. Pellentesque faucibus massa ac elit mollis, et pretium
            ligula elementum. Nullam vel fringilla nisi, in tincidunt dui.
            Curabitur ac arcu ligula. Vestibulum sed dui euismod, dapibus ex ac,
            porta leo. Nulla a ipsum mattis, facilisis urna nec, rhoncus elit.
          </p>
        </div>
        {/* <div className="shadow-md ">
         
        </div> */}
        <div className="relative  ">
          <Image
            height={900}
            width={900}
            alt="philosophy"
            src="/assets/images/myphilosophy1.webp"
            className=" md:w-[700px] md:h-[650px] "
          />
          <Image
            height={600}
            width={500}
            alt="philosophy"
            src="/assets/images/philosophy.jpg"
            className="  absolute md:top-44 top-10 md:w-[500px] md:left-0 left-16 w-[300px] md:h-[520px] h-[300px] md:border-t-[30px]  border-white md:border-l-[0px] border-l-[15px] border-r-[15px]  border-t-[15px] md:border-r-[30px]  "
          />
        </div>
      </div>
    </>
  );
}
