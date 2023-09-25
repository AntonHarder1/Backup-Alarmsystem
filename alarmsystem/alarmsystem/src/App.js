import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AlarmItems from "./components/alarmMappe/alarmItems";
import Epilepsy from "./components/alarmMappe/epilepsy";
import Enuresis from "./components/alarmMappe/enuresis";
import Products from './components/produktMappe/products';
import Customer from './components/kundeMappe/customer'; // Importer Customer komponenten

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const boldLinkStyle = {
    fontWeight: 'bold',
    color: 'black',
  };

  const dropdownTextStyle = {
    fontWeight: 'bold',
    color: 'black',
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link" onClick={toggleDropdown} style={dropdownTextStyle}>
                  Product Item{' '}
                  <i className={`fas fa-caret-${dropdownVisible ? 'up' : 'down'}`}></i>
                </div>
                {dropdownVisible && (
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        style={boldLinkStyle}
                        className="nav-link pl-4"
                        to="/alarmitems"
                      >
                        Alarm Items
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        style={boldLinkStyle}
                        className="nav-link pl-4"
                        to="/epilepsy"
                      >
                        Epilepsy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        style={boldLinkStyle}
                        className="nav-link pl-4"
                        to="/enuresis"
                      >
                        Enuresis
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link
                  style={boldLinkStyle}
                  className="nav-link"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              {/* Tilføj din nye komponent til navigationslinjen */}
              <li className="nav-item">
                <Link
                  style={boldLinkStyle}
                  className="nav-link"
                  to="/customer"
                >
                  Customer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/alarmitems" element={<AlarmItems />} />
        <Route path="/epilepsy" element={<Epilepsy />} />
        <Route path="/enuresis" element={<Enuresis />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customer" element={<Customer />} /> {/* Tilføj ruten til Customer komponenten */}
      </Routes>
    </div>
  );
}

export default App;
