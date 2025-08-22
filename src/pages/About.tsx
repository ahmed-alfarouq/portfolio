import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LazyImage from "@/components/LazyImage";

import { Code, MapPin, Calendar } from "lucide-react";

import { experiences } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    const isMobile = window.innerWidth < 640;

    const storyPara = new SplitText(".story-para", { type: "lines" });
    const storyLastPara = new SplitText(".story-last-para", { type: "lines" });

    tl.fromTo(
      "#page-title",
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out",
      }
    );

    tl.to(
      "#story-card",
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power1.out",
      },
      "-=0.7"
    );

    tl.fromTo(
      "#story-card .card-title",
      {
        x: -20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.fromTo(
      storyPara.lines,
      {
        x: -20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power1.out",
      }
    );

    tl.fromTo(
      "#story-card li",
      {
        x: -20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      storyLastPara.lines,
      {
        x: -20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power1.out",
      }
    );

    if (!isMobile) {
      tl.fromTo(
        "#profile-image",
        {
          x: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: 15,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=3"
      );
    }

    tl.to(
      "#quick-facts-card",
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power1.out",
      },
      "-=2.9"
    );

    tl.fromTo(
      ".quick-fact-item",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=2.5"
    );

    if (isMobile) {
      tl.fromTo(
        ".profile-image-mobile",
        {
          x: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: 15,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1"
      );
    }

    tl.call(() => {
      const experienceTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".experience-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(
        "#experience-title",
        {
          y: 50,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "back.out",
          scrollTrigger: {
            trigger: "#experience-title",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      experienceTl.fromTo(
        ".experience-card",
        {
          y: 80,
          rotationX: 15,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          ease: "power1.out",
          stagger: 0.02,
        }
      );

      experienceTl.fromTo(
        ".tech-tag",
        {
          scale: 0,
          rotation: 180,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          stagger: 0.05,
          ease: "back.out",
        }
      );
    });

    gsap.to("#profile-image, .profile-image-mobile", {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <main className="page-container">
      <div className="inner-container">
        <h2 className="page-title" id="page-title">
          About Me
        </h2>

        <section className="space-y-6  mb-16 text-gray-300 leading-relaxed">
          <div className="flex gap-5">
            <div
              className="card lg:w-3/5  -translate-x-28 opacity-0"
              id="story-card"
            >
              <h3 className="card-title">My Story</h3>
              <p className="mb-4 story-para">
                I'm a passionate frontend developer with 2 years of hands-on
                experience building modern web applications. My journey began
                when I discovered how a few lines of code could create
                interactive experiences, sparking a love for frontend
                development that continues to grow every day.
              </p>
              <p className="mb-4 story-para">
                Currently specializing in React.js and modern JavaScript
                frameworks, I focus on writing clean, accessible code while
                expanding my knowledge in performance optimization and UX best
                practices. What excites me most is solving real problems through
                code and seeing how my work directly improves user experiences.
              </p>
              <strong className="mb-2 story-para">
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
              <p className="story-last-para">
                I'm actively growing my skills through personal projects and
                staying current with web development trends. I'm excited to
                continue developing my expertise while contributing to
                meaningful projects.
              </p>
            </div>
            <LazyImage
              id="profile-image"
              src="/images/me.webp"
              alt=""
              className="rounded-2xl w-4/10 object-cover shadow-2xl hidden lg:block"
            />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-5 -translate-x-28 opacity-0"
            id="quick-facts-card"
          >
            <div className="card sm:w-1/2 lg:w-full">
              <h3 className="card-title">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 quick-fact-item">
                  <MapPin className="w-5 h-5 text-purple-400 quick-fact-icon" />
                  <span className="text-gray-300">Egypt, Beheria</span>
                </div>
                <div className="flex items-center gap-3 quick-fact-item">
                  <Calendar className="w-5 h-5 text-purple-400 quick-fact-icon" />
                  <span className="text-gray-300">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 quick-fact-item">
                  <Code className="w-5 h-5 text-purple-400 quick-fact-icon" />
                  <span className="text-gray-300">10+ Projects Completed</span>
                </div>
              </div>
            </div>
            <LazyImage
              src="/images/me.webp"
              alt=""
              className="rounded-2xl sm:w-1/2 object-cover shadow-2xl lg:hidden profile-image-mobile"
            />
          </div>
        </section>

        <section className="mb-16">
          <h3
            className="text-3xl font-bold text-white mb-8 text-center opacity-0"
            id="experience-title"
          >
            Experience
          </h3>
          <article className="space-y-8">
            {experiences.map((exp) => (
              <section key={exp.id} className="card experience-card opacity-0">
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
                    <span key={techIndex} className="tag tech-tag opacity-0">
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
