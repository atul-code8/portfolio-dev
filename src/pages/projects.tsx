import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CodeIcon,
  GlobeIcon,
  ArrowDownIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import { SEO } from "@/components/seo";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

// Enhanced project data with more details
const projectsData = [
  {
    id: 1,
    title: "IX Store",
    subtitle: "E-commerce Platform",
    description:
      "A fullstack e-commerce application for a clothing store. Built with React, Node.js, Express, and MongoDB. Features user authentication, product management, shopping cart, and order processing with Stripe integration.",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://ix-store.vercel.app/",
    githubUrl: "https://github.com/atul-code8/IXstore",
    year: "2025",
    category: "Web Application",
  },
  {
    id: 2,
    title: "ConnectHub",
    subtitle: "Video Conference Application",
    description:
      "A real-time video conferencing platform with WebRTC. Supports multi-user video calls, screen sharing, chat functionality, and meeting scheduling. Built for seamless remote collaboration.",
    imageUrl:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "WebRTC", "Socket.io", "Node.js", "Redis"],
    liveUrl: "https://video-conf-one.vercel.app/",
    githubUrl: "https://github.com/atul-code8/VideoConf",
    year: "2025",
    category: "Real-time App",
  },
  {
    id: 3,
    title: "AquaPure",
    subtitle: "Product Showcase",
    description:
      "An immersive 3D product showcase for a premium water bottle brand. Features interactive 3D models, smooth animations, and a stunning visual experience using Three.js and GSAP.",
    imageUrl:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "Three.js", "GSAP", "Blender", "WebGL"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    category: "3D Experience",
  },
  {
    id: 4,
    title: "MetroLux",
    subtitle: "Transportation System",
    description:
      "A luxury city bus booking and tracking system. Real-time bus tracking, seat selection, digital tickets, and route optimization. Built with modern web technologies for the best user experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
    techStack: ["Next.js", "PostgreSQL", "Redis", "MapBox", "Prisma"],
    liveUrl: "https://go-bus-pi.vercel.app/",
    githubUrl: "https://github.com/atul-code8/Go-Bus",
    year: "2024",
    category: "SaaS Platform",
  },
];

// Hero Section Component
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const titleText = "My Projects";
  const letters = titleText.split("");

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Animated title */}
      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-medium mb-4 tracking-widest uppercase text-sm"
        >
          Portfolio Showcase
        </motion.p>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 flex justify-center flex-wrap">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              className={letter === " " ? "w-4" : ""}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Explore a collection of projects that showcase my passion for creating
          beautiful, functional, and user-centric digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex gap-4 justify-center"
        >
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            {projectsData.length} Projects
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">
            2024 - 2025
          </Badge>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDownIcon size={24} weight="bold" className="text-primary" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Project Number Component with counter animation
const ProjectNumber = ({ number }: { number: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-[12rem] md:text-[16rem] font-bold text-primary/10 absolute -right-8 md:right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none"
    >
      {String(number).padStart(2, "0")}
    </motion.div>
  );
};

// Individual Project Section Component
const ProjectSection = ({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const isInView = useInView(sectionRef, { once: false, margin: "-20%" });
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });

  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 md:py-32 relative flex items-center overflow-hidden"
    >
      {/* Large project number in background */}
      <ProjectNumber number={project.id} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`flex flex-col ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 lg:gap-20 items-center`}
        >
          {/* Image Section with Parallax */}
          <motion.div
            ref={imageRef}
            style={{ y: imageY, scale: imageScale }}
            className="w-full lg:w-1/2 relative group"
          >
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-2xl"
            >
              {/* Image overlay effect */}
              <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent z-10" />
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Category badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="absolute top-4 left-4 z-20"
              >
                <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-border">
                  {project.category}
                </Badge>
              </motion.div>

              {/* Year badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="absolute top-4 right-4 z-20"
              >
                <Badge
                  variant="outline"
                  className="bg-background/80 backdrop-blur-sm"
                >
                  {project.year}
                </Badge>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div ref={contentRef} className="w-full lg:w-1/2 relative z-10">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-2 tracking-wide uppercase text-sm"
            >
              {project.subtitle}
            </motion.p>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {project.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {project.techStack.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.1 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-medium"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="group">
                  <GlobeIcon weight="bold" className="mr-2" />
                  Live Demo
                  <ArrowRightIcon
                    weight="bold"
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>

              <Link
                to={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="group">
                  <CodeIcon weight="bold" className="mr-2" />
                  View Code
                  <ArrowRightIcon
                    weight="bold"
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Progress Indicator Component
const ProgressIndicator = ({
  currentIndex,
  total,
}: {
  currentIndex: number;
  total: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
    >
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => {
            const sections = document.querySelectorAll("section");
            sections[index + 1]?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative group"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
              index === currentIndex
                ? "bg-primary border-primary"
                : "bg-transparent border-muted-foreground/50 hover:border-primary"
            }`}
          />
          <AnimatePresence>
            {index === currentIndex && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute inset-0 rounded-full bg-primary/30"
                style={{ scale: 2 }}
              />
            )}
          </AnimatePresence>
          <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-muted-foreground whitespace-nowrap">
            {projectsData[index]?.title}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};

// Main Projects Page Component
const Projects = () => {
  const { scrollYProgress } = useScroll();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Calculate current project index based on scroll
  useMotionValueEvent(scrollYProgress, "change", (value: number) => {
    const sectionHeight = 1 / (projectsData.length + 1);
    const index = Math.min(
      Math.max(0, Math.floor((value - sectionHeight) / sectionHeight)),
      projectsData.length - 1,
    );
    setCurrentProjectIndex(index);
  });

  return (
    <div className="bg-background text-foreground">
      <SEO
        title="Projects | Atul"
        description="Showcase of Atul's projects including e-commerce, video conferencing, and more."
        keywords={["Projects", "Portfolio", "Web Apps", "React"]}
      />

      {/* Progress bar at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Progress Indicator */}
      <ProgressIndicator
        currentIndex={currentProjectIndex}
        total={projectsData.length}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Project Sections */}
      {projectsData.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}

      {/* Footer CTA Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <a href="mailto:atulghormare6@gmail.com">
          <Button size="lg" className="group">
            Let's Connect
            <ArrowRightIcon
              weight="bold"
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Button>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
