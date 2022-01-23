import React,{useEffect, useState} from "react";
import { Modal,Button,ListGroup,Row } from "react-bootstrap";
import { connect } from 'react-redux';
import ReactStars from 'react-stars'
import { retrivePlayer, updatePlayer } from "../../redux/player/actions";
import { addVoteToPlayer } from "../../utils/addVoteToPlayer";
import './style.css'

const ModalRatePlayers = (props) => {

    const [isVoting,setIsVoting] = useState(false)
    const [rating, setRating] = useState(0) 
    const [idPlayer,setIdPlayer] = useState()

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const handleRating =  async (rate)  => {
        setRating(rate)
        const playerUpdated =  addVoteToPlayer(props.players,idPlayer,rate)
        setIsVoting(false)
        props.onPressClose()
        await delay(1000);
        props.updatePlayer(playerUpdated)
        
        
    }

    const setVoteTrue = (e) => {
        setIsVoting(true)
        setIdPlayer(e.currentTarget.value)
    }

    const onClose = () => {
        setIsVoting(false)
        props.onPressClose()
    }


    return (
        <>
        {props.players  && 
        <Modal show={props.visible} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>VOTA IL PLAYER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup className="">
                    {props.players.map((player)=>
                        <>
                            <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center">
                                <p class="label text-gray-700">{player.name}</p>
                                {isVoting ?
                                    <>
                                        {player.id==idPlayer &&
                                            <ReactStars
                                                className="ml-auto p-2"
                                                onChange={handleRating}
                                                count={5}
                                                size={24}
                                                color2={'#ffd700'}
                                            />
                                        }
                                    </>
                                    :  
                                    <> 
                                    <div class="stars">
                                        <ReactStars
                                            className="ml-auto p-2"
                                            value={player.score.reduce((a,b)=>a+b,0) / player.score.length}
                                            count={5}
                                            size={24}
                                            color2={'#ffd700'} 
                                            
                                        />
                                    </div>
                                    </>    
                                }
                               
                            {isVoting ?
                                <></>
                                :
                                    <button value={player.id} onClick={setVoteTrue} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        Vota
                                    </button>
                               }
                               
                            </ListGroup.Item>
                        </>
                    )}
                </ListGroup>
            </Modal.Body>
           
      </Modal>
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
    updatePlayer: (value) => dispatch(updatePlayer(value)),
})

export default connect(
    mapStateProps,
    mapDispatchToProps,
)(ModalRatePlayers)
