import { IoCall } from "react-icons/io5";
const Contact = () => {
  return (
    <div
      className="w-[90%] mx-6 px-6 bg-gradient-to-b from-[#FFD3B4] to-[#FFFFFF]
      flex justify-center flex-col gap-6 py-20 rounded-xl shadow-lg "
    >
      <div>
        <h1 className="text-3xl font-bold"> Try Now </h1>
        <p className="text-[#989898]">Get a call from Toingg</p>
      </div>

      <input
        className="bg-transparent border-[0.5px] px-4 py-1
        rounded-xl border-black focus:outline-none "
        type="text"
        placeholder="Name"
      />
      <span
        className="flex items-center bg-transparent border-[0.5px] px-4 py-1
        rounded-xl border-black focus:outline-none"
      >
        <select className="bg-transparent">
          <option>🇮🇳</option>
        </select>
        <input className="bg-transparent" type="text" placeholder="+91" />
      </span>

      <input
        type="text"
        className="bg-transparent border-[0.5px] px-4 py-1
        rounded-xl border-black focus:outline-none"
        placeholder="Choose your language"
      />
      <button className="w-full flex items-center justify-center ">
        <span className="text-white text-2xl bg-[#FF9345B0] p-3 rounded-full">
          <IoCall />
        </span>
      </button>
    </div>
  );
};

export default Contact;
