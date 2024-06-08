import Image from "next/image";
import icon3 from "../../assets/Mask group-1.svg";
import icon2 from "../../assets/Mask group-2.svg";
import icon1 from "../../assets/Mask group-3.svg";
import icon4 from "../../assets/Mask group.svg";

import dummyvideo from "../../assets/Rectangle 341.svg";

const Hero = () => {
  const icons = [icon1, icon2, icon3, icon4];
  return (
    <div className="flex flex-col justify-center items-cente text-center mt-8 gap-4">
      <h1 className="text-4xl text-[#6F6E6E] font-medium">
        Build AI Calling Agent that can do
      </h1>
      <span className="text-4xl font-bold ">Sales Call</span>
      <button className="mt-6 bg-gradient-to-r font-semibold mx-10 p-1 rounded-lg shadow-lg from-[#FFA96B] to-[#995B2E] text-white flex flex-col justify-center items-center">
        Build your own voice agent
        <span className="text-black">‘It’s free!’</span>
      </button>
      <button className="border-[0.5px] border-black py-2 mx-20 rounded-lg">
        Hear it in action
      </button>
      <p className="text-[#797979] mt-10">
        Automate your agent with 5000+ integrations like
      </p>
      <div className="flex justify-center items-center gap-4 mt-4">
        {icons.map((icon, index) => (
          <Image key={index} src={icon} alt="" />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image src={dummyvideo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
