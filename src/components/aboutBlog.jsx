import Image from "next/image";

function AboutBlog() {
  return (
    <>
      <div className="md:flex justify-around px-5 py-5 my-5 ">
        <div className="md:w-3/5 flex justify-center items-center ">
          <div className=" md:w-2/5   ">
            <h1 className="text-[#3E613E] md:text-4xl text-3xl">
              What is this blog about?
            </h1>
            <p className="text-black text-justify md:text-xl md:pt-5 pt-3 md:leading-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquam dui ac nunc egestas interdum. Suspendisse dapibus luctus
              dolor quis dignissim. Proin ac auctor nibh. Mauris sed urna id
              elit dictum suscipit. Maecenas hendrerit mollis ligula vel
              lacinia. Donec tellus nisi, dignissim ut massa at, aliquet posuere
              augue. Phasellus dapibus libero purus, quis gravida nulla pulvinar
              at. Morbi porttitor eros magna, convallis vehicula sapien gravida
              nec. Praesent facilisis elit varius metus fermentum euismod.
              Phasellus vulputate nunc mi, eget rutrum enim posuere vitae.{" "}
            </p>
          </div>
        </div>
        <div className=" flex  md:w-2/5">
          <Image
            height={1000}
            width={1000}
            alt="myImage"
            src="/assets/mypic.jpg"
            className="rounded-md  md:h-[500px]  w-auto "
          />
        </div>
      </div>
    </>
  );
}

export default AboutBlog;
