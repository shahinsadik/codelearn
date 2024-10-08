export default function PopularCourses() {
  return (
    <div className="px-20 ">
      <div className="grid grid-cols-3 gap-5">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <img
            alt="Woman listening to music"
            className="object-cover h-52 w-full"
            src="https://www.codingdojo.com/blog/wp-content/uploads/codelaptop.jpg"
          />
          <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200">
            <p>Design</p>
            <p className="text-sm text-gray-600">
              The 6 Steps to Building a powerful Personal brand
            </p>
            <div className="flex justify-between">
              <p>fddfsd</p>
              <button className="text-sm text-black border-1 border-gray-500  rounded-lg  ">
                View Courses
              </button>
            </div>
          </div>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <img
            alt="Woman listening to music"
            className="object-cover h-52 w-full"
            src="https://nextui.org/images/hero-card.jpeg"
          />
          <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200">
            <p className="text-sm text-gray-600">Available soon.</p>
            <button className="text-sm text-white bg-black rounded-lg px-4 py-1 transition hover:bg-black/80">
              Notify me
            </button>
          </div>
        </div>
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <img
            alt="Woman listening to music"
            className="object-cover h-52 w-full"
            src="https://nextui.org/images/hero-card.jpeg"
          />
          <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200">
            <p className="text-sm text-gray-600">Available soon.</p>
            <button className="text-sm text-white bg-black rounded-lg px-4 py-1 transition hover:bg-black/80">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
