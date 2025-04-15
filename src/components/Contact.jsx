import { FaLinkedin, FaGithub, FaGitlab, FaBitbucket } from "react-icons/fa";


const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 bg-[#fdf0d5] text-[#0f2c2f] py-20 px-8 text-center"
    >
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
        <p className="mb-6 text-lg leading-relaxed">
          Email -
          <a
            href="mailto:aman@gmail.com"
            className="font-semibold underline ml-1 hover:text-[#1e4245] transition"
          >
            aman@gmail.com
          </a>
        </p>

        <a href="mailto:aman@gmail.com">
          <button className="bg-[#0f2c2f] text-white px-6 py-2 rounded shadow hover:bg-[#1e4245] transition">
            Send Email
          </button>
        </a>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
  {/* LinkedIn */}
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
    className="bg-[#0077b5] text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
  >
    <FaLinkedin />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com"
    target="_blank"
    rel="noreferrer"
    className="bg-[#333] text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
  >
    <FaGithub />
  </a>

  {/* GitLab */}
  <a
    href="https://gitlab.com"
    target="_blank"
    rel="noreferrer"
    className="bg-[#fc6d26] text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
  >
    <FaGitlab />
  </a>

  {/* Bitbucket */}
  <a
    href="https://bitbucket.org"
    target="_blank"
    rel="noreferrer"
    className="bg-[#205081] text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
  >
    <FaBitbucket />
  </a>
</div>

      </div>
    </section>
  );
};

export default Contact;
