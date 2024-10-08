export default function CategoryCards() {
    const categories = [
      {
        avatar: "https://flashcubeit.com/img/group%20image%203rd%20section.png",
        name: "Technology",
        info: "Latest gadgets and innovations",
        bgColor: "bg-blue-500",
      },
      {
        avatar: "https://flashcubeit.com/img/group%20image%203rd%20section.png",
        name: "Travel",
        info: "Explore new destinations",
        bgColor: "bg-green-500",
      },
      {
        avatar: "https://flashcubeit.com/img/group%20image%203rd%20section.png",
        name: "Food",
        info: "Delicious recipes and culinary tips",
        bgColor: "bg-yellow-500",
      },
      {
        avatar: "https://flashcubeit.com/img/group%20image%203rd%20section.png",
        name: "Fitness",
        info: "Stay healthy and active",
        bgColor: "bg-red-500",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4">Explore Categories</h2>
        <p className="text-center text-gray-600 mb-8">Discover a world of knowledge across various topics</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {categories.map((category, index) => (
    <div 
      key={index} 
      className={`${category.bgColor} rounded-md p-6 text-white shadow-lg transition-transform hover:scale-105`}
    >
      <div className="flex flex-col items-center text-center">
        <img 
          src={category.avatar} 
          alt={`${category.name} icon`} 
          className="w-12 h-12 rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
        <p>{category.info}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    );
  }