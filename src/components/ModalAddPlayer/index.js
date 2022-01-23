import React,{useState,useEffect} from "react";
import { Modal } from "react-bootstrap";
import { connect } from 'react-redux';
import { addPlayer, retrivePlayer } from "../../redux/player/actions";
import ReactStars from 'react-stars'
import { useForm } from 'react-hook-form';
import { calculateGapFromPlayers } from "../../utils/calculateGapFromPlayers";
import './style.css'

const ModalAddPlayer = (props) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rating, setRating] = useState(0) 

    const getMaximumIdFromPlayers = () => {
        let idArr =  []
        idArr = props.players.map((value)=>value.id)
        return Math.max(...idArr)
    }

    const onSubmit = data => {
        let newPlayer = {"id":getMaximumIdFromPlayers()+1,"name":data.nome,"club":data.club,"score":[rating],"tot_score":rating}  
        props.players.push(newPlayer)
        props.addPlayer(calculateGapFromPlayers(props.players))
        props.onPressClose()
        reset()
        
    } 

    const handleRating =  (rate)  => {
        setRating(rate)
       
    }

    useEffect(()=> {
    })

    return (
        <Modal show={props.visible} onHide={props.onPressClose}>
            <Modal.Header closeButton>
                <Modal.Title>AGGIUNGI IL PLAYER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)} class="justify-content-center">
                    <div class="form-group ">
                        <label for="nome">Nome</label>
                        <input 
                            id="nome"
                            class="form-control mt-2"
                            placeholder="nome"
                            {...register("nome",
                            {required:true})} 
                            
                        />
                        {errors.nome && <span class='text-red-900'>Il Nome e' richiesto</span>}
                    </div>
                    <div class="form-group ">
                        <label for="club">Aggiungi Club</label>
                        <input
                            id="club"
                            class="form-control mt-2"
                            placeholder="club"
                            {...register("club",
                            {required:true})} 
                        />
                        {errors.club && <span class='text-red-900'>Il club e' richiesto</span>}
                    </div>
                    <div class="form-group d-flex align-items-center  ">
                        <label class="mt-2 mr-5" for="stars">Vota</label>
                        <ReactStars
                            class="mb-2 mr-5"
                            id="stars"
                            onChange={handleRating}
                            count={5}
                            size={40}
                            color2={'#ffd700'}
                        />
                    </div>
                    <button class="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Aggiungi</button>
                </form>
            </Modal.Body>
      </Modal>
    );
}


const mapStateProps = (state) => {
    return {
        players: state.playerReducer.player,
    };
}
const mapDispatchToProps = dispatch => ({
    addPlayer: (value) => dispatch(addPlayer(value)),
    retrivePlayer:()=> dispatch(retrivePlayer())
})


export default connect(
    mapStateProps,
    mapDispatchToProps,
)(ModalAddPlayer)