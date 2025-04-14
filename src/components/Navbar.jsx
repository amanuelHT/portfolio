const Navbar = () => {
    return (
        <nav className="z-50 relative bg-[#0f2c2f] text-white py-4 px-6 flex justify-between items-center border-b border-gray-400">
  <div className="text-xl font-bold border p-1 px-2 tracking-widest">GB</div>
  <ul className="flex gap-8 text-sm font-medium">
    <li><a href="#horo" className="hover:text-[#fdf0d5]">Home</a></li>
    <li><a href="#about" className="hover:text-[#fdf0d5]">About</a></li>
    <li><a href="#projects" className="hover:text-[#fdf0d5]">Projects</a></li>
    <li><a href="#contact" className="hover:text-[#fdf0d5]">Contact</a></li>
  </ul>
</nav>

    );
  };
  
  export default Navbar;
  