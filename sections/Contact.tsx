import React, { useContext } from 'react';
import SectionCard from '@components/SectionCard';
import ThemeContext from '@contexts/ThemeContext';
import { socialLinks } from '@sections/me';
import ClipCopy from '@components/ClipCopy';
// styles
import styles from '@styles/Contact.module.sass';
import BgTitle from '@components/BgTitle';

const Contact = () => {
  const { themeStyle } = useContext(ThemeContext);

  return (
    // change your title and section id
    <SectionCard id='contact' title='CONTACT' page='04'>
      <>
        <BgTitle title='CONTACT' />
        <p className={styles.articleDescription}>
          {/* change your contact description */}
          Looking for a <b> Developer</b> for <b>freelance work</b>?<br/> I&apos;m{' '}
          <b>available</b> and ready to work! Hit me up and let&apos;s see what we can do, whether for work, or as friends!
        </p>
        <ClipCopy copy='davidachibiri8@gmail.com' theme={themeStyle} />
        <p className={styles.socialLinksTitle}>Connect with me 🥂</p>
        <section className={styles.socialLinksContainer}>
          {/* add your social information in the projectData.tsx file */}
          {socialLinks.map((s, i) => {
            return (
              <a
                key={i}
                href={s.link}
                aria-label={`navigate to ${s.link}`}
                className={styles.link}
                data-social-links={s.title}
              >
                {s.icon}
              </a>
            );
          })}
        </section>
      </>
    </SectionCard>
  );
};

export default Contact;
