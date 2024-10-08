import Image from "next/image";

export default function Skill() {
  return (
    <section className="py-12 bg-white text-black">
      <div className="container mx-auto  px-4 md:px-6">
        <h1 className="my-5 text-purple-500">Lets run together to..</h1>
        <div className="grid items-center gap-6  lg:grid-cols-2 lg:gap-12">
          <div className="flex justify-between">
            <div>
              <h2 className="text-3xl text-left font-bold tracking-tighter sm:text-4xl md:text-5xl mb-5">
                Grow Your Skill
              </h2>
              <Image
                src="https://flashcubeit.com/img/group%20image%203rd%20section.png"
                alt="Feature image"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-muted-foreground md:text-xl">
              This is a brief description of the feature. It should be concise
              yet informative, highlighting the main benefits or aspects of what
              you're presenting.
            </p>
            <div>
              <div className="relative border-l-2 pl-10 border-l-green-500 pb-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  ullam fugiat veritatis? Reiciendis perferendis voluptates
                  fugiat quidem qui ipsum iure?
                </p>
                <div className="absolute -top-2  -left-[10px] h-5 w-5 bg-red-600 rounded-full"></div>
              </div>
              <div className="relative  pl-10 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  ullam fugiat veritatis? Reiciendis perferendis voluptates
                  fugiat quidem qui ipsum iure?
                </p>
                <div className="absolute -top-2  -left-[10px] h-5 w-5 bg-red-600 rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
              <button className="border p-1 px-2 mt-5">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-5 px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold mt-5 tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to code learning centere
            </h2>
            <p className="text-muted-foreground md:text-xl">
              This is a brief description of the feature. It should be concise
              yet informative, highlighting the main benefits or aspects of what
              you're presenting.
            </p>
            <div>
              <div className="relative border-l-2 pl-10 border-l-green-500 pb-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  ullam fugiat veritatis? Reiciendis perferendis voluptates
                  fugiat quidem qui ipsum iure?
                </p>
                <div className="absolute -top-2  -left-[10px] h-5 w-5 bg-red-600 rounded-full"></div>
              </div>
              <div className="relative  pl-10 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  ullam fugiat veritatis? Reiciendis perferendis voluptates
                  fugiat quidem qui ipsum iure?
                </p>
                <div className="absolute -top-2  -left-[10px] h-5 w-5 bg-red-600 rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Image
              src="https://kavoneinstitute.com/wp-content/uploads/2024/04/software-engineering.jpg"
              alt="Feature image"
              width={400}
              height={400}
              className="rounded-lg object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
