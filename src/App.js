import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Amanuel Tsegay</h1>
        <p>Software Engineer | Web Developer | Tech Enthusiast</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Hi! I’m a newly graduated software engineer passionate about web development, system design, and building solutions that help people.</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>C++ / C / Java</li>
          <li>HTML / CSS / JavaScript</li>
          <li>Python / React</li>
          <li>Git / GitHub / DevOps Basics</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Daily Routine Tracker</h3>
          <p>A C++ app that helps users log and analyze their daily routines over time.</p>
          <a href="#">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Expense Tracker</h3>
          <p>A web-based tool to track personal finances, with charts and export options.</p>
          <a href="#">View on GitHub</a>
        </div>
      </section>

      <section id="resume">
        <h2>Resume</h2>
        <p><a href="/resume.pdf" target="_blank">Download my resume (PDF)</a></p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>GitHub: <a href="https://github.com/amanuelHT" target="_blank">github.com/amanuelHT</a></p>
        <p>LinkedIn: <a href="#" target="_blank">Your LinkedIn Profile</a></p>
      </section>

      <footer>
        <p>© 2025 Amanuel Tsegay. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
