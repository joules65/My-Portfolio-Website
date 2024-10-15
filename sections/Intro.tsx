import React from 'react';
import SectionCard from '@components/SectionCard';
import styles from '@styles/Intro.module.sass';
import BgTitle from '@components/BgTitle';


const Intro = () => {
  function scrollToContact(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  return (
    // change your title and section id
    <SectionCard id='intro' title='ABOUT' page='01'>
      <>
        <BgTitle title='ABOUT' />
        <div>
          <p>
            {/* add your text here */}
            <span
              className={styles.myName}
              style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
              DAVID ACHIBIRI
            </span>
            
            {/* <br /> */}
            I&apos;m a<b> Fullstack Developer </b>
            Learning as I go.
            I build websites and web applications, learning to build Mobile applications. <b> I use Typescript</b>, <b>React</b>, <b>Tailwind CSS & more</b>
            , and I like watching 2000's shows. <b>I'm a creative writer too!</b>  And I 
            do it pretty well.<br/>
            FUN FACTS:<br/>

            
            1. I love <b>track & field!</b> Did a bit of it myself.<br/>
            2. I speak <b>Igbo, English, Pidgin</b> and currently underway to becoming fluent in French.<br/>
            3. I love African literature.<br/>
            4. My favorite video game right now is probably <b>God Of War 5</b>!<br/>
            5. Leisure time if i'm not feeling introverted you can find me at a <b>pool</b>, on a <b>track</b>, playing <b>basketball</b> or with <b>friends</b>.
          </p>
          Interested? Let&apos;s{' '}
          <a onClick={scrollToContact}>
            <b style={{ textDecoration: 'underline' }}>chat </b>💬
          </a>{' '}
        </div>
      </>
    </SectionCard>
  );
};

export default Intro;
