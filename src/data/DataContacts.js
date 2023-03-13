import { DEFAULT_SKILL_BLUE, DEFAULT_SKILL_ORANGE, DEFAULT_SKILL_PURPLE, DEFAULT_SKILL_RED } from "../functions/ColorFunction";
import { ReactComponent as MyGit } from "../svg/git.svg";
import { ReactComponent as MyMail } from "../svg/mail.svg";
import { ReactComponent as MyPhone } from "../svg/phone.svg";
import { ReactComponent as MyLinkedin } from "../svg/linkedin.svg";

export const contacts = [
    {

      data: "bocchino.daniele@gmail.com",
      name: "Email Address",
      href: `mailto:bocchino.daniele@gmail.com`,
      svg: MyMail,
      options: { color: DEFAULT_SKILL_RED },
    },
    {
      data: "(+39) 3311826439",
      name: "Phone Number",
      href: `tel:+393311826439`,
      svg: MyPhone,
      options: {  color: DEFAULT_SKILL_ORANGE },
    },
    {
      data: "Daniele Bocchino",
      name: "Linkedin",
      link: "https://www.linkedin.com/in/daniele-bocchino-aa602a20b/",
      href: `https://www.linkedin.com/in/daniele-bocchino-aa602a20b/`,
      svg: MyLinkedin,
      options: { stroke: true, color: DEFAULT_SKILL_BLUE },
    },
    {
      name: "GitHub",
      data: "DanieleBocchino",
      name: "GitHub",
      link: "https://github.com/DanieleBocchino",
      href: `https://github.com/DanieleBocchino`,
      svg: MyGit,
      options: { stroke: true, color: DEFAULT_SKILL_PURPLE },
    },

  ];