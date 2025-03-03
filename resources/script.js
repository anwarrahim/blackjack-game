const gameBtn = document.getElementById('game-btn')



gameBtn.addEventListener('click',()=>{
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then( response =>{
        if(!response.ok){
            throw new Error("Network response was not ok", response.statusText)
        }
        return response.json()
    })
    .then(data =>{
        console.log(data)
    })
    .catch(error =>{
        console.error('There has been a problem with your fetch operation', error)
    })
})
