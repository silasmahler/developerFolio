/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Silas Mahler",
  title: "Hallo, ich bin Silas Mahler",
  subTitle: emoji(
    "Ich bin seit 2014 in der Informatik tätig und seit 2015 in der professionellen Softwareentwicklung 🚀 " +
    "Meine Schwerpunkte sind DevOps, Backend-Entwicklung mit Java, sowie Teamleitung und den Aufbau des eigenen Startups, der KreInn GmbH. " +
    "In den letzten Jahren war ich neben der Forschung in einem Großkonzern im Open Source Bereich und als Consultant tätig. " +
    "Nebenbei bin ich ehrenamtlich tätig, leite eine Hackathon-Organisation und mache einen Tech-Podcast."
  ),
  resumeLink:
    "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/silasmahler",
  linkedin: "https://www.linkedin.com/in/silas-mahler-b1b8aa127/",
  gmail: "info@silas-mahler.de",
  gitlab: "https://gitlab.com/silasmahler",
  facebook: "https://www.facebook.com/silas.mahler",
  twitter: "https://twitter.com/SilasMahler",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Womit ich arbeite",
  subTitle: "Eine Auswahl meiner häufig verwendeten Technologien",
  skills: [
    emoji(
      "⚡ Entwicklung und Automatisierung von Workflows und Techn-Stacks mit Docker, CI/CD-Servern und Softwarekomponenten"
    ),
    emoji("⚡ Java Entwicklung mit dem Spring-Framework und Open Source Contributions"),
    emoji(
      "⚡ Digitalisierung von Unternehmen und rapide Entwicklung mit der AWS-Cloud und Serverless-Architekturen"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }
    ,
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "vaadin",
      fontAwesomeClassname: "fab fa-vaadin"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "cloud-providers",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FH Dortmund",
      logo: require("./assets/images/fhdo-logo.png"),
      subHeader: "Master of Science in Informatik",
      duration: "Oktober 2018 - heute",
      desc: "Master-Studium der Informatik",
      descBullets: [
        "Weiterführendes Studium, vertiefende Module: Compilerbau, Nebenläufige Programmierung, Machine Learning und weitere",
        "Forschung- und Entwicklungarbeit zum Thema \"Anwendung von DevOps Prinzipien im Kontext der Entwicklung mit Datenbanken\""
      ]
    },
    {
      schoolName: "FH Dortmund",
      logo: require("./assets/images/fhdo-logo.png"),
      subHeader: "Bachelor of Science in Informatik",
      duration: "September 2014 - September 2018",
      desc:
        "Bachelor-Studium der Informatik",
      descBullets: ["Abschlussarbeit mit Abschlussnote 1,3 zum Thema \"Lokale Entwicklungsumgebung mit Docker\"",
        "Arbeit in der Forschungsgruppe SEELab der FH Dortmund des Idial-Institutes"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Geschäftsführer",
      company: "KreInn GmbH",
      companylogo: require("./assets/images/kreinn.png"),
      date: "September 2019 – heute",
      desc:
        "Aufbau eines IT-Startups zur Entwicklung verschiedenster Service-, Entwicklungs- und Beratungsdienstleistungen.",
      descBullets: [
        "Geschäftsführer",
        "Technische Administration, Aufbau der IT- & Infrastruktur"
      ]
    },
    {
      role: "Consultant AWS/IMS",
      company: "AppsAssociates GmbH",
      companylogo: require("./assets/images/appsassociates.png"),
      date: "Januar 2021 – heute",
      desc:
        "Beratung im Bereich Amazon Web Services und Infrastruktur & Managed Services",
      descBullets: [
        "Consultant",
        "Beratung im Bereich AWS & IMS"
      ]
    },
    {
      role: "Softwarentwickler Open Source",
      company: "Adesso SE",
      companylogo: require("./assets/images/adesso.png"),
      date: "September 2017 – Oktober 2020",
      desc:
        "Aufbau der Open Source Präsenz der adesso SE und Entwicklung in verschiedenen Kundenprojekten sowie Beratung im Hackathon-Bereich.",
      descBullets: [
        "Open Source",
        "Diverse Kundenprojekte",
        "Durchführung und Beratung verschiedener Hackathons"
      ]
    },
    {
      role: "Studentische Hilfskraft Forschung",
      company: "Fachhochschule Dortmund",
      companylogo: require("./assets/images/fhdo-logo.png"),
      date: "September 2017 – Oktober 2020",
      desc:
        "Studentische Hilfskraft in der Forschung der FH Dortmund des Fachbereichs 4 (Informatik) in der Forschungsgruppe SEELab (seit Januar 2017 dem IDIAL Institut angehörig).",
      descBullets: [
        "Forschung",
        "Projekt-Plattform Quartiersnetz",
        "Durchführung verschiedener Hackathons zusammen mit der FH Dortmund"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Weitere große Projekte",
  subtitle: "Organisationen, die ich aufgebaut habe oder in denen ich mitwirke",
  projects: [
    {
      image: require("./assets/images/dohack.png"),
      projectName: "DO!Hack",
      projectDesc: "Unsere erfolgreiche Hackathon-Organisation seit 2015",
      footerLink: [
        {
          name: "Webseite besuchen",
          url: "https://dohack.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/adeprecated.png"),
      projectName: "Already Deprecated Stream",
      projectDesc: "Ein Tech-Stream mit einigen herausragenden Kollegen",
      footerLink: [
        {
          name: "Webseite besuchen",
          url: "https://beacons.page/alreadydeprecated"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Besucht unseren Tech-Podcast! :)",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://beacons.page/alreadydeprecated"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Kontaktieren Sie mich ☎️"),
  subtitle:
    "Wenn Sie ein Projekt besprechen wollen oder sich über Technologien austauschen möchten, kontaktieren Sie mich gerne! ",
  number: "",
  email_address: "info@silas-mahler.de"
};

// Twitter Section

const twitterDetails = {
  userName: "silasmahler", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
