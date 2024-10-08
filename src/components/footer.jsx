import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1b0c4d]">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Logo and Subtext Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                className=" h-6 w-6 text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="font-bold text-white">Code Learn</span>
            </div>
            <p className="text-sm text-muted-foreground text-white">
              C O N T A C T
            </p>
            <p className="text-sm text-muted-foreground text-yellow-400">
              admin@gmail.com
            </p>
          </div>

          {/* Footer Links Section */}
          <nav className="flex gap-5 text-white">
            <Link className="text-sm hover:underline" href="#">
              About Us
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Our Services
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Contact
            </Link>
          </nav>

          {/* Newsletter Subscription Section */}
          <div className="flex flex-col space-y-4 text-white">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest <br /> news and offers.
            </p>
            <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <input
                className="py-2 px-4 rounded-full border-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-white w-64"
                placeholder="Enter your email"
                type="email"
                required
              />
               
        {/* Button */}
        <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors">
          Subscribe
        </button>
              
            </form>
          </div>
        </div>
        <div className=" text-white text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
