import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleImg from '../../component/images/male.png';
import femaleImg from '../../component/images/female.png';
import './TeamDetail.css';

const TeamDetail = () => {
    let {teamId} = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[teamId]);
    const {strStadiumThumb, strTeamBadge, strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, strDescriptionFR, strTwitter, strFacebook, strYoutube} = team;
    const teamImg = () => {
        const strGender = '';
        const male = '';
        if(strGender === male){
            return maleImg;
        }
        else{
            return femaleImg;
        }
    }
    return (
        <div className="team-container">
            <div>
                <img src={strStadiumThumb} className="stadium-img" alt=""/>
                <img src={strTeamBadge} className="team-logo2" alt=""/>
            </div>
            <div className="team-detail-container">
                <div className="container">
                    <div className="row team-info">
                    <div className="col-md-6">
                    <h1>{strTeam}</h1>
                    <h5>Founded: {intFormedYear}</h5>
                    <h5>Country: {strCountry}</h5>
                    <h5>Sports  Type: Football</h5>
                    <h5>Gender: {strGender}</h5>
                </div>
                 <div className="col-md-6">
                    <img className="team-img" src={teamImg()} alt=""/>
                </div>
                 </div>
                </div>
            </div>
            <div className="team-description">
                <div className="container">
                    <br/>
                    <p>{strDescriptionEN}</p>
                    <br/>
                    <p>{strDescriptionFR}</p>
                </div>
            </div>
            <div className="social-icon">
                <a className="twitter" href={`http://${strTwitter}`} target="_blank" rel="noopener noreferrer">Twitter</a>
                <a className="facebook" href={`http://${strFacebook}`} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a className="youtube" href={`http://${strYoutube}`} target="_blank" rel="noopener noreferrer">Youtube</a>
            </div>
        </div>
    );
};

export default TeamDetail;