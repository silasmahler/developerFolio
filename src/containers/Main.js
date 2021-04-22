import "./Main.css";
import React, { Component, lazy } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import {StyleProvider} from "../contexts/StyleContext";

const WorkExperience = lazy(() => import(  "./workExperience/WorkExperience"));
const Projects = lazy(() => import(  "./projects/Projects"));
const StartupProject = lazy(() => import(  "./StartupProjects/StartupProject"));
const Footer = lazy(() => import(  "../components/footer/Footer"));
const Podcast = lazy(() => import(  "./podcast/Podcast"));
const Education = lazy(() => import(  "./education/Education"));
const Top = lazy(() => import(  "./topbutton/Top"));
const Twitter = lazy(() => import(  "./twitter-embed/twitter"));
const Profile = lazy(() => import(  "./profile/Profile"));
const Skills = lazy(() => import ( "./skills/Skills" ));

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
        </StyleProvider>
      </div>
    );
  }
}
