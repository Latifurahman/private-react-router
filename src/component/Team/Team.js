import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {  useHistory } from 'react-router-dom';
import './Team.css';

const Team = (props) => {
    const {strTeamBadge,strTeam, idTeam} = props.team;
    let history = useHistory();
    const handleClicked = (idTeam) =>{
        history.push(`/team/${idTeam}`)
    }
    return (
      <Card style={{width: '300px', border: '5px solid green', borderRadius: '10px', backgroundColor: 'lightGray'}}>
  <Card.Img className="team-logo" variant="top" src={strTeamBadge} />
  <Card.Body>
    <Card.Title>{strTeam}</Card.Title>
    <Card.Text className="team-text">
      Sports Type: Football
    </Card.Text>
    <Button onClick={() => handleClicked(idTeam)} className="main-btn" variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
  </Card.Body>
</Card>
    );
};

export default Team;