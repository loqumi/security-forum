import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import {
  navLinks,
  footerLinks,
  socialLinks,
  contactsLinks,
} from "./constants/links";
import { NavLink } from "./components/NavLink";
import "./styles/reset.scss";
import style from "./styles/style.module.scss";
import logo from "./images/logo.svg";
import { Button } from "./components/Button";
import { Main } from "./layouts/Main";
import { Section } from "./layouts/Section";
import { intl } from "./utils";
import { INTL } from "./constants/intl";
import { Row } from "./components/Row";
import { connect, useSelector } from "react-redux";
import { getUsersRequest } from "./models/actions";
import { useEffect } from "react";
import { SpeakerBlock } from "./components/SpeakerBlock";
import { Background } from "./components/Background";

function App({ getUsersRequest }) {
  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  return (
    <div className={style.App}>
      <div className={style.wrapper}>
        <Background />

        <Header>
          <div className={style.logo}>
            <Logo />
            <div className={style.logo_text}>
              <p className={style.logo_title}>{intl(INTL.LOGO.MAIN)}</p>
              <p>{intl(INTL.LOGO.SUB_MAIN)}</p>
            </div>
          </div>

          <LinkList items={navLinks} />

          <SignUpButton />
        </Header>

        <Main>
          <Section id="main">
            <Row direction={"column"} sx={{ width: "84%" }}>
              <h1 className={style.title}>{intl(INTL.TITLES.MAIN)}</h1>

              <h1 className={style.title}>{intl(INTL.TITLES.SUB_MAIN)}</h1>

              <h3 className={style.description}>
                {intl(INTL.DESCRIPTION.MAIN)}
              </h3>
              <p className={style.sub_description}>
                {intl(INTL.DESCRIPTION.SUB_MAIN)}
              </p>
              <SignUpButton />
            </Row>
          </Section>

          <Section id="speakers">
            <h2 className={style.title}>{intl(INTL.TITLES.SPEAKERS)}</h2>

            <SpeakersBlock />
          </Section>
        </Main>

        <Footer>
          <div className={style.logo}>
            <Logo />
            <div className={style.logo_text}>
              <p className={style.logo_title}>{intl(INTL.LOGO.MAIN)}</p>
              <p>{intl(INTL.LOGO.SUB_MAIN)}</p>
            </div>
          </div>

          <LinkList direction="column" items={contactsLinks} />

          <LinkList direction="column" items={footerLinks} />

          <SocialLinks />
        </Footer>
      </div>
    </div>
  );
}
const LinkList = ({ items, direction }) => {
  return (
    <Row direction={direction}>
      {items.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </Row>
  );
};
const SocialLinks = () => {
  return (
    <div className={style.socialLinks}>
      {socialLinks.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </div>
  );
};
const SpeakersBlock = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className={style.block}>
      {users.items.map((speaker) => (
        <SpeakerBlock {...speaker} key={speaker.name} />
      ))}
    </div>
  );
};

const Logo = () => {
  return <img src={logo} alt="logo" width="48" />;
};

const SignUpButton = () => <Button title={intl(INTL.LINK.SIGN_UP)} />;

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
})(App);
