import React from "react";

import Logo from "./components/Logo";
import Customer from "./components/Customer";
import BankEmployee from "./components/BankEmployee";
//data include
import Data from './data/employees';

export default function App() {
  return (
    <>
      <header className="logo-container">
        <Logo />
      </header>
      <main>
        <Customer>
          <h1>Customer</h1>
        </Customer>
        <BankEmployee data={Data} >
          <h1>Employees</h1>
        </BankEmployee>
      </main>
      <footer>
        <p>&copy; 2021 U.S.Bank</p>
      </footer>
    </>
  );
}
