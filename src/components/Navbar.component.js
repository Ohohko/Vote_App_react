import { useState } from 'react';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { PAGES } from '../constants';

import Wrapper from '../styles/styled/Navbar.styled';
const [landing, , , , ] = PAGES;

const Navbar = ({ setPage, user, setUser }) => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setPage(landing);
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
