const Footer = () => {
    return (
      <footer id="footer" className="relative z-10 bg-[#0f2c2f] text-white text-center py-8 px-4">
        <div className="mb-3 text-lg font-semibold">Let’s get social!</div>
  
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img
              src="/github.png"
              alt="GitHub"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
  
        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Amanuel Tsegay
        </div>
      </footer>
    );
  };
  
  export default Footer;
  