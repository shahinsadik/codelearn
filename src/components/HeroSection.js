import CodersProfiles from "./CoderProfile";
import ReviewStats from "./ReviewStar";
const HeroSection = () => {
  return (
    <section className=" py-10  bg-[#160A3A]">
      <div className="container mx-auto px-6 grid grid-cols-2 justify-between  text-white"> 
        <div>
          <div className="flex mb-20">
            <div className="h-5 w-5 rounded-full bg-[#13C163]">√</div>
            <p>Verified by Coursera</p>
          </div>
          <h2 className="text-6xl font-bold ">
            Learn Code <br />
            From Top
            <span className="text-yellow-400"> Coders</span>
          </h2>
          <p className="mt-4 text-lg  ">
            It is a long established fact that a reader will be distracted
            <br /> by readable content of a page when looking at its layout.
            <br />
            The point of using
          </p>
          <div className="mt-6">
            <button className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-md mr-3">
              Get Started
            </button>
            <button className="bg-[291B52] px-6 py-3 rounded-md">
              How it Works
            </button>
          </div>
          <ReviewStats/>
        </div>
        <div>
          <CodersProfiles />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
