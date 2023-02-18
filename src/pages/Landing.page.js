import { PAGES } from '../constants';
import users from '../data';
import Wrapper from '../styles/styled/Landing.styled';
import '../styles/landing.css'

const [, login, , , , ] = PAGES;

const Landing = ({ setPage }) => {
  if (!localStorage.getItem('users'))     localStorage.setItem('users', JSON.stringify(users));
  if (!localStorage.getItem('Trump'))     localStorage.setItem('Trump', '0');
  if (!localStorage.getItem('Biden'))  localStorage.setItem('Biden', '0');
  if (!localStorage.getItem('voted'))     localStorage.setItem('voted', JSON.stringify([]));



  return (
    <Wrapper>
      <div className='flex-intro'>
        <h1>VOTING APP 2023</h1>
        <button onClick={() => setPage(login)}>
          VOTE
        </button>
      </div>
    </Wrapper>
  );
};

export default Landing;
