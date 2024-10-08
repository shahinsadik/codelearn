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
          </div>
            <div className="flex justify-between p-5">
              <p className="text-black">30 Students
              enrolled</p>
              <button className="text-sm text-black border-1 border-gray-500  rounded-lg  ">
                View Courses
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
