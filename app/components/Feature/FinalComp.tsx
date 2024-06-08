import Image from "next/image";
import { FaFilter, FaLock, FaScaleBalanced } from "react-icons/fa6";
import { HiDocumentSearch } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import lock from "../../assets/Security Shield.svg";
const FinalFeature = () => {
  const items = [
    {
      icon: <IoCall />,
      title: "Call Monitoring",
    },
    {
      icon: <FaFilter />,
      title: "Prompt Injection",
    },
    {
      icon: <FaScaleBalanced />,
      title: "Rate Limits",
    },
    {
      icon: <HiDocumentSearch />,
      title: "Internal Hard Audits",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Image src={lock} classname="w-48" alt="lock" />

      <h1 className="text-2xl font-medium">
        The highest standards of trust and safety.
      </h1>
      <p className="text-lg my-14">
        We continue to actively restrict the calls we support, ensuring that our
        AI phone call technology continues to benefit consumers, businesses, and
        society as a whole.
      </p>
      <div className="grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col gap-2"
          >
            <div
              className="bg-[#FF823D] text-white flex justify-center
              items-center p-3 text-2xl rounded-full"
            >
              <span>{item.icon}</span>
            </div>
            <h2 className="font-medium">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalFeature;
