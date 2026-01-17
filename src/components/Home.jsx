import { useEffect, useState } from "react";

export default function Home() {
  const roles = [
    "Prachi Gupta",
    "a Web Developer",
    "a Backend Developer",
    "an ML Enthusiast"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting && charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === current.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-start sm:justify-center bg-black pt-24 sm:pt-32 px-4"
    >
      {/* Availability Pill */}
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 text-gray-200 text-sm font-medium backdrop-blur-sm mb-6 sm:mb-8">
        <span className="text-green-500 text-lg leading-none animate-pulse">●</span>
        Available for opportunities
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-inter mb-6 sm:mb-8 text-center">
        Hi, I'm{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          {text}
        </span>
        <span className="ml-1 animate-blink">|</span>
      </h1>

      {/* Subtext */}
      <p className="text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed text-gray-300 mb-6 sm:mb-10 text-center">
        Crafting intelligent web experiences with modern technologies.
        <br />
        From elegant frontends to powerful backends, I bring ideas to life through code.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 text-black font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 transform transition hover:-translate-y-1"
        >
          View My Work →
        </a>
        <a
          href="#contact"
          className="px-6 py-3 font-semibold rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
        >
          Get In Touch
        </a>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}
