import { useContext, useState, useEffect } from 'react';
import { UserDetailsContext } from '../UserDetailsContext';
import { baseUrl } from '../constants';

export default function Form({ user, mode, onClose }) {
  const { stopEditUser, users, setUsers } = useContext(UserDetailsContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    createdAt: '',
    updatedAt: '',
    address: {
      country: '',
      city: '',
      street: '',
      streetNumber: '',
    },
  });

  useEffect(() => {
    if (mode === 'edit' && user) {
      setFormData((prevData) => ({
        ...prevData,
        ...user,
        address: {
          country: user.address?.country || '',
          city: user.address?.city || '',
          street: user.address?.street || '',
          streetNumber: user.address?.streetNumber || '',
        },
      }));
    }
  }, [mode, user]);

  async function handleSubmit(e) {
    const currentDate = new Date().toISOString();
    e.preventDefault();
    if (mode === 'edit') {
      const url = `${baseUrl}/${user._id}`;
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, updatedAt: currentDate }),
      });
      const updatedUser = await res.json();
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u._id === updatedUser._id ? updatedUser : u))
      );
    } else if (mode === 'add') {
      const url = baseUrl;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          createdAt: currentDate,
          updatedAt: currentDate,
        }),
      });
      const newUser = await res.json();
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
    onClose();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [field, subfield] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          [subfield]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const onCancel = () => {
    onClose();
  };

  return (
    <>
      <div className="overlay">
        <div className="backdrop" onClick={onCancel} />
        <div className="modal">
          <div className="user-container">
            <header className="headers">
              <h2>{mode === 'add' ? 'Add User' : 'Edit User'}</h2>
              <button onClick={onCancel} className="btn close">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="xmark"
                  className="svg-inline--fa fa-xmark"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                  ></path>
                </svg>
              </button>
            </header>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user" />
                    </span>
                    <input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-user" />
                    </span>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-envelope" />
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-phone" />
                    </span>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group long-line">
                <label htmlFor="imageUrl">Image Url</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-image" />
                  </span>
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    type="text"
                    value={formData.imageUrl}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-map" />
                    </span>
                    <input
                      id="country"
                      name="address.country"
                      type="text"
                      value={formData.address.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-city" />
                    </span>
                    <input
                      id="city"
                      name="address.city"
                      type="text"
                      value={formData.address.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="street">Street</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-map" />
                    </span>
                    <input
                      id="street"
                      name="address.street"
                      type="text"
                      value={formData.address.street}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="streetNumber">Street number</label>
                  <div className="input-wrapper">
                    <span>
                      <i className="fa-solid fa-house-chimney" />
                    </span>
                    <input
                      id="streetNumber"
                      name="address.streetNumber"
                      type="text"
                      value={formData.address.streetNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div id="form-actions">
                <button id="action-save" className="btn" type="submit">
                  Save
                </button>
                <button
                  id="action-cancel"
                  onClick={onCancel}
                  className="btn"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
