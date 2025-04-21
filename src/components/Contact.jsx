import { FaLinkedin, FaGithub, FaGitlab, FaBitbucket } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 bg-white text-[#0f2c2f] py-14 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in touch</h2>
        
        <p className="mb-4 text-base md:text-lg leading-relaxed">
          <a
            href="mailto:aman3hda@gmail.com"
            className="font-semibold underline ml-1 hover:text-[#1e4245] transition"
          >
            aman3hda@gmail.com
          </a>
        </p>

        <a href="mailto:aman3hda@gmail.com">
          <button className="bg-[#0f2c2f] text-white px-5 py-2 rounded shadow hover:bg-[#1e4245] transition text-sm">
            Send Email
          </button>
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-8 text-xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#0077b5] text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#333] text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
          >
            <FaGithub />
          </a>

          <a
            href="https://gitlab.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#fc6d26] text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
          >
            <FaGitlab />
          </a>

          <a
            href="https://bitbucket.org"
            target="_blank"
            rel="noreferrer"
            className="bg-[#205081] text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
          >
            <FaBitbucket />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
