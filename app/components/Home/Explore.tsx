import Image from "next/image";
import expolorImage from "../../assets/image 12.svg";
const Explore = () => {
  return (
    <div
      className="flex justify-center items-center flex-col py-4
      rounded-2xl mx-2 bg-[#FFF6E8] px-6 my-32 gap-4 "
    >
      <Image src={expolorImage} alt="" />
      <h2 className="text-2xl font-medium text-center px-4">
        Explore TOINGG in <span className="text-[#FC6B01]">GPT </span>Store
      </h2>
      <ul className="list-disc px-2 text-sm flex flex-col gap-2">
        <li>
          Interactive Communication: Engage in single or batch calls using
          TOINGG GPT.
        </li>
        <li>
          Advanced Features: Leverage GPT for real-time sentiment analysis
          during calls.
        </li>
        <li>Data Export: Conveniently export call logs to CSV.</li>
        <li>
          Enhanced Usability: Tailored for users familiar with CSV
          functionalities.
        </li>
      </ul>
      <button
        className="bg-gradient-to-r font-semibold
        mx-10 p-1 px-6 w-28 rounded-lg shadow-lg
        from-[#FFA96B] to-[#995B2E] text-white"
      >
        Explore more
      </button>
    </div>
  );
};

export default Explore;
