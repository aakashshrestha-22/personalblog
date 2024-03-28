export default function Subscribe() {
  return (
    <>
      <form className="mt-20 flex flex-col justify-center items-center ">
        <p className="text-5xl text-[#3E613E] text-center font-medium">
          {" "}
          Subscribe
        </p>
        <div className="md:w-1/2  flex items-center flex-col justify-center mt-10 mb-[110px]">
          <div className=" grid items-center gap-10  w-full">
            <div className="">
              <label className="text-[#3E613E] font-medium text-xl">
                Your e-mail:
              </label>
              <input
                placeholder="address@gmail.com"
                className=" mt-4 border border-[#658265] text-lg rounded py-4 px-3 w-full focus:outline-none focus:border-[#3E613E]"
                type="email"
              />
            </div>
            <div>
              <label className="text-[#3E613E] font-medium text-xl">
                Message:
              </label>
              <textarea
                rows={8}
                className=" mt-4 border border-[#658265] rounded py-2 px-3 w-full focus:outline-none focus:border-[#3E613E]"
                placeholder="Your Message...."
              />
            </div>
          </div>
          <div className="w-full rounded-md flex justify-center items-center bg-[#658265] hover:bg-[#3E613E] duration-300 ease-in-out">
            <button
              type="submit"
              className="text-white py-3 text-xl font-medium "
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
