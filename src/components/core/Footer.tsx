import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-sky-200 p-6">
      <div className="flex flex-col gap-2">
        <h3>Contact Us</h3>

        <span className="flex items-center gap-2">
          <PhoneIcon className=" h-8 w-8" />
          <h4>999-999-9999</h4>
        </span>

        <span className="flex items-center gap-2">
          <EnvelopeIcon className="h-8 w-8" />
          <h4>email@email.com</h4>
        </span>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h3>Follow us</h3>
        <div className="flex gap-2">
          <SocialIcon url="facebook.com" />
          <SocialIcon url="twitter.com" />
          <SocialIcon url="linked.com" />
        </div>
      </div>
    </div>
  );
};
