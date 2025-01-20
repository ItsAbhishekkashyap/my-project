import { useUser } from "@clerk/clerk-react";
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (!isLoaded && !isSignedIn) {
    return <div className="">You Should login!</div>;
  }
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a new Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className=" w-max p-2 shadow-md rounded-xl text-sm  text-gray-500 bg-white">Add a cover image</button>
        <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="My Awesome Story" />
        <div className="flex items-center gap-4 ">
          <label className=" p-2 rounded-xl  shadow " htmlFor="">
            Choose a category:
          </label>
          <select className="p-2 rounded-xl bg-white shadow-md" name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
        className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A short Description..."
          
        />
        <ReactQuill theme = "snow" className="flex-1 rounded-xl bg-white shadow-md"/>
        <button className="bg-blue-800 text-white font-medium  w-36 mt-4 p-2 rounded-xl cursor-pointer">Send</button>
      </form>
    </div>
  );
};

export default Write;
