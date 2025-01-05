import { useState } from 'react';

import PropTypes from 'prop-types';
import Search from '../Search/Search.jsx';
import Table from '../Table/Table.jsx';
import Pagination from '../Pagination/Pagination.jsx';

import UserDetails from '../UserDetails/UserDetails.jsx';
import Form from '../Form/Form.jsx';
import DeleteUser from '../DeleteUser/DeleteUser.jsx';
import { UserDetailsContext } from '../UserDetailsContext.jsx';
import { useContext } from 'react';

export default function Card() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { selectedUser, stopEditUser, userToDelete } =
    useContext(UserDetailsContext);
  const { userToEdit } = useContext(UserDetailsContext);

  const mode = userToEdit ? 'edit' : 'add';

  function openForm() {
    setIsFormOpen(true);
  }
  function closeForm() {
    setIsFormOpen(false);
    stopEditUser();
  }

  function createUser() {}

  function editUser() {}

  const formProps = {
    user: userToEdit,
    mode: userToEdit ? 'edit' : 'add',
    onClose: closeForm,
  };

  return (
    <section className="card users-container">
      <Search />
      <Table />
      <button onClick={openForm} className="btn-add btn">
        Add new user
      </button>
      ;
      <Pagination />
      {selectedUser && <UserDetails />}
      {(isFormOpen || userToEdit) && <Form {...formProps} />}
      {userToDelete && <DeleteUser />}
    </section>
  );
}

// Card.propTypes = {
//   children: PropTypes.node.isRequired,
// };
