const About = () => {
  return (
    <section id="about" className="relative z-10 bg-white text-[#0f2c2f] py-20 px-8">
      <div className="max-w-4xl mx-auto animate-fade-in text-center">
        <h2 className="text-3xl font-bold mb-6">About me</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I'm a recent Computer Engineering graduate from the University of Agder (UiA), with a specialization in Software Development.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I’ve developed and deployed full-stack web and mobile applications, desktop software, and handled DevOps pipelines including infrastructure setup using Kubernetes and Terraform. I enjoy working across the stack — from intuitive frontend interfaces to scalable backend systems.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I love learning new technologies and using them to build practical solutions. I’m eager to grow and contribute to impactful teams.
        </p>
      </div>

      {/* Wave Separator */}
     <div className="relative -mb-12 flex justify-end w-full">
  <svg
    viewBox="0 10 3000 80"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-3xl h-auto animate-waveFloat"
    preserveAspectRatio="none"
  >
    <path
      fill="#0f2c2f"
      d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,58.7C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>
</div>


    </section>
  );
};

export default About;
