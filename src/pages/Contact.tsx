import ContactForm from "@/features/ContactForm";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <main className="page-container">
      <section className="inner-container">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">ahmed.omar.alfarouq@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+20 1018360530</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
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
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <Github className="w-6 h-6 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-alfarouq"
                target="_blank"
                aria-label="My Linkedin"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" aria-hidden="true" />
              </a>
              <a
                href="mailto:ahmed.omar.alfarouq@gmail.com"
                aria-label="Email me"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors"
              >
                <MessageSquare
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
