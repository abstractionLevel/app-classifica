export const calculateGapFromPlayers = (data) => {
    const d = data.map((value)=> {
        let totScores = data.filter(val=> {//prendo i numeri minori
            let t = val.tot_score<value.tot_score
            return t
        })
        const secondMaxNumber = Math.max.apply(null,totScores.map((v)=>v.tot_score) );
        const gap = Math.abs(value.tot_score-secondMaxNumber) //differenza tra i due numeri
        return {...value,gap:gap}
    })
    return d
}