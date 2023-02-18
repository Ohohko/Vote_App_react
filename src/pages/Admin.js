import '../styles/Admin.css';
import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Navbar } from '../components';

ChartJS.register(ArcElement, Tooltip, Legend);

const Admin = ({ setPage }) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [user, setUser] = useState(userData);
  const data = {
    labels: ['Trump', 'Biden'],
    datasets: [
      {
        label: '# of Votes',
        data: [localStorage.getItem('Trump'), localStorage.getItem('Biden')],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const users = JSON.parse(localStorage.getItem('users'));

  const clickHandler = (e) => {
    const userName = e.target.getAttribute('name');
    const voted = JSON.parse(localStorage.getItem('voted'));
    const newVoted = voted.filter((item) => item.name !== userName);
    localStorage.setItem('voted', JSON.stringify(newVoted));
  }

  return (
    <>
      <Navbar setPage={setPage} user={user} setUser={setUser} />
      <div className='graph'>
        <Doughnut data={data} />
      </div>
      <table>
        <tbody>
          {users.map((user) => {
            return <tr key={user.id}><td>{user.name}</td><td>{user.type}</td><td><button onClick={clickHandler} name={user.name} className='reset'>Reset vote</button></td></tr>
          })}
        </tbody>
      </table>
    </>
  )
}

export default Admin;