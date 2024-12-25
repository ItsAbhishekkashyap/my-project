import { Link } from "react-router-dom";
import MainCategories from "./MainCategories";
import FeaturedPosts from "./FeaturedPosts";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/*BREADCRUMB*/}
      <div className="flex gap-2">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-700">Blogs and Articles</span>
      </div>
      {/*INTRODUCTION*/}
      <div className="flex items-center justify-between">
        {/*titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* animated button */}
        <Link to="write" className="hidden md:block relative" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="text-lg tracking-widest animate-spin animatedButton "
          >
            {/* <!-- Circle --> */}
            <circle cx="100" cy="100" r="60" fill="none" />

            {/* <!-- Path for text --> */}
            <path
              id="circlePath"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              fill="none"
            />

            {/* <!-- Text on circular path --> */}
            <text fill="black">
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20  bg-blue-800 rounded-full flex item-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 12"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
              fill="white" />
            </svg>
          </button>
        </Link>
      </div>
      {/* Categories */}
      <MainCategories/>
      {/*FEATURED POSTS*/}
      <FeaturedPosts />
      {/*POST LIST */}
    </div>
  );
};

export default Homepage;
