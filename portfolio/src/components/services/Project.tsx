import Logo from "../../assets/a1Logo.png";

const Services = [
    {
        name: "MOTORCYCLE DRIVING TEST SIMULATOR(A1 License, Vietnam)",
        image: "https://picsum.photos/200/300",
        bgColor: "bg-blue-500/70",
    },
];
const Project = () => {
    return (
        <section id="services" className="my-5">
            <div className="grid grid-cols-1 gap-6">
                {Services.map(({ name, image, bgColor }) => (
                    <div
                        key={name}
                        className={` ${bgColor} rounded-xl  bg-blue-500/70 text-white  bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
                    >
                        <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
                            {/* {icon} */}
                            <img src={Logo} alt="My website logo" className="w-16" />
                            <div className="flex items-end justify-between">
                                <h1 className="text-2xl font-bold">{name}</h1>
                                <h1 className="text-xl font-bold">July 2025 - Present</h1>
                            </div>
                            <p>
                                • Deployed website on a VPS with domain <a href="https://onthia1.xyz" className="font-bold text-gray-900"> https://onthia1.xyz </a> <br />
                                • Admin account: Email: tuananh19it@gmail.com | Password: 1234 <br />
                                • Github: https://github.com/Pham-Anh-Tuan/motorcycledriving-test <br />
                                • Team size: 1 <br />
                                • Display question by chapter, randomly, or sequentially. <br />
                                • Users can take practice tests or official-like exams. Results and progress are saved using local storage. <br />
                                • Secure login system for regular users and administrative access. <br />
                                • Admin can add, edit, or delete questions, traffic signs, and news articles. <br />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
