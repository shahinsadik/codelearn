import Image from "next/image";
import image1 from "../public/0.png";
import image2 from "../public/1.png";
import image3 from "../public/2.png";
const CodersProfiles = () => {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      <div className="bg-gradient-to-b from-cyan-500 to-blue-500  h-[459px] mt-5 w-[160px] rounded-t-full rounded-b-full flex flex-col justify-end overflow-hidden items-center">
        <div className="mb-28">
          <h1>Zillio Monoel</h1>
          <p>Data Engineer</p>
        </div>
        <Image className="" height={500} width={500} src={image1} alt="image" />
      </div>
      <div className=" bg-gradient-to-b from-[#dcb1fe] to-blue-500 mt-16 h-[459px] w-[160px] rounded-t-full rounded-b-full flex flex-col justify-end overflow-hidden items-center">
        <div>
          <h1 className="text-center">Lissa Kie</h1>
        <p className="text-center">React Engineer</p>
        <Image className="mt-28" height={500} width={500} src={image2} />
        </div>
      </div>
      <div className="  bg-gradient-to-b from-[#2d0f5a] to-blue-500  h-[459px] w-[160px] rounded-t-full rounded-b-full flex flex-col justify-end overflow-hidden items-center">
        <div className="">
          <h1>Killian James</h1>
          <p>LaravelEngineer</p>
        </div>
        <div className="mt-40 ">
          <Image className="w-full" height={500} width={500} src={image3} />
        </div>
      </div>
    </div>
  );
};

export default CodersProfiles;
