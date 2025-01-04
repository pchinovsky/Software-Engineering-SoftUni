import { useState } from 'react';

import PropTypes from 'prop-types';
import Search from '../Search/Search.jsx';
import Table from '../Table/Table.jsx';
import Pagination from '../Pagination/Pagination.jsx';

import UserDetails from '../UserDetails/UserDetails.jsx';
import Form from '../Form/Form.jsx';
import DeleteUser from '../DeleteUser/DeleteUser.jsx';

export default function Card() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  function openForm() {
    setIsFormOpen(true);
  }
  return (
    <section className="card users-container">
      <Search />
      <Table />
      <button onClick={openForm} className="btn-add btn">
        Add new user
      </button>
      ;
      <Pagination />
      <UserDetails />
      {isFormOpen && <Form />}
      <DeleteUser />
    </section>
  );
}

// Card.propTypes = {
//   children: PropTypes.node.isRequired,
// };
