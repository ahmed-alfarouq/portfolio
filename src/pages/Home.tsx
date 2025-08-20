import { useRef } from "react";
import { Link } from "react-router";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

import LazyImage from "@/components/LazyImage";

import { Mail, Github, Linkedin, Download, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const homeRef = useRef(null);
  const timelineRef = useRef<null | gsap.core.Timeline>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      timelineRef.current = tl;

      const isMobile = window.innerWidth < 640;

      const titleSplit = new SplitText(".title", { type: "chars" });
      const paraSplit = new SplitText(".para", { type: "lines" });
      gsap.set(".cta", { scale: 0, opacity: 0 });

      tl.fromTo(
        ".avatar",
        { yPercent: -200, xPercent: -150 },
        { yPercent: 0, ease: "bounce.out" }
      );

      tl.to(".avatar", {
        xPercent: 150,
        rotate: 360,
        ease: "power1.in",
        duration: 0.5,
      });

      tl.to(".avatar", {
        xPercent: 0,
        rotate: 0,
        scale: 1.2,
        duration: 0.2,
      });

      if (isMobile) {
        tl.fromTo(
          ".role-box",
          {
            scale: 0,
            opacity: 0,
            rotation: 180,
            x: 0,
            y: 0,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.5)",
            stagger: {
              amount: 0.4,
              from: "random",
            },
          }
        );
      }

      tl.from(
        titleSplit.chars,
        {
          yPercent: isMobile ? 200 : 100,
          rotation: 15,
          duration: 0.5,
          ease: "back.out",
          stagger: 0.04,
        },
        "-=0.5"
      );

      tl.from(
        paraSplit.lines,
        {
          yPercent: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.08,
        },
        "-=0.8"
      );

      if (isMobile) {
        tl.call(
          () => {
            gsap.delayedCall(0.2, () => {
              gsap.to(".cta", {
                scale: 1,
                opacity: 1,
                ease: "back.out",
                duration: 0.4,
                stagger: 0.25,
                scrollTrigger: {
                  trigger: ".cta",
                  start: "top 85%",
                  toggleActions: "play pause resume reverse",
                  fastScrollEnd: true,
                  preventOverlaps: true,
                },
              });
            });
          },
          undefined,
          "+=0.1"
        );
        tl.call(
          () => {
            gsap.delayedCall(0.2, () => {
              gsap.fromTo(
                ".icon-link",
                {
                  yPercent: 140,
                  opacity: 0,
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: "back.out",
                  stagger: 0.05,
                  scrollTrigger: {
                    trigger: ".cta",
                    start: "top 67%",
                    toggleActions: "play pause resume reverse",
                    fastScrollEnd: true,
                    preventOverlaps: true,
                  },
                }
              );
            });
          },
          undefined,
          "+=0.1"
        );
      } else {
        tl.fromTo(
          ".role",
          { yPercent: 100, opacity: 0, scale: 0.9 },
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out",
            stagger: 0.1,
          }
        );

        tl.fromTo(
          ".role-dot",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: "back.out",
            stagger: 0.1,
          },
          "-=0.3"
        );

        tl.to(
          ".cta",
          {
            scale: 1,
            ease: "power1.inOut",
            duration: 0.1,
            stagger: 0.1,
          },
          "-=0.4"
        );

        tl.fromTo(
          ".icon-link",
          { yPercent: 100 },
          { yPercent: 0, opacity: 1, stagger: 0.05 },
          "-=0.4"
        );
      }

      if (!isMobile) {
        const ctaButtons = document.querySelectorAll(".cta");
        ctaButtons.forEach((btn) => {
          btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.05, duration: 0.1 });
          });

          btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.1 });
          });
        });

        const iconLinks = document.querySelectorAll(".icon-link");
        iconLinks.forEach((link) => {
          link.addEventListener("mouseenter", () => {
            gsap.to(link, { scale: 1.05, duration: 0.1, ease: "power1.inOut" });
          });

          link.addEventListener("mouseleave", () => {
            gsap.to(link, { scale: 1, duration: 0.1, ease: "power1.inOut" });
          });
        });
      }

      return () => {
        timelineRef.current?.kill();
      };
    },
    { scope: homeRef }
  );

  return (
    <main className="page-container" ref={homeRef}>
      <section
        className="absolute inset-0 opacity-20 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-400 rounded-full blur-2xl animate-pulse delay-500 opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyan-400 rounded-full blur-2xl animate-pulse delay-2000 opacity-30"></div>
      </section>

      <section className="text-center z-10 p-8 md:py-0">
        <div className="relative inline-block mb-8">
          <LazyImage
            src="/images/profile.webp"
            alt="Ahmed Al-Farouq - Frontend Developer"
            className="avatar w-32 h-32 object-cover rounded-full mx-auto border-4 border-purple-500 shadow-xl transition-all duration-300"
          />

          <div className="sm:hidden absolute inset-0">
            <div className="role-box absolute -top-4 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs text-white font-medium shadow-lg">
              Frontend
            </div>

            <div className="role-box absolute -top-4 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs text-white font-medium shadow-lg">
              React
            </div>
            <div className="role-box absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs text-white font-medium shadow-lg">
              UI/UX
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300 scale-110 animate-pulse -z-10"></div>
        </div>

        <h1 className="title text-4xl sm:text-5xl md:text-6xl font-bold leading-tight xs:leading-relaxed text-white mb-6 overflow-hidden">
          Ahmed{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Al-Farouq
          </span>
        </h1>

        <article
          className="hidden sm:block text-xl sm:text-2xl text-gray-200 mb-8 font-light overflow-hidden"
          aria-label="Roles: Frontend Developer, React Specialist, UI/UX Enthusiast"
        >
          <span className="inline-block role">Frontend Developer</span>
          <span className="mx-4 text-purple-400 role-dot text-2xl">•</span>
          <span className="inline-block role">React Specialist</span>
          <span className="mx-4 text-purple-400 role-dot text-2xl">•</span>
          <span className="inline-block role">UI/UX Enthusiast</span>
        </article>
        <p className="para text-lg text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          A front-end developer who crafts fast, accessible, and intuitive
          digital experiences. With a focus on React and responsive design, I
          build maintainable code that scales—while keeping users at the heart
          of every decision. I thrive in remote teams, love pair programming,
          and am always sharpening my skills to create better products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/projects" className="cta cta-btn">
            View My Work
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </Link>

          <a
            className="cta cta-btn-outline"
            href="resume.pdf"
            download="Ahmed-Alfarouq.pdf"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Download Resume
          </a>
        </div>
        <div className="flex justify-center space-x-6 mt-12 overflow-hidden">
          <a
            href="https://github.com/ahmed-alfarouq"
            target="_blank"
            aria-label="My Github"
            className="icon-link opacity-0 hover:text-black/70"
          >
            <Github className="w-8 h-8" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-alfarouq"
            target="_blank"
            aria-label="My Linkedin"
            className="icon-link opacity-0 hover:text-blue-400"
          >
            <Linkedin className="w-8 h-8" aria-hidden="true" />
          </a>
          <a
            href="mailto:ahmed.omar.alfarouq@gmail.com"
            aria-label="Email me"
            className="icon-link opacity-0 hover:text-green-400"
          >
            <Mail className="w-8 h-8" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
