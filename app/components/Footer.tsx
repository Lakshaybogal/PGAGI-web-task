import {
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const footerLinks = [
  { name: "Terms and conditions", url: "#" },
  { name: "Privacy policy", url: "#" },
  { name: "Help center", url: "#" },
  { name: "API docs", url: "#" },
  { name: "Careers", url: "#" },
];

const socialMediaIcons = [
  { icon: <FaLinkedinIn />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaXTwitter />, url: "#" },
  { icon: <FaDiscord />, url: "#" },
];

const Footer = () => {
  return (
    <footer>
      <div className="p-6 text-center flex flex-col justify-center items-center gap-2 text-black bg-gradient-to-t from-[#99918B00] to-[#FFD6B8]">
        <h1 className="text-3xl font-bold ">TOINGG</h1>
        <p className="text-xl font-medium text-white p-2">
          We are here to grow your business ❤️
        </p>

        <ul className="flex flex-col gap-2">
          {footerLinks.map((link, index) => (
            <li key={index} className="">
              <a href={link.url} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 mt-10">
          {socialMediaIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="text-3xl text-black hover:text-orange-500 transition-all duration-300 ease-in-out"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="p-4 pl-6 font-medium ">
        <p className="">Copyright &copy; 2024 Toingg</p>
        <p className="">Inc All rights reserved.</p>
        <p className=" flex items-center gap-2 font-normal my-4">
          Join our community <FaDiscord />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
