import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Tealspider23" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/amit-kumar-73a257258/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/am_13_it" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
