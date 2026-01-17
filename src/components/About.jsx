import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import AboutImage from "/sider.jpg";
import { FaXTwitter } from "react-icons/fa6";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        bg-black text-white
        px-4 sm:px-6 md:px-10
        pt-24 sm:pt-28
        pb-16
      "
    >
      {/* Section title */}
      <p className="text-center text-yellow-400 tracking-widest text-sm mb-12">
        ● MORE ABOUT ME
      </p>

      {/* Container */}
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col-reverse
          lg:flex-row
          items-center
          gap-12 lg:gap-20
        "
      >
        {/* LEFT — TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Meet <span className="text-yellow-400">Prachi</span>
          </h1>

          <p className="text-gray-400 mb-6">
            — Built with <span className="text-yellow-400">Logic</span>, Runs on{" "}
            <span className="text-yellow-400">Chai ☕</span>
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I'm <strong className="text-white">Prachi Gupta</strong> — a curious
            mind, a creative engineer, and a builder at heart.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            I love turning creative ideas into clean, responsive, and intelligent
            web experiences using{" "}
            <span className="text-yellow-400 font-semibold">
              React, Node.js, and Tailwind CSS
            </span>
            . My curiosity for how machines learn and adapt inspired me to explore{" "}
            <span className="text-yellow-400 font-semibold">
              Machine Learning
            </span>
            .
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            When I'm not coding, you'll probably find me with a warm cup of chai ☕,
            brainstorming new ideas or experimenting with fresh designs.
          </p>

          <p className="text-gray-300 mb-8">
            Let’s connect — who knows what we can build together!
          </p>

          {/* Social links */}
          <div className="flex justify-center lg:justify-start gap-6">
            <a
              href="https://github.com/Miss-prachi-guptaa"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 border border-white/20
               hover:bg-yellow-400 transition-all duration-300"
            >
              <FaGithub className="text-white text-xl group-hover:text-black" />
            </a>

            <a
              href="https://twitter.com/21PrachiGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 border border-white/20
               hover:bg-yellow-400 transition-all duration-300"
            >
              <FaXTwitter className="text-white text-xl group-hover:text-black" />
            </a>

            <a
              href="https://www.linkedin.com/in/prachi-gupta-b69193294"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 border border-white/20
               hover:bg-yellow-400 transition-all duration-300"
            >
              <FaLinkedin className="text-white text-xl group-hover:text-black" />
            </a>

            <a
              href="mailto:pgupta2543@gmail.com"
              className="group p-4 rounded-full bg-white/10 border border-white/20
               hover:bg-yellow-400 transition-all duration-300"
            >
              <FaEnvelope className="text-white text-xl group-hover:text-black" />
            </a>
          </div>

        </div>

        {/* RIGHT — IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className="
              w-56 h-56
              sm:w-64 sm:h-64
              lg:w-80 lg:h-80
              rounded-full
              overflow-hidden
              border-4 border-yellow-400
              shadow-xl
            "
          >
            <img
              src={AboutImage}
              alt="Prachi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
