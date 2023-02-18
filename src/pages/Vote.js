import React, { useState } from 'react'
import '../styles/Vote.css';
import { PAGES } from '../constants';
import { Navbar } from '../components';


const Vote = ({ setPage }) => {
  const [finish, setFinish] = useState(false);
  const [, , , , admin,thankyou] = PAGES;
  let tempParty = '';
  const voted = JSON.parse(localStorage.getItem('voted'));
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [user, setUser] = useState(userData);
  
  const clickHandler = (e) => {
    tempParty = e.target.getAttribute('class').toString();
    localStorage.setItem('tempParty', tempParty);
    setFinish(true);
  }

  const voteHandler = (e) => {
    if (!voted.some(element => element.name === userData.name)) {
      const votedParty = localStorage.getItem('tempParty');
      const voteCount = localStorage.getItem(votedParty);
      voted.push({name: userData.name, party: votedParty});
      localStorage.setItem(votedParty, JSON.stringify(Number(voteCount) + 1));
      localStorage.setItem('voted', JSON.stringify(voted));
      userData.type === 'admin' ? setPage(admin) : setPage(thankyou);
    }
  }

  const againHandler = () => setFinish(false);

  return (
    <div className='vote-div'>
      <Navbar setPage={setPage} user={user} setUser={setUser} />
      <div className='cards'>
        <button onClick={clickHandler} className='Trump'></button>
        <button onClick={clickHandler} className='Biden'></button>
      </div>
      <div className='buttons'>
      <button onClick={againHandler} className={finish ? 'again' : 'again hidden'}>Vote again?</button>
        <button onClick={voteHandler} className={finish ? 'vote' : 'vote hidden'}>Vote!!</button>
        
      </div>

    </div>
  )
}

export default Vote;