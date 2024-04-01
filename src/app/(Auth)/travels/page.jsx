import Link from "next/link";
import TableBorder from "../components/tableborder";
export default function Travel() {
  return (
    <>
      <div className="mx-10 my-10">
        <TableBorder
          title={"List of Volume of Milk"}
          title2={
            <div className="flex flex-col   ">
              <div className=" flex justify-end">
                <Link href={"/travels/createTravels"}>
                  <button className="text-white bg-red-600 hover:bg-[#004a89] px-4 py-3 rounded-lg font-bold ">
                    + Add
                  </button>
                </Link>
              </div>
            </div>
          }
        >
          <div className=" my-5">
            <table className="w-full">
              <thead>
                <tr className="bg-[#004a89] text-white text-lg text-center">
                  <td className="py-3">S.No</td>
                  <td className="py-3">Title </td>
                  <td className="py-3">Image</td>
                </tr>
              </thead>
            </table>
          </div>
        </TableBorder>
      </div>
    </>
  );
}
