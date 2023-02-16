import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// state
// isLoggedIn: boolean
// isSpinnerOn: boolean

class Auth extends React.Component {
  state = {
    isLoggedIn: true,
    isSpinnerOn: false,
  };

  handleLogin = () => {
    this.setState({
      isSpinnerOn: false,
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isSpinnerOn: true,
    });
    setTimeout(() => {
      this.setState({
        isSpinnerOn: false,
        isLoggedIn: false,
      });
    }, 2000);
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <Login onLogin={this.handleLogout} />
    ) : (
      <Logout onLogout={this.handleLogin} />
    );
    return <>{this.state.isSpinnerOn ? <Spinner size={50} /> : button}</>;
  }
}


export default Auth;
