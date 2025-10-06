import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:px-12 md:px-20 lg:px-24 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              MERN Developer & Aspiring SDE
            </h3>
            <p className="text-muted-foreground">
              I’m a passionate <span className="text-primary font-medium">MERN stack developer</span> 
              with hands-on experience in building scalable, responsive, and user-friendly 
              applications. I enjoy turning complex problems into clean, elegant, and 
              efficient solutions.
            </p>

            <p className="text-muted-foreground">
              My goal is to grow as a <span className="text-primary font-medium">Software Development Engineer (SDE)</span>, 
              contributing to impactful products, writing maintainable code, and 
              optimizing performance. I thrive in collaborative environments and 
              constantly upskill myself with modern tools and practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Section - Skills */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable and responsive web applications using 
                    <span className="text-primary font-medium"> MongoDB, Express.js, React, and Node.js</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving & DSA</h4>
                  <p className="text-muted-foreground">
                    Strong foundation in <span className="text-primary font-medium">Data Structures & Algorithms</span>, 
                    focusing on writing efficient and optimized solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Teamwork & Projects</h4>
                  <p className="text-muted-foreground">
                    Experienced in leading and collaborating on projects 
                    using <span className="text-primary font-medium">Agile methodologies</span>, 
                    from idea to deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
