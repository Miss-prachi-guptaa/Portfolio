
import { GraduationCap, Calendar, TrendingUp } from "lucide-react";

export default function EducationSection() {
  const educationData = [
    {
      type: "Higher Education",
      institution: "Bundelkhand University Institute of Engineering & Technology (BUIET), Jhansi",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Bundelkhand University, Jhansi",
      duration: "2023 - 2027",
      logo: "🎓",
      gradient: "from-yellow-900/20 to-orange-900/20",
      border: "border-yellow-900/30",
      hoverBorder: "hover:border-yellow-500/50",
    },
    {
      type: "Senior Secondary (12th)",
      institution: "Purvanchal I C Chandrapar Bhopara , Mau , Uttar Pradesh",
      degree: "Senior Secondary Education",
      location: "Uttar Pradesh Board of High School and Intermediate Education (UPMSP)",
      duration: "2022",
      percentage: "88.8%",
      logo: "🎓",
      gradient: "from-blue-900/20 to-indigo-900/20",
      border: "border-blue-900/30",
      hoverBorder: "hover:border-blue-500/50",
    },
    {
      type: "Secondary (10th)",
      institution: "Rajbali Yadav B I C Rasulpur MAU , Uttar Pradesh",
      degree: "Secondary Education",
      location: "Uttar Pradesh Board of High School and Intermediate Education (UPMSP)",
      duration: "2020",
      percentage: "85.5%",
      logo: "🎓",
      gradient: "from-green-900/20 to-emerald-900/20",
      border: "border-green-900/30",
      hoverBorder: "hover:border-green-500/50",
    },
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-14">
          <GraduationCap className="w-9 h-9 text-yellow-400" />
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Education
          </h1>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${edu.gradient}
                border ${edu.border} ${edu.hoverBorder}
                rounded-3xl p-10
                transition-all duration-300
                hover:scale-[1.015]
                hover:shadow-2xl hover:shadow-black/30`}
            >
              <div className="flex flex-col sm:flex-row gap-8">

                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-slate-800/60 border border-slate-700 flex items-center justify-center text-4xl">
                    {edu.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Type */}
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-slate-800/60 border border-slate-700 text-sm text-slate-300">
                    <GraduationCap className="w-4 h-4" />
                    {edu.type}
                  </span>

                  <h2 className="text-2xl font-semibold text-white mb-3">
                    {edu.institution}
                  </h2>

                  <h3 className="text-lg text-slate-200 mb-2">
                    {edu.degree}
                  </h3>

                  <p className="text-slate-400 mb-6">
                    {edu.location}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/60 border border-slate-700">
                      <Calendar className="w-4 h-4 text-yellow-400" />
                      <span className="text-slate-200">{edu.duration}</span>
                    </div>

                    {edu.percentage && (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-900/30 border border-emerald-700/40">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300 font-medium">
                          {edu.percentage}
                        </span>
                      </div>
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
