import { FaLinkedin, FaGithub, FaGitlab, FaBitbucket } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 bg-white text-[#0f2c2f] py-14 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in touch</h2>
        
      

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-8 text-xl">
          <a
            href="https://www.linkedin.com/in/amanuel-hayele-19b6882a1"
            target="_blank"
            rel="noreferrer"
            className="bg-[#0077b5] text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/amanuelHT"
            target="_blank"
            rel="noreferrer"
            className="bg-[#333] text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
          >
            <FaGithub />
          </a>

          <a
            href="https://gitlab.internal.uia.no/amanuelht"
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
