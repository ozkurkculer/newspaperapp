import { afterRender, Component, ElementRef } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  date: string;
  usedTechnologies: string;
  description: string[];
}

interface Skill {
  category: string;
  icon: string;
  items: string[];
}

interface Project {
  title: string;
  description: string[];
  usedTechnologies: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  experiences: Experience[] = [
    {
      title: 'Fullstack Developer',
      company: 'DGTLFace',
      date: '02/2024 - 05/2024',
      usedTechnologies:
        'Next.js, TailwindCSS, Embla Carousel, shadcn, Strapi, Figma',
      description: [
        'Developed a fully responsive and dynamic corporate website for DGTLFace.',
        'Utilized Next.js for frontend development, integrating Next Intl for four different languages.',
        'Implemented design elements using Tailwind CSS, shadcn and also made carousel designs using Embla Carousel.',
        'Created components for data entry in Strapi, ensuring seamless content management.',
        'Strengthened skills in modern web development frameworks and learned effective integration of localization and design tools',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'BDY Group',
      date: '01/2022 - 09/2022',
      usedTechnologies: 'HTML/CSS, JavaScript, jQuery, Figma, PHP',
      description: [
        'Worked on a "Management System" software project used within the company.',
        'Prepared frontend pages using HTML, CSS, JavaScript, and jQuery.',
        'Created catalog pages for cosmetic products to be sold within the company.',
        'Designed user interfaces using Figma for frontend tasks.',
        'Gained proficiency in combining design tools with web development technologies to create effective user interfaces.',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Belya',
      date: '07/2021 - 09/2021',
      usedTechnologies: 'Oracle DBMS, HTML/CSS, Figma',
      description: [
        'Created and managed databases using Oracle DBMS.',
        'Developed a database for Library Automation.',
        'Worked on the Library Automation Project utilizing .NET and HTML, CSS.',
        'Enhanced frontend pages for the automation system using HTML and CSS.',
        'Acquired skills in database creation and management, and learned to integrate these with .NET for comprehensive project development.',
      ],
    },
  ];

  skills: Skill[] = [
    {
      category: 'Frontend',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>',
      items: [
        'React',
        'Next.js',
        'Tailwind',
        'React Native',
        'Angular',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'JQuery',
        'Bootstrap',
      ],
    },
    {
      category: 'Backend',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>',

      items: ['Node.js', 'Express.js', 'PHP', 'Strapi'],
    },
    {
      category: 'Other',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/></svg>',
      items: ['Python', 'C', 'Java'],
    },
    {
      category: 'Design',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>',

      items: ['Photoshop', 'Illustrator', 'Figma', 'InDesign'],
    },
    {
      category: 'Language',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/></svg>',
      items: ['Turkish (Native)', 'English (B2)'],
    },
  ];

  projects: Project[] = [
    {
      title: 'A-Plus',
      description: [
        'Utilized the MERN Stack structure in project development.',
        'Implemented MongoDB for database management. And used Mongoose for backend and DB communication.',
        'Developed the backend using Node.js and Express.js. Also used Postman for checking and collecting APIs.',
        'Created the frontend with React and developed the mobile application using React Native. Also used Tailwind and MUI for making UI elements. Also authentication, authorization, and encryption systems made with JWT.',
        'Used Framer Motion and Lottie for making animations.',
        'Used Photoshop, Illustrator, and Figma for project planning and design.',
      ],
      usedTechnologies:
        'React, TailwindCSS, MUI, Node.js, Express.js, MongoDB, Mongoose, JWT, Lottie, Framer Motion',
    },
    {
      title: 'PlantTrack',
      description: [
        'Collected humidity and temperature values in the air and soil using Arduino and sensors.',
        'Used the ThingSpeak API to transmit data from Arduino.',
        'Displayed the collected values to users on a web server created with Node.js and MongoDB. Connect them with using Mongoose. Used HTML, CSS, JavaScript, and EJS for making frontend designs.',
        'Implemented real-time data monitoring and display on the web interface.',
        'Gained experience in integrating IoT devices with web applications and visualizing sensor data.',
      ],
      usedTechnologies: 'Arduino, ThingSpeak, Node.js, EJS, MongoDB, Mongoose',
    },
  ];

  constructor(elementRef: ElementRef) {
    afterRender(() => {
      this.skills.forEach((element, index) => {
        const skillIcon = elementRef.nativeElement.querySelector(
          '#skill-icon-' + index
        );
        if (skillIcon) {
          skillIcon.innerHTML = element.icon;
        }
      });
    });
  }
}
