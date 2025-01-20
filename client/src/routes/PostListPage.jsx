import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="mb-8 text-2xl">Development Blog</div>
      <button onClick={() => setOpen((prev) => !prev)} className="bg-blue-800 md:hidden text-sm text-white px-4 py-2 rounded-2xl mb-4  ">
        {open ? "close" : "Filter or Search "}     
      </button>
      <div className="flex flex-col-reverse md:flex-row  gap-8">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
