import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map((socialLink) => (
        <SocialLink key={socialLink.id} {...socialLink} />
      ))}
    </div>
  );
};

export default SocialLinks;
