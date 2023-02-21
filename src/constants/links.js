import { intl } from "../utils";
import { INTL } from "./intl";
import vk from "../images/vk.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import telegram from "../images/telegram.svg";

export const navLinks = [
  { href: "#main", title: intl(INTL.LINK.ABOUT) },
  { href: "#speakers", title: intl(INTL.LINK.SPEAKERS) },
];

export const footerLinks = [
  { href: "#main", title: intl(INTL.LINK.ABOUT) },
  { href: "/themes", title: intl(INTL.LINK.THEMES) },
  { href: "/schedules", title: intl(INTL.LINK.SCHEDULES) },
  { href: "#speakers", title: intl(INTL.LINK.SPEAKERS) },
  { href: "/contacts", title: intl(INTL.LINK.CONTACTS) },
];

export const socialLinks = [
  { href: "/vk", title: "Темы", icon: vk },
  { href: "/facebook", title: "Расписание", icon: facebook },
  { href: "/instagram", title: "Спикеры", icon: instagram },
  { href: "/telegram", title: "Контакты", icon: telegram },
];

export const contactsLinks = [
  { href: "/politics", title: "Политика конфиденциальности" },
  { href: "/public", title: "Публичная оферта" },
  { href: "tel:+7 912 123-45-67", title: "+7 912 123-45-67" },
  {
    href: "mailto:about@microsoftforum.com",
    title: "about@microsoftforum.com",
  },
];
