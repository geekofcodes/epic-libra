import React, { useState } from 'react';
import Login from './login';
import Signup from './signup';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="container mx-auto">
      {isLogin ? (
        <Login switchToSignup={switchToSignup} />
      ) : (
        <Signup switchToLogin={switchToLogin} />
      )}
    </div>
  );
};

export default AuthPage;
