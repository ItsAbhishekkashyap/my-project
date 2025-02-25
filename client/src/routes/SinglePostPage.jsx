import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold ">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Varun </Link>
            <span>on</span>
            <Link className="text-blue-800">Web design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            quibusdam facilis consequuntur iusto expedita! Inventore vitae
            recusandae ullam atque dolore cumque totam numquam sapiente pariatur
            quo! Eligendi, dignissimos.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="man.jpg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content
       */}

      <div className="flex flex-col md:flex-row gap-8">
        {/* text  */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae
            minus nulla sapiente, commodi quaerat consequuntur ut corporis
            repellat iste, dignissimos natus quia nemo quod maiores eaque et
            eveniet dicta molestiae aut praesentium perferendis optio! Adipisci
            pariatur dolor perferendis deserunt omnis? Omnis consequatur
            explicabo eius veritatis architecto cum voluptatem libero tempore,
            accusamus nihil, nulla ratione. Maxime dicta commodi at quidem,
            exercitationem autem ipsum asperiores ex beatae consequatur nam,
            veniam numquam!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            temporibus ea, iusto consequatur illo repudiandae ex eligendi. A
            voluptatem, id totam exercitationem ullam facilis maxime perferendis
            deserunt, aspernatur labore, itaque dolorum ipsa maiores
            necessitatibus placeat consequuntur veniam dicta quasi in voluptatum
            vitae beatae. Et numquam tenetur fuga, atque commodi nobis
            laboriosam corrupti accusamus doloremque magni nihil nostrum, alias
            quaerat rerum eos incidunt necessitatibus vitae placeat id
            doloribus. Autem, accusantium consequatur?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequatur eos perferendis. Magnam odit sequi voluptatem natus
            impedit beatae inventore. Dolorum id tenetur cumque reiciendis quod
            accusamus voluptatibus eum animi doloribus cupiditate aperiam quidem
            repudiandae nihil aspernatur debitis consequatur iusto, amet
            expedita laboriosam. Quo quos alias illum vel consequatur ab sunt,
            libero ratione dolores hic eius, harum ducimus repudiandae saepe?
            Sequi, mollitia pariatur reprehenderit sapiente est error.
            Explicabo, blanditiis voluptates.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequatur eos perferendis. Magnam odit sequi voluptatem natus
            impedit beatae inventore. Dolorum id tenetur cumque reiciendis quod
            accusamus voluptatibus eum animi doloribus cupiditate aperiam quidem
            repudiandae nihil aspernatur debitis consequatur iusto, amet
            expedita laboriosam. Quo quos alias illum vel consequatur ab sunt,
            libero ratione dolores hic eius, harum ducimus repudiandae saepe?
            Sequi, mollitia pariatur reprehenderit sapiente est error.
            Explicabo, blanditiis voluptates.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequatur eos perferendis. Magnam odit sequi voluptatem natus
            impedit beatae inventore. Dolorum id tenetur cumque reiciendis quod
            accusamus voluptatibus eum animi doloribus cupiditate aperiam quidem
            repudiandae nihil aspernatur debitis consequatur iusto, amet
            expedita laboriosam. Quo quos alias illum vel consequatur ab sunt,
            libero ratione dolores hic eius, harum ducimus repudiandae saepe?
            Sequi, mollitia pariatur reprehenderit sapiente est error.
            Explicabo, blanditiis voluptates.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequatur eos perferendis. Magnam odit sequi voluptatem natus
            impedit beatae inventore. Dolorum id tenetur cumque reiciendis quod
            accusamus voluptatibus eum animi doloribus cupiditate aperiam quidem
            repudiandae nihil aspernatur debitis consequatur iusto, amet
            expedita laboriosam. Quo quos alias illum vel consequatur ab sunt,
            libero ratione dolores hic eius, harum ducimus repudiandae saepe?
            Sequi, mollitia pariatur reprehenderit sapiente est error.
            Explicabo, blanditiis voluptates.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequatur eos perferendis. Magnam odit sequi voluptatem natus
            impedit beatae inventore. Dolorum id tenetur cumque reiciendis quod
            accusamus voluptatibus eum animi doloribus cupiditate aperiam quidem
            repudiandae nihil aspernatur debitis consequatur iusto, amet
            expedita laboriosam. Quo quos alias illum vel consequatur ab sunt,
            libero ratione dolores hic eius, harum ducimus repudiandae saepe?
            Sequi, mollitia pariatur reprehenderit sapiente est error.
            Explicabo, blanditiis voluptates.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequatur eos perferendis. Magnam odit sequi voluptatem natus
            impedit beatae inventore. Dolorum id tenetur cumque reiciendis quod
            accusamus voluptatibus eum animi doloribus cupiditate aperiam quidem
            repudiandae nihil aspernatur debitis consequatur iusto, amet
            expedita laboriosam. Quo quos alias illum vel consequatur ab sunt,
            libero ratione dolores hic eius, harum ducimus repudiandae saepe?
            Sequi, mollitia pariatur reprehenderit sapiente est error.
            Explicabo, blanditiis voluptates.
          </p>
        </div>
        {/* menu  */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4 text-sm text-gray-500">

          <div className=" flex items-center gap-8 ">
            <Image
              src="default-image.jpg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
              />
            <Link className="text-sm text-blue-800">Abhishek kashyap</Link>
          </div>
            <p className="mt-2 mb-2 text-sm">Lorem ipsum dolor sit amet consectetur.</p>

            <div className="flex gap-2">
              <Link>
                <Image src="facebook1.svg" w="24" h="24" />
              </Link>
              <Link>
                <Image src="instagram1.svg" w="24" h="24" />
              </Link>
            </div>
              </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search-Engines
            </Link>
            <Link className="underline">Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage; 
