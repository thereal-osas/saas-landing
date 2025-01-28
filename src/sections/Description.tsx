"use client";
import Cube from "@/assets/cube.png";
import Helix from "@/assets/helix.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Integration ecosystem",
    desc: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
    image: Helix,
  },
  {
    id: 2,
    title: "Goal setting and tracking",
    desc: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    image: Cube,
  },
];

export const Description = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Everything you need</div>
          </div>
          <h2 className="section-title mt-5">
            Streamlined for easy management
          </h2>
          <p className="section-description mt-5">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="flex gap-6 items-center mt-10 px-10">
          {data.map(({ id, title, desc, image }) => (
            <div
              key={id}
              className="bg-white shadow-2xl rounded-xl py-10 px-20"
            >
              <div className="mx-auto">
                <Image
                  src={image}
                  alt={title}
                  className="w-64 h-64 items-center mx-auto"
                />
                <h3 className="mt-4 font-semibold text-center text-xl">
                  {title}
                </h3>
                <p className="mt-4 text-[#010D3E] text-center">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
