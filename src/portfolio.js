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
    "Seit 2014 bin ich in der IT-Branche tätig und widme mich seit 2015 der professionellen Softwareentwicklung. 🚀 " +
    "Meine Kernbereiche umfassen DevOps, Backend-Entwicklung mit Java, Teamleitung und der Aufbau des eigenen Startups, der KreInn GmbH. " +
    "In den vergangenen Jahren habe ich bedeutende Erfahrungen in der Forschung der Hochschule, in Open Source-Projekten und als Entwickler " +
    "bei einem Großkonzern sowie als IT-Berater und DevOps-Lead gesammelt. " +
    "Parallel dazu engagiere ich mich ehrenamtlich, leite eine Hackathon-Organisation und betreibe einen Tech-Podcast. " +
    "Zuletzt habe ich meine Fähigkeiten in Terraform durch verschiedene Großprojekte vertieft, wobei der Schwerpunkt auf der " +
    "Entwicklung von Cloudarchitekturen mit Terraform und AWS lag. Meine Kenntnisse in AWS sind ebenfalls umfangreich und ich habe " +
    "verschiedene Zertifizierungen, beispielweise als Terraform Associate, erlangt. In 2023 habe ich mein Masterstudium der Informatik " +
    "berufsbegleitend abgeschlossen. 🎓"
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
      "⚡ Entwicklung und Automatisierung von Workflows und Tech-Stacks mit Docker, CI/CD-Servern und Softwarekomponenten"
    ),
    emoji(
      "⚡ Architektur und Automatisierung von Cloud-Infrastrukturen mit Tools wie Terraform, Kubernetes, Ansible, ..."
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
      duration: "Oktober 2018 - November 2023",
      desc: "Master-Studium der Informatik",
      descBullets: [
        "Weiterführendes Studium, vertiefende Module: Compilerbau, Nebenläufige Programmierung, Machine Learning und weitere",
        "Forschungs- und Entwicklungsarbeit zum Thema \"Migrationsverfahren zur Optimierung des Anwendungsbetriebs in Multi-Cloud Szenarien unter Verwendung eines Frameworks für Cloud-Simulationen\"",
        "Masterthesis: \"Evaluation des simulationsbasierten Multi-Cloud-Migrationsverfahrens SimMig\""
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
      date: "September 2020 – heute",
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
        "Professionelle Beratung im Bereich Amazon Web Services und Infrastruktur & Managed Services " +
        "sowie Entwurf, Design und Implementierung von Cloud-Infrastrukturen mit Terraform uvm. " +
        "für verschiedene (Groß-)Kundenprojekte",
      descBullets: [
        "IT Consultant",
        "Beratung im Bereich AWS & IMS",
        "DevOps Lead",
        "Terraform, AWS, Cloud, DevOps",
        "Durchführung von Workshops und Schulungen",
        "Terraform Associate"
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
      date: "Juli 2015 – August 2017",
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
  podcastSection,
  contactInfo,
  twitterDetails
};
