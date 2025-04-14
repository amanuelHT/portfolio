const Contact = () => {
    return (
      <section id="contact" className="relative z-10 bg-[#fdf0d5] text-[#0f2c2f] py-20 px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
          <p className="mb-6 text-lg leading-relaxed">
            If you wanna get in touch, talk to me about a project or just say hi — 
            send me an email at
            <a
              href="mailto:aman@gmail.com"
              className="font-semibold underline ml-1 hover:text-[#1e4245] transition"
            >
              aman@gmail.com
            </a>
            , or click the button below 😉
          </p>
          <a href="mailto:aman@gmail.com">
            <button className="bg-[#0f2c2f] text-white px-6 py-2 rounded shadow hover:bg-[#1e4245] transition">
              Send Email
            </button>
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;
  