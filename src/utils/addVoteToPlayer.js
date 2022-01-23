import { calculateGapFromPlayers } from "./calculateGapFromPlayers";

const calcultareTotScore = (score) => {
    var result = Math.round(score.reduce((a,b)=>a+b,0));
    return result;
}


 
export const addVoteToPlayer = (players,idPlayer,vote) => {
    const newPlayers = players.map((value)=> {
        if(value.id==idPlayer) {
            value.score.push(vote)
            let totScore = calcultareTotScore(value.score)
            if(totScore===0) totScore = vote
            return Object.assign({},value,{
                    tot_score:totScore,
                    score:value.score
                })
        }
        return value
    })
    return calculateGapFromPlayers(newPlayers);
}


