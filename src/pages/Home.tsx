import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import LazyImage from "@/components/LazyImage";

import { Mail, Github, Linkedin, Download, ChevronRight } from "lucide-react";
import { SplitText } from "gsap/all";

const HomePage = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    const titleSplit = new SplitText(".title", { type: "chars" });
    const paraSplit = new SplitText(".para", { type: "lines" });
    tl.fromTo(
      ".avatar",
      { y: "-200%", x: "-150%" },
      { y: "0%", borderRadius: "100%", ease: "bounce.out" }
    );

    tl.to(".avatar", {
      y: "0%",
      x: "150%",
      rotate: 360,
      ease: "power1.in",
      duration: 0.5,
    });

    tl.to(".avatar", {
      x: 0,
      rotation: 0,
      scale: 1.2,
    });

    tl.from(
      titleSplit.chars,
      {
        yPercent: 100,
        rotation: 15,
        duration: 0.5,
        ease: "back.out",
        stagger: 0.04,
      },
      "-=0.5"
    );

    tl.fromTo(
      ".role",
      { yPercent: 100, opacity: 0, scale: 0.9 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.2)",
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
        ease: "back.out(2)",
        stagger: 0.1,
      },
      "-=0.3"
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
      "-=0.3"
    );

    tl.to(
      ".cta",
      {
        scaleX: 1,
        ease: "power1.inOut",
        duration: 0.1,
        stagger: 0.1,
      },
      "-=0.4"
    );

    tl.fromTo(
      ".icon-link",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, stagger: 0.05 },
      "-=0.4"
    );

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
  }, []);

  return (
    <main className="page-container">
      <section className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      <section className="text-center z-10 p-8 md:py-0">
        <LazyImage
          src="/images/profile.webp"
          alt=""
          className="avatar w-32 h-32 object-cover mx-auto mb-8 border-4 border-purple-500 shadow-xl"
        />

        <h1 className="title text-4xl sm:text-5xl md:text-6xl font-bold leading-relaxed text-white mb-6 overflow-hidden">
          Ahmed{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Al-Farouq
          </span>
        </h1>
        <article
          className="text-2xl text-gray-200 mb-8 font-light overflow-hidden"
          aria-label="Roles: Frontend Developer, React Specialist, UI/UX Enthusiast"
        >
          <span className="inline-block role">Frontend Developer</span>
          <span className="mx-4 text-purple-400 role-dot">•</span>
          <span className="inline-block role">React Specialist</span>
          <span className="mx-4 text-purple-400 role-dot">•</span>
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
          <Link to="/projects" className="cta scale-0 cta-btn">
            View My Work
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </Link>

          <a
            className="cta scale-0 cta-btn-outline"
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
            className="icon-link hover:text-black/70"
          >
            <Github className="w-8 h-8" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-alfarouq"
            target="_blank"
            aria-label="My Linkedin"
            className="icon-link hover:text-blue-400"
          >
            <Linkedin className="w-8 h-8" aria-hidden="true" />
          </a>
          <a
            href="mailto:ahmed.omar.alfarouq@gmail.com"
            aria-label="Email me"
            className="icon-link hover:text-green-400"
          >
            <Mail className="w-8 h-8" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
