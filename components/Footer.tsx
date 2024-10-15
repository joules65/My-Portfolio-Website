import React from 'react';
import styles from '@styles/Footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Made By Me
      </span>
      <span>
        Interested in using this template?
        Check out the{' '}
        <a href='https://github.com/joules65/my-portfolio-website'>
          repository
        </a>{' '}
        👈
      </span>
    </footer>
  );
};

export default Footer;
