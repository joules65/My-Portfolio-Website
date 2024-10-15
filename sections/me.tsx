import {
  faRobot,
  faWindowMaximize,
  faFileCode,
  faCodeBranch,
  faUpRightFromSquare,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faBootstrap,
  faNodeJs,
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'; // types

import {
  NavLinkType,
  ProjectCardType,
  SkillItemType,
  SocialLinkType,
} from 'types'; // icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomIcon from '@components/CustomIcon'; //
// COPY THIS FILE AND RENAME IT TO 'projectData' and add your own data
//
//
// THEMES
//
// change your theme colors here

export const lightTheme = {
  // font-color
  color: '#F6FEAA',
  // background-color
  backgroundColor: '#85C7F2',
};
export const darkTheme = {
  color: '#F5F8DE',
  backgroundColor: '#090803',
}; //
// NAVIGATION
//
// add your navbar items here
// make sure the path name matches your section id so the window can scroll to each section

export const links: NavLinkType[] = [
  {
    name: 'intro',
    path: '#intro',
    icon: (
      <FontAwesomeIcon
        icon={faRobot}
        title='scroll to section: intro'
        size='lg'
      />
    ),
  },
  {
    name: 'software',
    path: '#skills',
    icon: (
      <FontAwesomeIcon
        icon={faFileCode}
        title='scroll to section: software'
        size='lg'
      />
    ),
  },
  {
    name: 'projects',
    path: '#projects',
    icon: (
      <FontAwesomeIcon
        icon={faWindowMaximize}
        title='scroll to section: projects'
        size='lg'
      />
    ),
  },
  {
    name: 'contact',
    path: '#contact',
    icon: (
      <FontAwesomeIcon
        icon={faComments}
        title='scroll to section: contact'
        size='lg'
      />
    ),
  },
]; //
// SOCIAL LINKS
//
// add your social buttons here

export const socialLinks: SocialLinkType[] = [
  {
    icon: <FontAwesomeIcon icon={faGithub} title='github' size='2x' />,
    link: 'https://github.com/joules65',
    title: 'github',
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} title='linkedIn' size='2x' />,
    link: 'https://linkedin.com/in/david-achibiri',
    title: 'linkedIn',
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} title='instagram' size='2x' />,
    link: 'https://instagram.com/ebukaisawriter',
    title: 'Instagram',
  },
]; //
// PROJECT CARDS
//
// add your project data object into this array

