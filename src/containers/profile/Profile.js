import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio.js";
import Contact from "../contact/Contact.js";
import Loading from "../loading/Loading.js";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard.js")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            console.error(result);
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            setProfileFunction("Error");
            console.log(
              "Because of this error, contact section has reverted to default"
            );
            console.error(error);
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
