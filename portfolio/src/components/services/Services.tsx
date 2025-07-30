import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <section className="bg-secondary dark:bg-gray-900 dark:text-white pt-10 pb-2">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          My project
        </h1>
        <p className="text-slate-500 text-center md:w-[50%] mx-auto">
          🧩 Tech Stack: Spring Boot, ReactJS, TypeScript, TailwindCSS, MySQL, Nginx, Ubuntu VPS, Domain Hosting.
        </p>

        <p className="text-slate-500 text-center md:w-[50%] mx-auto">
          ⚙️ Tools: Git & GitHub, IntelliJ IDEA, VS Code, Postman, Maven.
        </p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;