export const projectData: ProjectCardType[] = [
  {
    title: 'XENIAPAY',
    banner:
      'https://res.cloudinary.com/dhkscpkf5/image/upload/v1729003510/XENIAPAY_o4qyho.png',
    bannerAlt: 'XeniaPay Banner',
    summary:
      "XeniaPay is a payment platform that is targeted towards the African Diaspora. Allowing African-Americans specifically(at the moment) to transfer money to African countries and vice versa.The application is currently having issues, so no available media or site for public use.",
    media: [
      {
        src: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1729003510/XENIAPAY_o4qyho.png',
        alt: 'XeniaPay Demo',
        width: 530,
        height: 300,
      },
    ],
    tags: ['React', 'Typescript', 'TailwindCSS'],
    links: [
      {
        name: 'site',
        path: 'https://github.com/joules65/XENIAPAY',
        icon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
      },
      {
        name: 'code',
        path: 'https://github.com/joules65/XENIAPAY',
        icon: <FontAwesomeIcon icon={faCodeBranch} />,
      },
    ],
  },
  {
    title: 'LoudAm',
    banner:
      'https://res.cloudinary.com/dhkscpkf5/image/upload/v1729004540/icon_x6y3mq.png',
    bannerAlt: 'TLoudAm',
    summary:
      "LoudAm is a music streaming application that pulls its data from Spotify API. ",
    media: [
      {
        src: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1729009627/Untitled_video_-_Made_with_Clipchamp_2_1_1_1_mczdne.gif',
        alt: 'today demo 2',
        width: 517,
        height: 321,
      },
    ],
    tags: ['React-Native', 'typescript', 'Expo CLI'],
    links: [
      {
        name: 'site',
        path: 'https://expo.dev/preview/update?message=DONE&updateRuntimeVersion=1.0.0&createdAt=2024-09-28T18%3A44%3A43.581Z&slug=exp&projectId=d34cf299-c5bd-4e3b-9eaa-a79f0d825c58&group=dce5295d-b42f-4f00-bc2e-8d45ed47f368',
        icon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
      },
      {
        name: 'code',
        path: 'https://github.com/joules65/loudam---CODEQUEST-HACKATHON-SUBMISSION-DAVID-ACHIBIRI',
        icon: <FontAwesomeIcon icon={faCodeBranch} />,
      },
    ],
  },
  {
    title: 'CURELOG',
    banner:
      'https://res.cloudinary.com/dhkscpkf5/image/upload/v1729009855/Screenshot_2024-09-09_185206_nwfzlp.png',
    bannerAlt: 'CURELOG',
    summary:
      "CureLog is a healthcare management system that allows patients to book appointments with Doctors and for Admins to schedule, reschedule and manage appointments.",
    media: [
      {
        src: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1729010583/Dark_Green_Chalk_Board_Good_Luck_Card_akuzdx.png',
        alt: 'UI DESIGN',
        width: 900,
        height: 634,
      },
    ],
    tags: ['react-native', 'typescript', 'vercel', 'web'],
    links: [
      {
        name: 'site',
        path: 'https://curelog-hms.vercel.app',
        icon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
      },
      {
        name: 'code',
        path: 'https://github.com/joule65/curelog',
        icon: <FontAwesomeIcon icon={faCodeBranch} />,
      },
    ],
  },
  {
    title: 'TrueWeather',
    banner:
      'https://res.cloudinary.com/dhkscpkf5/image/upload/v1729011535/logo_axunmg.png',
    bannerAlt: 'weather image',
    summary:
      "This is a simple school project to build a weather app using Python and Tkinter, to pull geolocator information with open APIs.",
    media: [
      {
        src: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1729011665/Screenshot_2024-10-15_180034_f0oaqp.png',
        alt: 'product page example',
        width: 1283,
        height: 650,
        mobileImg: {
          src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664881765/kutsu-eCommerce/kutsu-mobile-demo2_cf3tcv.png',
          width: 365,
          height: 650,
        },
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664362559/kutsu-eCommerce/demo-2_iqoqsr.jpg',
        alt: 'all products example',
        width: 1283,
        height: 650,
        mobileImg: {
          src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664881764/kutsu-eCommerce/kutsu-mobile-demo1_ruowh2.png',
          width: 365,
          height: 650,
        },
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664362558/kutsu-eCommerce/demo-3_fhykgr.jpg',
        alt: 'shopping cart example',
        width: 1283,
        height: 650,
        mobileImg: {
          src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664881765/kutsu-eCommerce/kutsu-mobile-demo3_frxk7h.png',
          width: 365,
          height: 650,
        },
      },
      {
        src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664362558/kutsu-eCommerce/demo-4_uy1dlv.jpg',
        alt: 'checkout page example',
        width: 1283,
        height: 650,
        mobileImg: {
          src: 'https://res.cloudinary.com/dvrs8gsj3/image/upload/c_scale,h_650/v1664881766/kutsu-eCommerce/kutsu-mobile-demo4_hbjaqc.png',
          width: 365,
          height: 650,
        },
      },
    ],
    tags: ['react', 'typescript', 'dinero', 'react-router'],
    links: [
      {
        name: 'site',
        path: 'https://kutsu-shop.netlify.app/',
        icon: <FontAwesomeIcon icon={faUpRightFromSquare} />,
      },
      {
        name: 'code',
        path: 'https://github.com/vanquiche/kutsu-eCommerce',
        icon: <FontAwesomeIcon icon={faCodeBranch} />,
      },
    ],
  },
]; //
// SKILL CARDS
//
// change your skill cards here
// each item will be a column of cards
// create as many or as few as you like

export const skillcard_Styles: SkillItemType[] = [
  {
    text: 'JavaScript',
    icon: <FontAwesomeIcon icon={faJs} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'TypeScript',
    icon: <CustomIcon path='/icons/typescript-icon.png' size={45} />,
    skillLevel: '100%',
  },
  {
    text: 'React',
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'Next',
    icon: <CustomIcon path='/icons/next-js.256x256.png' size={46} />,
    skillLevel: '100%',
  },
];
export const skillcard_Languages: SkillItemType[] = [
  {
    text: 'HTML5',
    icon: <FontAwesomeIcon icon={faHtml5} size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'CSS',
    icon: <FontAwesomeIcon icon={faCss3} size='2x' />,
    skillLevel: '100%',
  },
  
  {
    text: 'Tailwind',
    icon: <CustomIcon path='/icons/tailwind-icon.png' size={45} />,
    skillLevel: '100%',
  },
];
export const skillcard_Frameworks: SkillItemType[] = [
  {
    text: 'Redux',
    icon: <CustomIcon path='/icons/icons8-redux-150.png' size={39} />,
    skillLevel: '100%',
  },
  {
    text: 'Node',
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
    skillLevel: '100%',
  },
  
  
];
