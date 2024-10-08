import Image from "next/image";
import image1 from "../public/0.png";
import image2 from "../public/1.png";
import image3 from "../public/2.png";
const CodersProfiles = () => {
  return (
    // <div className="grid grid-cols-3 justify-center ">
    //   <div className="text-center">
    //     <div className="rounded-full bg-gradient-to-b from-teal-400 to-teal-600 h-[459px] w-[160px]  "></div>
    //     <h3 className="mt-4 text-xl font-bold text-white">Zilio Moniel</h3>
    //     <p className="text-sm text-gray-300">Data Engineer</p>
    //     <Image className="" height={500} width={500} src={image1} />
    //   </div>
    //   <div className="text-center">
    //     <div className="rounded-full bg-gradient-to-b from-pink-400 to-pink-600 h-[459px] w-[160px]  "></div>
    //     <h3 className="mt-4 text-xl font-bold text-white">Lissa Kie</h3>
    //     <p className="text-sm text-gray-300">React Engineer</p>
    //     <Image className="" height={500} width={500} src={image2} />
    //   </div>
    //   <div className="text-center">
    //     <div className="rounded-full bg-gradient-to-b from-blue-400 to-blue-600 h-[459px] w-[160px]  mx-auto">
    //       <h3 className="mt-4 text-xl font-bold text-white">Kilian James</h3>
    //       <p className="text-sm text-gray-300">Learner Engineer</p>
    //       <Image className="" height={500} width={500} src={image3} />
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-3 gap-5 ">
      <div className="bg-[#61e7c9] mt-16 h-[459px] w-[160px] rounded-t-full rounded-b-full">
        <h1>Zillio Monoel</h1>
        <p>Data Engineer</p>
        <Image className="" height={500} width={500} src={image1} />
      </div>
      <div className="bg-[#dcb1fe] mt-40 h-[459px] w-[160px] rounded-t-full rounded-b-full">
        <h1>Lissa Kie</h1>
        <p>React Engineer</p>
        <Image className="" height={500} width={500} src={image2} />
      </div>
      <div className="bg-[#2d0f5a] h-[459px] w-[160px] rounded-t-full rounded-b-full">
        <div>
          <h1>Killian James</h1>
          <p>LaravelEngineer</p>
        </div>
        <div className="w-full">
          <Image className="w-full" height={500} width={5000} src={image3} />
        </div>
      </div>
    </div>
  );
};

export default CodersProfiles;
