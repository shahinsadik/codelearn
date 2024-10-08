"use client";
import { useState } from "react";

export default function AuthorCardsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const authors = [
    {
      name: "Alice Johnson",
      title: "Senior Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        "Passionate about creating intuitive user interfaces and solving complex problems.",
    },
    {
      name: "Bob Smith",
      title: "UX Designer",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        "Dedicated to crafting beautiful and user-friendly experiences across all platforms.",
    },
    {
      name: "Carol Davis",
      title: "Product Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        "Experienced in guiding products from conception to launch with a user-centric approach.",
    },
    {
      name: "David Wilson",
      title: "Data Scientist",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        "Leveraging data to drive insights and inform strategic decisions across the organization.",
    },
    {
      name: "Eva Martinez",
      title: "Marketing Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
      description:
        "Creating compelling campaigns that resonate with our target audience and drive growth.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (authors.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (authors.length - 2)) % (authors.length - 2)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-black">
      <h1 className="text-3xl font-bold text-center my-3">
        What customers are <br /> saying about us
      </h1>
      <p className="text-center my-5">
        here are many variations of passages of Lorem Ipsum
      </p>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {authors.map((author, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden h-full">
                  <div className="p-6">
                    <div className="">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <img
                          src="https://flashcubeit.com/img/group%20image%203rd%20section.png"
                          alt={`${author.name}'s avatar`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{author.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {author.title}
                        </p>
                      </div>
                    </div>
                    <div
                      className="mt-4 flex items-center"
                      aria-label={`${5} out of 5 stars`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {author.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black font-bold py-2 px-4 rounded-full shadow border border-black"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 border border-black text-black font-bold py-2 px-4 rounded-full shadow"
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center mt-4">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full mx-2 ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
