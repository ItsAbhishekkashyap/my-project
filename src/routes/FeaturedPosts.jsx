import { Link } from "react-router-dom";
import Image from "../components/Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src="icecream.png"
          className="rounded-3xl object-cover"
        />
        {/* details */}
        <div className="">
          <h1 className="font-semibold">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
          to="/test"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sed
          sapiente quaerat accusamus rem!
        </Link>
      </div>
      {/* others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second item */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="man.jpg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />

          {/* details and title */}
          <div className="w-2/3"></div>
        </div>
        {/* third item */}
        <div className="lg:h-1/3 flex justify-between gap-4"></div>
        {/* fourth item */}
        <div className="lg:h-1/3 flex justify-between gap-4"></div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
