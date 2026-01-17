export default function Projects() {
  const projects = [
    {
      title: "Tech Diary",
      year: "2025",
      description:
        "A personal blogging platform where I share insights on web development, programming concepts, and my learning journey. Users can read, explore, and stay updated with tech articles, while the admin can manage posts through a secure dashboard. Built using modern web technologies with a clean, responsive UI.",
      image: "/tech-Diary.png",
      demoLink: "https://techdiary-one.vercel.app",
      codeLink: "https://github.com/Miss-prachi-guptaa/Tech-Diary",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "JWT",
        "Vercel"
      ],
      status: "Completed",
      type: "Blog Website",
    },
    {
      title: "Ai Pdf Connect",
      year: "2025",
      description:
        "AI PDF Assistant is an intelligent full-stack web app that lets users: 📄 Upload and extract text from PDFs 🤖 Get real-time AI summaries (streamed word-by-word like ChatGPT) ❓ Ask questions about the PDF content 🔊 Listen to summaries using Murf AI's realistic voices",
      image: "/Aipdf.png",
      demoLink: "#",
      codeLink: "https://github.com/Miss-prachi-guptaa/Ai-Pdf-Assistant",
      tags: ["React", "TailwindCSS", "NodeJs", "ExpressJs", "MongoDB", "JWT"],
      status: "Completed",
      type: "Web App",
    },
    {
      title: "Resume Builder ",
      year: "2025",
      description:
        "A web application to create professional resumes quickly and efficiently. Users can fill in their details, customize sections, and download their resume in PDF format. Built with Node.js, Express, and MongoDB, with JWT + Session hybrid authentication for secure user management.",
      image: "/resume1.png",
      demoLink: "#",
      codeLink: "https://github.com/Miss-prachi-guptaa/Resume-Builder",
      tags: ["Node.js", "Express", "JavaScript", "TailwindCSS", "HTML", "JWT", "Vercel"],
      status: "Completed",
      type: "Web App",
    },


  ];

  return (
    <section
      id="projects"
      className="bg-[#070b14] py-20 sm:py-24 lg:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-yellow-400 tracking-widest text-sm mb-3">
            ● MY WORK
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            A collection of projects showcasing my journey in web development
            and problem-solving.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10 sm:space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
            group relative rounded-3xl
            bg-gradient-to-br from-[#0f1624] to-[#0a0f1c]
            border border-white/10
            transition-all duration-300
            md:hover:-translate-y-2 md:hover:scale-[1.01]
            hover:border-yellow-500/40
            hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]
          "
            >
              {/* Content */}
              <div className="flex flex-col md:flex-row gap-8 lg:gap-10 p-5 sm:p-6 md:p-8">

                {/* Image */}
                <div
                  className="
                relative w-full md:w-[38%]
                h-[200px] sm:h-[220px] md:h-[240px]
                rounded-xl overflow-hidden
                border border-white/10
                bg-black/30
                flex items-center justify-center
              "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                  w-full h-full object-contain
                  transition duration-300
                  md:group-hover:scale-105
                "
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-medium">
                      {project.type}
                    </span>
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">

                  <div>
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className="text-gray-400 text-sm">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-5 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="
                        px-3 py-1 text-xs sm:text-sm rounded-lg
                        bg-white/5 text-gray-300
                        border border-white/10
                        hover:border-yellow-400
                        hover:text-yellow-300
                        transition
                      "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                      inline-flex justify-center items-center gap-2
                      px-5 py-2.5 rounded-xl
                      bg-white/5 text-white
                      border border-white/10
                      hover:border-yellow-400
                      hover:text-yellow-400
                      transition
                    "
                      >
                        🧑‍💻 Code
                      </a>
                    )}

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                      inline-flex justify-center items-center gap-2
                      px-5 py-2.5 rounded-xl
                      bg-yellow-400 text-black
                      font-medium
                      hover:bg-yellow-300
                      transition
                    "
                      >
                        🚀 Demo
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
