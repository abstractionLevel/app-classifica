export const orderPlayersByAvarage = (players) => {
    return players.sort((a, b) => b.tot_score - a.tot_score)
}