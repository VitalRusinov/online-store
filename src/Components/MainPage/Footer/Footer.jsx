import styles from "./Footer.module.scss";

import { ReactComponent as FooterLogo } from '../../../assets/svg/FooterLogo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <span>@2023</span>
        <span>Все права защищены</span>
      </div>
      <div className={styles.logo}>
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
