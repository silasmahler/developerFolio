import "./Main.css";
import React, { Component, lazy, Suspense} from "react";
import Header from "../components/header/Header.js";
import Greeting from "./greeting/Greeting.js";
import {StyleProvider} from "../contexts/StyleContext.js";
import Loading from "./loading/Loading.js";

const WorkExperience = lazy(() => import(  "./workExperience/WorkExperience.js"));
const Projects = lazy(() => import(  "./projects/Projects.js"));
const StartupProject = lazy(() => import(  "./StartupProjects/StartupProject.js"));
const Footer = lazy(() => import(  "../components/footer/Footer.js"));
const Podcast = lazy(() => import(  "./podcast/Podcast.js"));
const Education = lazy(() => import(  "./education/Education.js"));
const Top = lazy(() => import(  "./topbutton/Top.js"));
const Twitter = lazy(() => import(  "./twitter-embed/twitter.js"));
const Profile = lazy(() => import(  "./profile/Profile.js"));
const Skills = lazy(() => import ( "./skills/Skills.js" ));

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }
  changeTheme = () => {
    this.setState({isDark: !this.state.isDark}, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}
        >
          <Header />
          <Greeting />
          <Suspense fallback={Loading}>
          <Skills />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Twitter />
          <Podcast />
          <Profile />
          <Footer />
            <Top />
          </Suspense>
        </StyleProvider>
      </div>
    );
  }
}
