import React, { Suspense} from "react";
import "./App.css";
import Loading from "./containers/loading/Loading.js";
import Main from "./containers/Main.js";

function App() {
  return (
    <div>
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
