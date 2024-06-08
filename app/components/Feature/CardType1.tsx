import Image from "next/image";
interface CardProps {
  title: string;
  description: string;
  image: string;
  button: string;
}
const Card1: React.FC<CardProps> = ({ title, description, image, button }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4
      text-center h-[32rem] p-4 relative my-10"
    >
      <div
        className=" absolute top-0 bg-gradient-to-r from-[#FFFFFF]
      via-50% via-[#F49C5D] to-[#FFFFFF] h-[2px] w-[100vw] "
      />
      <div
        className=" absolute right-2 bg-gradient-to-b from-[#FFFFFF]
      via-50% via-[#F49C5D] to-[#FFFFFF] w-[2px] h-[120%] "
      />
      <Image src={image} alt={title} />

      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg my-10">{description}</p>

      <button
        className="bg-[#FF9345] rounded-lg py-2 px-10
        shadow-md text-white font-medium"
      >
        {button}
      </button>
      <div
        className=" absolute left-2 bg-gradient-to-b from-[#FFFFFF]
      via-50% via-[#F49C5D] to-[#FFFFFF] w-[2px] h-[120%] "
      />
      <div
        className=" absolute bottom-0 bg-gradient-to-r from-[#FFFFFF]
      via-50% via-[#F49C5D] to-[#FFFFFF] h-[2px] w-[100vw] "
      />
    </div>
  );
};

export default Card1;
