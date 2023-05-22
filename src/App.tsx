import React from "react";
import { Button } from "@material-ui/core";
import Header from './components/Header';
import Logo from './images/header_logo.ab67dda4.png';
import AuthDialog from "./components/Registration";
import AuthProvider from "./context/authContext";
import Registration from "./components/Registration";
import Login from "./components/Login";

interface State {
  isAuthDialogOpen: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    isAuthDialogOpen: false,
  };

  handleAuthDialogOpen = () => {
    this.setState({ isAuthDialogOpen: true });
  };

  handleAuthDialogClose = () => {
    this.setState({ isAuthDialogOpen: false });
  };

  render() {
    return (
      <div>
      <AuthProvider>
      <Header logo = {Logo}/>
        {/* <Registration /> */}
        {/* <Login /> */}
        
      </AuthProvider>
       
        {/* <Button variant="outlined" onClick={this.handleAuthDialogOpen}>
          Open Auth Dialog
        </Button>
        <AuthDialog open={this.state.isAuthDialogOpen} onClose={this.handleAuthDialogClose} /> */}
      </div>
    );
  }
}

export default App;
