const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-5xl xl:text-7xl font-bold text-black/5 dark:text-gray-700">
              CONTACT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Contact me
            </h1>
          </div>
          <div className="text-slate-500 flex flex-col space-y-5">
            <p>
              📞 0773 056 505
            </p>
            <p>
              📧 anhtuantphcm522@gmail.com
            </p>
            <p>
              📍 Thủ Đức, Hồ Chí Minh
            </p>
            <a href="https://github.com/Pham-Anh-Tuan">
              🔗 github.com/Pham-Anh-Tuan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
