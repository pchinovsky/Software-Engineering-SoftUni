import { createContext, useState } from 'react';
import { useEffect } from 'react';

export const UserDetailsContext = createContext();

export const UserDetailsProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  console.log('selectedUser initially:', selectedUser);

  const showUserDetails = (user) => {
    console.log('show user details set in context');

    setSelectedUser(user);
  };

  const hideUserDetails = () => {
    console.log('enter hide');

    setSelectedUser(null);
  };

  useEffect(() => {
    console.log('selectedUser changed:', selectedUser);
  }, [selectedUser]);

  return (
    <UserDetailsContext.Provider
      value={{ selectedUser, showUserDetails, hideUserDetails }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};
