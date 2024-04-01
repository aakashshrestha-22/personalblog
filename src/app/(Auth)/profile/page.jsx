import ProfileCard from "../components/profilecard";

export default function Profile() {
  const dashboarddata = [
    {
      id: 1,
      title: "Poem",
      recordAmount: "6k",
      imageName: "",
    },
    {
      id: 2,
      title: "Travels",
      recordAmount: "1k",
      imageName: "",
    },
    {
      id: 3,
      title: "Food",
      recordAmount: "10k",
      imageName: "",
    },
    {
      id: 4,
      title: "Interiors",
      recordAmount: "500",
      imageName: "",
    },
  ];
  return (
    <main className=" flex flex-col  ">
      <div className="  w-full  ">
        <p className="text-center  text-4xl font-semibold py-10 text-[#004a89]  ">
          Welcome to Admin Panel!!!
        </p>
        <div className="md:flex  md:items-center md:justify-evenly grid grid-cols-2 gap-5 md:px-0 px-4 ">
          {dashboarddata?.map((items) => {
            return (
              <div
                key={items.id}
                className="shadow-md  hover:scale-105 transform transition-transform ease-in-out duration-300 "
              >
                <ProfileCard
                  title={items.title}
                  number={items.recordAmount}
                  imageSrc={items.imageName}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
