import { createContext, useState } from 'react';
import { useEffect } from 'react';
import { baseUrl } from './constants';

export const UserDetailsContext = createContext();

export const UserDetailsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  console.log('selectedUser initially:', selectedUser);

  useEffect(() => {
    const url = baseUrl;

    (async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      const usersArray = Object.values(data);
      setUsers(usersArray);
    })();
  }, []);

  const showUserDetails = (user) => {
    console.log('show user details set in context');

    setSelectedUser(user);
  };

  const hideUserDetails = () => {
    console.log('enter hide');

    setSelectedUser(null);
  };

  const startEditUser = (user) => {
    setUserToEdit(user);
  };

  const stopEditUser = () => {
    setUserToEdit(null);
  };

  const userToDeleteSet = (user) => {
    setUserToDelete(user);
  };

  const userToDeleteCancel = () => {
    setUserToDelete(null);
  };

  const userDeleted = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
  };

  useEffect(() => {
    console.log('selectedUser changed:', selectedUser);
  }, [selectedUser]);

  return (
    <UserDetailsContext.Provider
      value={{
        users,
        setUsers,
        selectedUser,
        showUserDetails,
        hideUserDetails,
        userToEdit,
        startEditUser,
        stopEditUser,
        userToDelete,
        userToDeleteSet,
        userToDeleteCancel,
        userDeleted,
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};
