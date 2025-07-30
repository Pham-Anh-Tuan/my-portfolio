import personImg from "../../assets/portfolio-image.png";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase ">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Tuan
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Full stack Developer
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                Motivated and detail-oriented IT graduate from Nong Lam University with hands-on experience in building full-stack web applications. Seeking an Intern Web Developer position to contribute to real-world projects and grow as a full-stack developer.
              </p>

              <br />

              <p className="text-3xl text-gray-700 dark:text-white">
                🏅 Certification
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                IELTS 6.0 (2025)
              </p>
              <br />
              <p className="text-3xl text-gray-700 dark:text-white">
                🎓 Education
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                Nong Lam University, Ho Chi Minh City (2019 - 2023)
              </p>
            </div>
          </div>
          {/* image section */}
          <div>
            <img
              src={personImg}
              className="w-96 md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
