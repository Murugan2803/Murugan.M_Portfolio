import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean code",
    description:
      "I write clean, maintainable code that follows best practices and design patterns.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "I optimize my code for performance, ensuring fast load times and smooth user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I work well in teams, communicating effectively and contributing to a positive team culture.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and trends, I am always looking for ways to innovate and improve my skills.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in ">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Bulding the future,
              <span className="font-serif italic text-white font-normal">
                {" "}
                one component at a time
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software engineer with over 1+ years of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.
              </p>
              <p>
                I specialize in React, Vue.js, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in anition-delay-300">
              <p className="text-medium font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>
          {/* Right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((items, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100} ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                  <items.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-xl font-semibold mb-2">{items.title}</h3>
                <p className="text-sm text-muted-foreground">{items.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
