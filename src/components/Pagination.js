export default function StaticPagination() {
    return (
      <div className="px-20  flex items-center justify-center space-x-2 mt-4">
        <button className="px-4 py-2 rounded-md  ">
          Previous
        </button>
  
        <button className="px-3 py-2 rounded-md ">1</button>
        <button className="px-3 py-2 rounded-md ">2</button>
        <button className="px-3 py-2 rounded-full  bg-purple-700">3</button>
        <button className="px-3 py-2 rounded-md ">4</button>
        <button className="px-3 py-2 rounded-md ">5</button>
  
        <button className="px-4 py-2 rounded-md text-white ">
          NEXT
        </button>
      </div>
    );
  }
  