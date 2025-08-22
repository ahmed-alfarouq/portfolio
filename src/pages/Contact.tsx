import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ContactForm from "@/features/ContactForm";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    const isMobile = window.innerWidth < 640;

    const title = new SplitText("#connect-title", {
      type: "chars",
    });

    const para = new SplitText("#contact-description", {
      type: "words",
    });

    gsap.fromTo(
      "#contact-title",
      {
        y: 60,
        opacity: 0,
        scale: 0.8,
        rotationX: -30,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      }
    );

    gsap.fromTo(
      title.chars,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, ease: "bounce.out" }
    );

    gsap.fromTo(
      para.words,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, ease: "power1.inOut" }
    );

    gsap.fromTo(
      "#contact-form",
      {
        x: 100,
        opacity: 0,
        rotationY: 20,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        ease: "power1.out",
        delay: 0.3,
      }
    );

    gsap.utils.toArray(".contact-item").forEach((item, index) => {
      gsap.fromTo(
        item as HTMLElement,
        {
          x: -50,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.6 + index * 0.15,
          ease: "back.out(1.7)",
        }
      );
    });

    gsap.utils.toArray(".social-link").forEach((link, index) => {
      const target = link as HTMLElement;
      gsap.fromTo(
        target,
        {
          y: 50,
          opacity: 0,
          scale: 0,
          rotation: 180,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: 0.6 + index * 0.15,
          ease: "back.out(1.7)",
        }
      );
    });

    if (!isMobile) {
      gsap.utils.toArray(".contact-item").forEach((item) => {
        const target = item as HTMLElement;
        const icon = target.querySelector(".contact-icon-container");

        const handleMouseEnter = () => {
          gsap.to(target, {
            x: 10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1.1,
              rotation: 5,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(target, {
            x: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        target.addEventListener("mouseenter", handleMouseEnter);
        target.addEventListener("mouseleave", handleMouseLeave);
      });

      gsap.utils.toArray(".social-link").forEach((link, index) => {
        const target = link as HTMLElement;
        const handleMouseEnter = () => {
          gsap.to(target, {
            y: -8,
            scale: 1.15,
            rotation: index % 2 === 0 ? 5 : -5,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(target, {
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        target.addEventListener("mouseenter", handleMouseEnter);
        target.addEventListener("mouseleave", handleMouseLeave);
      });
    }

    gsap.fromTo(
      ".bg-decoration",
      {
        scale: 0,
        opacity: 0,
        rotation: -180,
      },
      {
        scale: 1,
        opacity: 0.1,
        rotation: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
        delay: 2,
      }
    );

    gsap.fromTo(
      ".pulse-decoration",
      { scale: 0.5 },
      {
        duration: 2,
        scale: 1,
        repeat: -1,
        yoyo: true,
        ease: "none",
      }
    );

    gsap.utils.toArray(".input").forEach((field, index) => {
      const target = field as HTMLElement;
      gsap.fromTo(
        target,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.8 + index * 0.1,
          ease: "power2.out",
        }
      );
    });

    gsap.fromTo(
      ".submit-button",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 1,
        ease: "back.in",
      }
    );
  }, []);

  return (
    <main className="page-container">
      <section className="inner-container">
        <h1
          className="text-4xl font-bold text-white mb-12 text-center"
          id="contact-title"
        >
          Get In Touch
        </h1>

        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400 rounded-full bg-decoration pulse-decoration opacity-10"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-400 rounded-full bg-decoration pulse-decoration opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-blue-400 rounded-full bg-decoration pulse-decoration opacity-10"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-semibold text-white mb-6"
                id="connect-title"
              >
                Let's Connect
              </h3>
              <p
                className="text-gray-300 text-lg leading-relaxed mb-8 overflow-hidden"
                id="contact-description"
              >
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 contact-item">
                <div className="bg-purple-600 p-3 rounded-lg contact-icon-container">
                  <Mail className="w-6 h-6 text-white contact-icon" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">ahmed.omar.alfarouq@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 contact-item">
                <div className="bg-purple-600 p-3 rounded-lg contact-icon-container">
                  <Phone className="w-6 h-6 text-white contact-icon" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+20 1018360530</p>
                </div>
              </div>

              <div className="flex items-center gap-4 contact-item">
                <div className="bg-purple-600 p-3 rounded-lg contact-icon-container">
                  <MapPin className="w-6 h-6 text-white contact-icon" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Egypt, Beheira</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/ahmed-alfarouq"
                target="_blank"
                aria-label="My Github"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors social-link"
              >
                <Github className="w-6 h-6 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-alfarouq"
                target="_blank"
                aria-label="My Linkedin"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors social-link"
              >
                <Linkedin className="w-6 h-6 text-white" aria-hidden="true" />
              </a>
              <a
                href="mailto:ahmed.omar.alfarouq@gmail.com"
                aria-label="Email me"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors social-link"
              >
                <MessageSquare
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div id="contact-form">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
