import tour1 from "./assets/images/tour-1.png";
import tour2 from "./assets/images/tour-2.png";
import tour3 from "./assets/images/tour-3.png";
import tour4 from "./assets/images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "contact" },
  { id: 4, href: "#tours", text: "projects" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.x.com", icon: "fab fa-x-twitter" },
  { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fa fa-address-card",
    title: "Email",
    text: "Verner.etola@gmail.com",
  },
  {
    id: 2,
    icon: "fa fa-code",
    title: "Github",
    text: "https://github.com/vernere",
  },
  {
    id: 3,
    icon: "fa fa-gamepad",
    title: "Itch.io",
    text: "https://vernere.itch.io/",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "december 20th, 2024",
    title: "Cloud 5",
    info: `Game made in my 1st year of studies. In my off semester of video game development, I made a slot machine game, using unity 2d core and c#.`,
    location: "Games",
    duration: 2,
    cost: 2100,
    faId: "fa fa-gamepad",
  },
  {
    id: 2,
    image: tour2,
    date: "april 29th, 2025",
    title: "MetroPost",
    info: ` Made in my second year of studies as a software engineering major. A decentralizeed social media platform made for the students of Metropolia UAS`,
    location: "Web App",
    duration: 2,
    cost: 1400,
    faId: "fa fa-cloud",
  },
   {
     id: 3,
     image: tour3,
     date: "June 20th, 2024",
     title: "Package Delivery Simulator 2024",
     info: ` Made in my 1st semester of studies, Package delivery simulator 2024 was made with a Python engine and js, html frontend.`,
     location: "hong kong",
     duration: 8,
     cost: 5000,
     faId: "fa fa-gamepad",
   },/*
   {
     id: 4,
     image: tour4,
     date: "december 5th, 2025",
     title: "kenya highlights",
     info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
     location: "kenya",
     duration: 20,
     cost: 3300,
     faId: "fa fa-gamepad",
   },*/
];
export const code = [
  {
    text: `class Verner_Etola {
  constructor() {
    this.name = 'Verner Etola';
    this.email = 'verner.etola@gmail.com';
  }

  workExperience() {
    return [
      { '2022-now': 'Sub surface warfare petty officer at Finnish Defense Forces - Coastal fleet' },
      { '2020-2022': 'Maritime surveillance petty officer at Finnish Defense Forces - Coastal Brigade' },
      { '2017-2018': 'School attendance assistant & substitute teacher at Winellska skolan - Kirkkonummi municipality' }
    ];
  }

  education() {
    return [
      { '2024-now': 'Metropolia AMK - Information and communication technologies engineer - Software Engineer' },
      { '2015-2018': 'Kyrkslätts gymnasium - Graduate' }
    ];
  }

  skills() {
    return [
      'HTML/CSS/JS', 'React.js', 'Node.js', 'Tailwind', 'Vite', 'npm/yarn/pnpm', 'GIT', 'MySQL/MongoDB',
      'Photoshop', 'UX/UI', 'C#/C++', 'Python', 'Unity'
    ];
  }
}
    `,
  },
];