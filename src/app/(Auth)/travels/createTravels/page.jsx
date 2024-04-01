"use client";
import ReactQuill from "react-quill";
import FormBorder from "../../components/reusableForm";
import { useEffect, useState } from "react";
export default function CreateTravel() {
  const [editorHtml, setEditorHtml] = useState("");

  useEffect(() => {
    // Check if running on the client side
    if (typeof document !== "undefined") {
      require("react-quill/dist/quill.snow.css"); // Import styles only on the client side
    }
  }, []);
  const handleChange = (html) => {
    setEditorHtml(html);
  };
  return (
    <>
      <div className="mx-10 my-10">
        <form>
          <FormBorder title={"Add the Travel detail"}>
            <div className="grid grid-cols-2 my-5 gap-8">
              <div className="flex flex-col  ">
                <label htmlFor="">
                  Title<span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  className="inputStyle"
                  placeholder="Title Name..."
                  required
                />
                {/* {errors &&
                errors[
                  `donorDetailsForPooling.${index}.volumeOfMilkPooled`
                ] && (
                  <p className="errorMessages">Volume of milk is required.</p>
                )} */}
              </div>
              <div className="flex flex-col  ">
                <label htmlFor="">
                  Image<span className="text-red-600">*</span>
                </label>
                <input
                  type="file"
                  min="0"
                  className="inputStyle"
                  placeholder="Title Name..."
                  required
                />
                {/* {errors &&
                errors[
                  `donorDetailsForPooling.${index}.volumeOfMilkPooled`
                ] && (
                  <p className="errorMessages">Volume of milk is required.</p>
                )} */}
              </div>
            </div>
            <div className=" col-span-2 ">
              <label>Description</label>
              {typeof document !== "undefined" && (
                <ReactQuill
                  theme="snow"
                  onChange={handleChange}
                  value={editorHtml}
                  modules={CreateTravel.modules}
                  formats={CreateTravel.formats}
                  bounds={".app"}
                  placeholder="Write something..."
                  className="border-2 rounded-md  border-black  "
                />
              )}
            </div>
            <div className="my-3">
              <button
                className={`text-white bg-red-600 hover:bg-[#004a89] px-8 py-2 rounded-lg disabled:bg-gray-300  disabled:cursor-not-allowed `}
              >
                Submit
              </button>
            </div>
          </FormBorder>
        </form>
      </div>
    </>
  );
}
CreateTravel.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

// Quill editor formats
CreateTravel.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
