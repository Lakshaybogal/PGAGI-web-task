import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}
const Card2: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4
      text-center h-[32rem] p-4 rounded-2xl w-80 "
    >
      <Image src={image} alt={title} />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg my-6">{description}</p>
    </div>
  );
};
export default Card2;
