import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import mainImg from '../../component/images/main-image.jpg';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams));
    }, [])
    return (
        <div>
             <div className="header-top">
                <img src={mainImg} class="img-fluid" alt="..."></img>
                 <h1>Team Dazzle</h1>
            </div>
            <div className="header-bottom">
                <div className="team">
                    {
                teams.map(team => <Team team={team}></Team>)
                }
                </div>
            </div>
            
        </div>
    );
};

export default Home;