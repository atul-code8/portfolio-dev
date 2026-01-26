import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeIcon, GlobeIcon, PlusIcon } from "@phosphor-icons/react";
import { SEO } from "@/components/seo";

const projectsData = [
  {
    title: "IX Store (E-commerce)",
    description:
      "A fullstack e-commerce application clothing store. Its built with React, Node.js, Express, and MongoDB. It features user authentication, product management, shopping cart, and order processing.",
    imageUrl:
      "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Video Conference Application",
    description:
      "A video conference application built with React, Node.js, Express, and MongoDB. It features user authentication, video conferencing, chat, and screen sharing.",
    imageUrl:
      "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Water Bottle ShowCase",
    description:
      "A spring water bottle showcase built with React, Node.js, Express, and MongoDB. It features user authentication, video conferencing, chat, and screen sharing.",
    imageUrl:
      "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "A luxury city bus",
    description:
      "A luxury city bus built with React, Node.js, Express, and MongoDB. It features user authentication, video conferencing, chat, and screen sharing.",
    imageUrl:
      "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Projects = () => {
  return (
    <div className="p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <SEO
        title="Projects | Atul"
        description="Showcase of Atul's projects including e-commerce, video conferencing, and more."
        keywords={["Projects", "Portfolio", "Web Apps", "React"]}
      />
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className="relative w-full max-w-sm mx-auto overflow-hidden pt-0">
      <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
      <img
        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Photo by mymind on Unsplash"
        title="Photo by mymind on Unsplash"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
      />
      <CardHeader>
        <CardTitle className="truncate">{project.title}</CardTitle>
        <CardDescription className="line-clamp-4">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>
              <PlusIcon weight="bold" data-icon="inline-start" />
              Show Dialog
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia>
                {/* <BluetoothIcon /> */}
                <CodeIcon />
              </AlertDialogMedia>
              <AlertDialogTitle>You want to see code?</AlertDialogTitle>
              <AlertDialogDescription>
                Do you want to go to the repository?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
              <AlertDialogAction>Allow</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button className="ml-auto">
          <GlobeIcon weight="bold" data-icon="inline-start" />
          Live Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
