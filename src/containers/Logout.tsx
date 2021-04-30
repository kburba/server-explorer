import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions/auth.actions';

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);
  return null;
}
