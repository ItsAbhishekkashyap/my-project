import { Link } from "react-router-dom"
import Image from "../components/Image"


const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
        {/* image  */}
        <div className="md:hidden xl:block  xl:w-1/3">
            <Image src="tech.png" className="rounded-2xl object-cover  " w="735"/>
        </div>
        {/* details  */}

        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Link>
            <div className="">
                <span>Written by </span>
                <Link className="text-blue-800">Abhishek kashyap </Link>
                <span>on </span>
                <Link className="text-blue-800">Web Design </Link>
                <span>2 days ago</span>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias at doloribus voluptas placeat earum dolore aliquid labore voluptate non iste!
            </p>
            <Link to="/test" className="underline text-blue-800 text-sm">Read More</Link>
        </div>
      
    </div>
  )
}

export default PostListItem
