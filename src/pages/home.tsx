import { Footer } from "@/components/footer";


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-16 border-y border-primary">
        <h1 className="text-6xl font-bold mb-4 max-w-2xl">
          <span className="text-primary">UI/UX Designer </span>
          Crafting Digital Experiences
        </h1>
        <p className="text-lg max-w-2xl">
          Hi! I'm Atul, a software developer specializing in building
          exceptional digital experiences. Explore my projects and learn more
          about me.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center p-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" className="w-40 h-40">
            <path
                d="M409.7 409.7c33.2-33.2 23.8-100.2-17.9-169.7 41.7-69.6 51.1-136.5 18-169.7C376.4 37 309.4 46.5 240 88.2 170.4 46.5 103.5 37 70.3 70.2 37 103.6 46.5 170.5 88.2 240c-41.7 69.5-51.1 136.5-18 169.7 33.3 33.2 100.2 23.8 169.8-17.9 69.5 41.7 136.5 51.1 169.7 18Z"
                fill="#7f22fe"
            ></path>
            </svg>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
