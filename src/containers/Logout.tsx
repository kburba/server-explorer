import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import setAuthToken from '../utils/setAuthToken';

export default function Logout() {
  useEffect(() => {
    setAuthToken(null);
  }, []);
  return <Redirect to="/login" />;
}
