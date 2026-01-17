import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] text-gray-400 mt-20">
      {/* TOP GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-yellow-400/30" />

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-10 md:px-20 pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* LEFT */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Prachi <span className="text-yellow-400">Gupta</span>
            </h3>

            <p className="text-lg leading-relaxed max-w-md">
              Full Stack Developer & ML Enthusiast passionate about building
              innovative solutions and creating meaningful digital experiences.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h4 className="text-xl text-white font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-lg">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name} className="transition">
                  <a
                    href={item.href}
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT */}
          <div>
            <h4 className="text-xl text-white font-semibold mb-6">
              Connect With Me
            </h4>

            <p className="text-lg mb-6 max-w-sm">
              Let’s connect and collaborate on exciting projects!
            </p>

            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: "https://github.com/Miss-prachi-guptaa" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/prachi-gupta-b69193294/" },
                { icon: FaTwitter, href: "https://twitter.com/21PrachiGupta" },
                { icon: FaEnvelope, href: "mailto:pgupta2543@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        w-12 h-12 rounded-xl
        bg-white/5 border border-white/10
        flex items-center justify-center
        text-lg
        hover:border-yellow-400 hover:text-yellow-400
        hover:shadow-[0_0_18px_rgba(250,204,21,0.45)]
        transition
      "
                >
                  <Icon />
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 mb-10 h-[1px] bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-base">
          <p>©2026 Prachi Gupta. All rights reserved.</p>

          <p>
            Made with <span className="text-red-500">❤</span> and{" "}
            <span className="text-yellow-400 font-semibold">React.js</span>
          </p>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
      fixed bottom-6 right-6
      bg-yellow-400 text-black
      p-3 rounded-xl
      hover:bg-yellow-500
      hover:shadow-[0_0_20px_rgba(250,204,21,0.6)]
      transition
    "
      >
        <FaArrowUp />
      </button>
    </footer>

  );
};

export default Footer;
