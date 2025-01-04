import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Card from './Card/Card.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';
import Form from './Form/Form.jsx';
import DeleteUser from './DeleteUser/DeleteUser.jsx';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Card></Card>

        {/* <UserDetails />
        <Form />
        <DeleteUser /> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
