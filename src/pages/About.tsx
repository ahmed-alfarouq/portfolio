import { Code, MapPin, Calendar } from "lucide-react";

import { experiences } from "@/constants";
import LazyImage from "@/components/LazyImage";

const About = () => {
  return (
    <main className="page-container">
      <div className="inner-container">
        <h2 className="page-title">About Me</h2>

        <section className="space-y-6  mb-16 text-gray-300 leading-relaxed">
          <div className="flex gap-5">
            <div className="card lg:w-3/5">
              <h3 className="card-title">My Story</h3>
              <p className="mb-4">
                I'm a passionate frontend developer with 2 years of hands-on
                experience building modern web applications. My journey began
                when I discovered how a few lines of code could create
                interactive experiences, sparking a love for frontend
                development that continues to grow every day.
              </p>
              <p className="mb-4">
                Currently specializing in React.js and modern JavaScript
                frameworks, I focus on writing clean, accessible code while
                expanding my knowledge in performance optimization and UX best
                practices. What excites me most is solving real problems through
                code and seeing how my work directly improves user experiences.
              </p>
              <strong className="mb-2">
                Though early in my career, I bring:
              </strong>
              <ul className="list-disc ml-5 space-y-1.5">
                <li>
                  A strong foundation in core web technologies (HTML, CSS,
                  JavaScript)
                </li>
                <li>Experience building production-ready React applications</li>
                <li>
                  A commitment to writing maintainable, well-documented code
                </li>
                <li>Enthusiasm for learning industry best practices</li>
                <li>A user-focused approach to development</li>
              </ul>
              <p>
                I'm actively growing my skills through personal projects and
                staying current with web development trends. I'm excited to
                continue developing my expertise while contributing to
                meaningful projects.
              </p>
            </div>
            <LazyImage
              src="/images/me.webp"
              alt=""
              className="rounded-2xl w-4/10 object-cover shadow-2xl hidden lg:block"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="card sm:w-1/2 lg:w-full">
              <h3 className="card-title">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Egypt, Beheria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">10+ Projects Completed</span>
                </div>
              </div>
            </div>
            <LazyImage
              src="/images/me.webp"
              alt=""
              className="rounded-2xl sm:w-1/2 object-cover shadow-2xl lg:hidden"
            />
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Experience
          </h3>
          <article className="space-y-8">
            {experiences.map((exp) => (
              <section key={exp.id} className="card">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {exp.position}
                    </h4>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.duration}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </section>
      </div>
    </main>
  );
};

export default About;
