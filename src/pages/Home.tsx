import { Link } from "react-router";

import { Mail, Github, Linkedin, Download, ChevronRight } from "lucide-react";

const HomePage = () => {
  return (
    <main className="page-container">
      <section className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      <section className="text-center z-10 px-8">
        <div className="mb-8">
          <img
            src="profile.png"
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-xl"
          />
        </div>

        <h1 className="text-6xl font-bold text-white mb-6">
          Ahmed{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Al-Farouq
          </span>
        </h1>

        <article
          className="text-2xl text-gray-300 mb-8 font-light"
          aria-label="Roles: Frontend Developer, React Specialist, UI/UX Enthusiast"
        >
          <span className="inline-block animate-[bounce_1s_ease-in-out_infinite]">
            Frontend Developer
          </span>
          <span className="mx-4 text-purple-400">•</span>
          <span className="inline-block animate-[bounce_1s_150ms_ease-in-out_infinite]">
            React Specialist
          </span>
          <span className="mx-4 text-purple-400">•</span>
          <span className="inline-block animate-[bounce_1s_300ms_ease-in-out_infinite] delay-300">
            UI/UX Enthusiast
          </span>
        </article>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          A front-end developer who crafts fast, accessible, and intuitive
          digital experiences. With a focus on React and responsive design, I
          build maintainable code that scales—while keeping users at the heart
          of every decision. I thrive in remote teams, love pair programming,
          and am always sharpening my skills to create better products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/projects" className="cta-btn">
            View My Work
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </Link>

          <a
            className="cta-btn-outline"
            href="resume.pdf"
            download="Ahmed-Alfarou.pdf"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <a
            href="https://github.com/ahmed-alfarouq"
            target="_blank"
            aria-label="My Github"
            className="text-gray-400 hover:text-black/70 transform hover:scale-110 transition-all duration-300"
          >
            <Github className="w-8 h-8" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-alfarouq"
            target="_blank"
            aria-label="My Linkedin"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-8 h-8" aria-hidden="true" />
          </a>
          <a
            href="mailto:ahmed.omar.alfarouq@gmail.com"
            aria-label="Email me"
            className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-8 h-8" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
