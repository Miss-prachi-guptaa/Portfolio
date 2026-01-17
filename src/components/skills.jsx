export default function Skills() {
  const skills = [
    {
      title: "Languages",
      icon: "</>",
      accent: "yellow",
      items: ["Python", "C", "C++", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      title: "Developer Tools",
      icon: "🛠️",
      accent: "purple",
      items: ["Git", "Postman", "Vercel"],
    },
    {
      title: "Frameworks/Libraries",
      icon: "📦",
      accent: "orange",
      items: ["React", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      title: "Cloud/Databases",
      icon: "☁️",
      accent: "green",
      items: ["MongoDB", "PostgreSQL"],
    },
  ];

  const accentMap = {
    yellow: "hover:shadow-yellow-500/20 border-yellow-500/30 text-yellow-400",
    purple: "hover:shadow-purple-500/20 border-purple-500/30 text-purple-400",
    orange: "hover:shadow-orange-500/20 border-orange-500/30 text-orange-400",
    green: "hover:shadow-green-500/20 border-green-500/30 text-green-400",
  };

  return (
    <section id="skills" className="bg-[#070b14] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-14">
          <span className="text-yellow-400">&lt;/&gt;</span> Technical Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                relative rounded-2xl p-6
                bg-gradient-to-br from-[#101622] to-[#0b0f1a]
                border border-white/10
                transition-all duration-300
                hover:-translate-y-2 hover:scale-[1.02]
                hover:shadow-2xl ${accentMap[skill.accent]}
              `}
            >
              {/* Glow Layer */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 blur-2xl
                transition duration-300
                group-hover:opacity-100`}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl
                  bg-black/40 border border-white/10
                  ${accentMap[skill.accent]}`}
                >
                  {skill.icon}
                </div>

                <h3
                  className={`text-lg font-semibold transition
                  ${accentMap[skill.accent]}`}
                >
                  {skill.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className={`
                      px-3 py-1.5 text-sm rounded-lg
                      bg-white/5 text-gray-300
                      border border-white/10
                      transition-all duration-200
                      hover:text-yellow-300
                      hover:border-yellow-400
                      hover:shadow-[0_0_12px_rgba(234,179,8,0.6)]
                    `}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
