import React, { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "MySQL", level: 75, category: "backend" },

  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 30, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 sm:px-12 md:px-20 lg:px-24 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-4 sm:p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-base sm:text-lg">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: skill.level + "%",
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {skill.level} %
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
