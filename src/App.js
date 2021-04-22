import React, { Suspense} from "react";
import "./App.css";
import Loading from "./containers/loading/Loading";
import Main from "./containers/Main";

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
