import React, { useState } from "react";
import Homepage from "./components/Homepage/Homepage";
import Accountpage from "./components/Select_account_page/Accountpage";

function App() {
  const [show_home, set_show_home] = useState(false);
  const account_selected = () => {
    set_show_home(true);
  };
  return (
    <>
   
      {show_home ? (
        <Homepage />
      ) : (
        <Accountpage acc_selected={() => account_selected()} />
      )}
   
    </>
  );
}

export default App;
