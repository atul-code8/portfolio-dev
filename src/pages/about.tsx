import { motion } from "motion/react";
import { SEO } from "@/components/seo";
import {
  Code,
  Cloud,
  DeviceMobile,
  Stack,
  Terminal,
  Brain,
} from "@phosphor-icons/react";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO
        title="About Me | Atul"
        description="Learn more about Atul, a passionate software developer specializing in frontend and fullstack development."
        keywords={["About", "Skills", "Experience", "Developer"]}
      />
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 py-24 relative z-10">
        <HeroSection />
        <SkillsSection />
        <ServicesSection />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-24 flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            Crafting Digital
            <span className="text-primary block mt-1">Experiences</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-xl"
        >
          I'm a passionate Frontend Developer with a knack for building
          immersive web applications. With expertise in <strong>Python</strong>,{" "}
          <strong>Fullstack Development</strong>, and{" "}
          <strong>Cloud Services</strong>, I bridge the gap between stunning
          design and robust engineering. I also bring ideas to life on mobile
          with <strong>React Native</strong>.
        </motion.p>
      </div>

      <div className="relative group">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-2xl"
        />
        <div className="absolute inset-0 bg-card rounded-2xl border border-border flex items-center justify-center -rotate-3 group-hover:-rotate-0 transition-transform duration-500 shadow-xl overflow-hidden">
          {/* Placeholder for Profile Image or stylized content */}
          <Code size={64} weight="duotone" className="text-primary/50" />
        </div>
      </div>
    </motion.section>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: "Frontend Dev",
      desc: "React, TypeScript, Tailwind",
    },
    {
      icon: <Terminal size={32} />,
      title: "Python Specialist",
      desc: "Scripting, Automation, AI",
    },
    {
      icon: <Stack size={32} />,
      title: "Fullstack",
      desc: "Node.js, Postgres, API Design",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Services",
      desc: "AWS, Deployment, CI/CD",
    },
    {
      icon: <DeviceMobile size={32} />,
      title: "React Native",
      desc: "Cross-platform Mobile Apps",
    },
    {
      icon: <Brain size={32} />,
      title: "Problem Solving",
      desc: "Algorithms & Logic",
    },
  ];

  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-muted-foreground">
          The tools and technologies I use to build ideas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-muted-foreground text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Web Application Development",
      desc: "Building fast, SEO-friendly, and interactive web apps using modern frameworks like React and Next.js.",
    },
    {
      title: "Mobile App Development",
      desc: "Creating smooth, native-like experiences for iOS and Android using React Native.",
    },
    {
      title: "Backend API Integration",
      desc: "Designing and implementing robust APIs and connecting frontends to powerful backend services.",
    },
    {
      title: "Cloud Deployment",
      desc: "Setting up scalable infrastructure and pipelines on cloud platforms for seamless delivery.",
    },
  ];

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold mb-4">What I Do</h2>
        <p className="text-muted-foreground">
          Delivering high-quality solutions across the stack.
        </p>
      </motion.div>

      <div className="space-y-4">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start md:items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="mt-1 md:mt-0 min-w-[2rem] w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">
              {idx + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
