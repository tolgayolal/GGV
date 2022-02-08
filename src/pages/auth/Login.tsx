import React, { useContext, useState } from 'react';
import AuthContext, { useAuth } from '../../contexts/AuthContext';
import { useModal } from '../../hooks/useModal';
import LoginDialog from './LoginDialog';

const Login = () => {
  const { isShow, toggle }: any = useContext(AuthContext)

  return <>
    {isShow && <LoginDialog modalOpen={isShow} closeModal={toggle} />}
  </>
};

export default Login;
