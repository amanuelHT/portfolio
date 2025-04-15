const Navbar = () => {
  return (
    <nav className="z-50 relative bg-[#0f2c2f] text-white py-1 px-4 flex justify-between items-center border-b border-gray-400">
      {/* 🔗 Home Link */}
      <a href="#home" className="text-xl font-bold border p-1 px-2 tracking-widest hover:text-[#fdf0d5]">
        AHT
      </a>

      <ul className="flex gap-8 text-sm font-medium">
        
        <li><a href="#about" className="hover:text-[#fdf0d5]">About</a></li>
        <li><a href="#projects" className="hover:text-[#fdf0d5]">Projects</a></li>
        
        <li><a href="#contact" className="hover:text-[#fdf0d5]">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
