import * as React from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react";
import { SEO } from "../components/seo";
import { Link } from "react-router";
import {
  ArrowRight,
  Code,
  Cloud,
  Palette,
  Database,
  Lightning,
  Rocket,
  GithubLogo,
  LinkedinLogo,
  Envelope,
} from "@phosphor-icons/react";

// ============================================
// ANIMATED SVG COMPONENTS
// ============================================

const AnimatedLogo = () => {
  const pathRef = React.useRef<SVGPathElement>(null);

  return (
    <motion.div
      className="relative w-40 h-40 md:w-56 md:h-56"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 480"
        className="w-full h-full"
      >
        <motion.path
          ref={pathRef}
          d="M409.7 409.7c33.2-33.2 23.8-100.2-17.9-169.7 41.7-69.6 51.1-136.5 18-169.7C376.4 37 309.4 46.5 240 88.2 170.4 46.5 103.5 37 70.3 70.2 37 103.6 46.5 170.5 88.2 240c-41.7 69.5-51.1 136.5-18 169.7 33.3 33.2 100.2 23.8 169.8-17.9 69.5 41.7 136.5 51.1 169.7 18Z"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M409.7 409.7c33.2-33.2 23.8-100.2-17.9-169.7 41.7-69.6 51.1-136.5 18-169.7C376.4 37 309.4 46.5 240 88.2 170.4 46.5 103.5 37 70.3 70.2 37 103.6 46.5 170.5 88.2 240c-41.7 69.5-51.1 136.5-18 169.7 33.3 33.2 100.2 23.8 169.8-17.9 69.5 41.7 136.5 51.1 169.7 18Z"
          fill="var(--primary)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--chart-2)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Rotating ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1"
            strokeDasharray="8 12"
            opacity="0.3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ============================================
// ROTATING WORDS COMPONENT
// ============================================

export function RotateWords({
  text = "Rotate",
  words = ["Word 1", "Word 2", "Word 3", "Word 4"],
}: {
  text: string;
  words: string[];
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="text-3xl text-center sm:text-4xl text-primary font-bold tracking-tighter md:text-6xl md:leading-16 w-fit flex items-center gap-2">
      {text}{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: -40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: 40, rotateX: 90 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block bg-linear-to-r from-primary to-chart-2 bg-clip-text text-transparent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// ============================================
// SECTION COMPONENTS
// ============================================

const SectionTitle = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <motion.span
          className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold">{children}</h2>
      <motion.div
        className="h-1 w-24 bg-linear-to-r from-primary to-chart-2 mx-auto mt-4 rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: 96 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </motion.div>
  );
};

// ============================================
// HERO SECTION
// ============================================

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen max-w-7xl mx-auto overflow-hidden">
      <ParticleField />

      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 px-6 md:px-12 py-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <RotateWords
              text="I Build"
              words={["UI/UX", "Frontend", "Backend", "Cloud Apps"]}
            />

            <motion.h1
              className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting Digital
              <span className="block bg-linear-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi! I'm <span className="text-primary font-semibold">Atul</span>,
              a passionate software developer specializing in building
              exceptional digital experiences that blend creativity with
              cutting-edge technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-4"
              >
                View My Work
                <ArrowRight
                  weight="bold"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary/30 text-foreground rounded-full font-semibold hover:border-primary hover:bg-primary/5 transition-all"
              >
                About Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: GithubLogo, href: "https://github.com/atul-code8", label: "GitHub" },
                { icon: LinkedinLogo, href: "https://www.linkedin.com/in/atul-ghormare-799748240/", label: "LinkedIn" },
                { icon: Envelope, href: "mailto:atulghormare6@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Animated Logo */}
          <motion.div style={{ y: y2 }} className="flex-1 flex justify-center">
            <AnimatedLogo />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ============================================
// ABOUT SECTION (Story Telling)
// ============================================

const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Parallax Background Element */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-primary/10 to-chart-2/10 rounded-full blur-3xl"
        style={{ x }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="My Story">The Journey So Far</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-3xl"
                animate={{ rotate: 6 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-chart-2/20 rounded-3xl"
                animate={{ rotate: -3 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Main content box */}
              <div className="relative bg-linear-to-br from-primary/5 to-chart-2/5 backdrop-blur-sm rounded-3xl p-8 h-full flex flex-col justify-center border border-primary/10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="text-8xl mb-4"
                >
                  👨‍💻
                </motion.div>
                <div className="space-y-2">
                  <div className="text-xl font-bold">2+ Years</div>
                  <div className="text-muted-foreground">
                    Building Digital Solutions
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { number: "50+", label: "Frontend" },
                    { number: "30+", label: "Backend" },
                    { number: "15+", label: "Mobile" },
                    { number: "∞", label: "AI Inference" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 bg-background/50 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-center flex justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#58c4dc" viewBox="0 0 256 256"><path d="M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path></svg>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey into software development began with a simple curiosity
              about how websites work. That curiosity evolved into a deep
              passion for creating seamless digital experiences that not only
              look beautiful but also solve real problems.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Over the years, I've had the privilege of working with startups,
              enterprises, and everything in between. Each project has taught me
              something new and reinforced my belief that the best solutions
              come from understanding both the technology and the people who use
              it.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Today, I specialize in building full-stack applications, crafting
              intuitive user interfaces, and architecting scalable cloud
              solutions. My approach combines technical excellence with creative
              thinking to deliver results that exceed expectations.
            </p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Read My Full Story
                <ArrowRight weight="bold" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SKILLS SECTION
// ============================================

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "React, Vue, TypeScript, and modern CSS to create responsive, accessible interfaces.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Node.js, Python, and robust APIs that power scalable applications.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "AWS, Azure, and GCP expertise for reliable, cost-effective infrastructure.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design thinking to create intuitive, delightful experiences.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Lightning,
    title: "Performance",
    description:
      "Optimization techniques that ensure fast, smooth user experiences.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Rocket,
    title: "DevOps",
    description:
      "CI/CD pipelines, containerization, and automation for efficient delivery.",
    color: "from-indigo-500 to-violet-500",
  },
];

const SkillCard = ({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl bg-linear-to-br ${skill.color} flex items-center justify-center mb-4`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon size={28} className="text-white" weight="duotone" />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
        <p className="text-muted-foreground">{skill.description}</p>

        {/* Hover arrow */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowRight className="text-primary" size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="What I Do">Skills & Expertise</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// FEATURED PROJECTS SECTION
// ============================================

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory, payment processing, and analytics.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-purple-600 to-blue-600",
  },
  {
    title: "Video Conference",
    description:
      "A real-time video conferencing platform supports multi-user video calls, screen sharing, chat.",
    tags: ["Next.js", "WebRTC", "Socket.io"],
    gradient: "from-pink-600 to-rose-600",
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure mobile banking solution with biometric auth and instant transfers.",
    tags: ["React Native", "AWS", "GraphQL"],
    gradient: "from-green-600 to-teal-600",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl aspect-4/3 cursor-pointer">
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${project.gradient}`}
        />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id={`dots-${index}`}
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
          </svg>
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
          <motion.div
            animate={{ y: isHovered ? -20 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-white/80 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* View Project Button */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors">
              View Project
              <ArrowRight weight="bold" size={16} />
            </button>
          </motion.div>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="My Work">Featured Projects</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All Projects
            <ArrowRight weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// CTA SECTION
// ============================================

const CTASection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  return (
    <section
      ref={ref}
      className="py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-primary/20 via-chart-2/10 to-chart-3/20"
        style={{
          x: useTransform(x, (v) => v * 0.02),
          y: useTransform(y, (v) => v * 0.02),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something
            <span className="block bg-linear-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can work together to bring your ideas to life.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <a
              href="mailto:hello@atul.dev"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Envelope size={24} />
              Get In Touch
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-semibold text-lg hover:border-primary hover:text-primary transition-all"
            >
              View Portfolio
              <ArrowRight weight="bold" size={24} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// MAIN HOME COMPONENT
// ============================================

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Home | Atul - Software Developer"
        description="Atul's Portfolio - Crafting Digital Experiences. Explore my projects, skills, and journey as a software developer."
        keywords={[
          "Atul",
          "Portfolio",
          "Software Developer",
          "Frontend",
          "Backend",
          "Full Stack",
          "React",
          "TypeScript",
        ]}
      />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </div>
  );
};

export default Home;
