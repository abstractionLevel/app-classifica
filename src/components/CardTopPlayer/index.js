import React,{useEffect,useState} from "react";
import ReactStars from 'react-stars'
import './style.css';
import { connect } from 'react-redux';
import { retrivePlayer,updatePlayer } from "../../redux/player/actions";
import { Card ,Col,Row} from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { addVoteToPlayer } from "../../utils/addVoteToPlayer";
import { Flipper, Flipped } from "react-flip-toolkit";
const CardTopPlayer = (props) => {
     

    const [start,setStart] = useState(true)

    
    const simulationAddVote = (players) => {
        const ids = Object.keys(players).length;
        let randomId = Math.floor(Math.random()  * ids ) + 1;
        let randomVote = Math.floor(Math.random()   * 5 ) + 1;
        let voteUpdated =  addVoteToPlayer(players,randomId,randomVote)
        return voteUpdated
       
    }

    //SIMULAZIONE VOTO=========================
    if(start===true) {
        for (var i = 1; i <= 10; i++) {
            (function(index) {
                setTimeout(function() { 
                    let r =  simulationAddVote(props.players)
                    props.updatePlayer(r)
                    
                    if(i>3) {
                        setStart(false)
                    }
                    }, i * 2000);
            })(i);
        }    
    }


    useEffect(()=>{
    },[start])

    return (
        <>
        {props.players  && 
        
            <Flipper flipKey={JSON.stringify(props.players)}>
                    {props.players.map(player => (
                        <>
                    <Flipped key={player.name} flipId={player.name} class="mt-2">
                        <Card class="w-75  ">
                            <Card.Header >
                                <Row className="d-flex justify-content-center">
                                    <Col lg={2} sm={4} class=''>
                                    <p className="text-center mb-0 label-1">{player.name}</p>
                                        <div class="d-flex justify-content-center">
                                            <ReactStars
                                                value={player.score.reduce((a,b)=>a+b,0) / player.score.length}
                                                count={5}
                                                size={24}
                                                color2={'#ffd700'} 
                                                edit={false}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <p className="text-center label-2 d-inline">{player.score.length}</p>
                                            <div class="d-inline pl-2">
                                                <FaUserAlt />
                                            </div>
                                        </div>
                                        </Col>
                                    <Col lg={2}>
                                        <p className="text-center label-1">Club</p>
                                        <p className="text-center label-2">{player.club}</p>
                                    </Col>
                                    <Col lg={2}>
                                        <p className="text-center label-1">Total Score</p>
                                        <p className="text-center label-2">{player.tot_score}</p>
                                    </Col>
                                    <Col lg={2}>
                                        <p className="text-center label-1">Gap</p>
                                        <p className="text-center label-2">{player.gap ? player.gap : 0}</p>
                                    </Col>
                                </Row>
                            </Card.Header>
                        </Card>                    
                    </Flipped>
                    <br/>
                    </>
                    ))}
                    
            </Flipper>
        }
        </>
    );
}

const mapStateProps = (state) => {
    return {
        players: state.playerReducer.player,
    };
}
const mapDispatchToProps = dispatch => ({
    retrivePlayer: () => dispatch(retrivePlayer()),
    updatePlayer: (value) => dispatch(updatePlayer(value)),
})





export default connect(
    mapStateProps,
    mapDispatchToProps,
)(CardTopPlayer)

