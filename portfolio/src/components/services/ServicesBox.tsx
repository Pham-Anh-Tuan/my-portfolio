import Logo from "../../assets/logo.png";

const Services = [
  {
    name: "SHOE SELLING WEB APPLICATION",
    image: "https://picsum.photos/200/300",
    bgColor: "bg-blue-500/70",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-5">
      <div className="grid grid-cols-1 gap-6">
        {Services.map(({ name, image, bgColor }) => (
          <div
            key={name}
            className={` ${bgColor} rounded-xl  bg-orange-500/70 text-white  bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {/* {icon} */}
              <img src={Logo} alt="My website logo" className="w-20" />
              <div className="flex items-end justify-between">
                <h1 className="text-2xl font-bold">{name}</h1>
                <h1 className="text-xl font-bold">March 2025 - July 2025</h1>
              </div>
              <p>
                • Deployed website on a VPS with domain <a href="https://kushoe.xyz" className="font-bold text-gray-900"> https://kushoe.xyz </a> <br />
                • Admin account: Email: tuananh19it@gmail.com | Password: 4321<br />
                • Github: https://github.com/Pham-Anh-Tuan/shoe-selling-web<br />
                • Team size: 1<br />
                • Developed a full-featured e-commerce website for selling shoes.<br />
                • Backend built with Spring Boot, including RESTful APIs, Spring Security for authentication, and JPA for database operations.<br />
                • Frontend built with ReactJS and TypeScript, styled using TailwindCSS.<br />
                • Features: User authentication, product search, shopping cart, order placement, admin management dashboard.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
