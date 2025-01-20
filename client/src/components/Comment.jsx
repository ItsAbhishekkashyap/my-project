import Image from "./Image";


const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex item-center gap-4">
        <Image src="tech.png" className="w-10 h-10 rounded-full object-cover" w="40"/>
        <span className="font-medium">Abhishek Kashyap</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nostrum mollitia perspiciatis, eveniet soluta deserunt rerum!</p>
      </div>
    </div>
  );
}

export default Comment;
