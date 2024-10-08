import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 p-6 h-20 bg-[#1B0C4D]">
      <div className="flex items-center">
        <img src="/logo.png" alt="CodeLearn Logo" className="w-12 h-12" />
        <h1 className="text-2xl font-bold ml-3 text-white">CodeLearn</h1>
      </div>
      <nav className="space-x-6">
        <Link href="/" className="text-lg text-white">Home</Link>
        <Link href="/about" className="text-lg text-white">About Us</Link>
        <Link href="#" className="text-lg text-white">Pricing</Link>
        <Link href="#" className="text-lg text-white">Contact</Link>
      </nav>
      <div>
        <button className="bg-[#eae34a] text-[#1b0c4d] px-4 py-2 text-xl rounded-md mr-3">Login</button>
        <button className="bg-[#37266e] text-xl text-white px-4 py-2 rounded-md">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
