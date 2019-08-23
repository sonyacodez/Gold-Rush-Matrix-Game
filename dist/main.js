// this is your controller file: this will load the initial game and react to user input
const board = new GoldRush(5, 6, 1, 2)
const renderer = new Render()

const loadPage = function(){
    renderer.renderBoard(board.generateCoins(5, 6))
    renderer.renderPlayer1Score(board.thisPlayerScore)
    renderer.renderPlayer2Score(board.otherPlayerScore)
}

$(document).keydown(function(event) { 
    if(event.keyCode === 83 || event.keyCode === 87 || event.keyCode === 68 || event.keyCode === 65){
        board.movePlayer(board.thisPlayerNum,event.keyCode)
        renderer.renderBoard(board.matrix)
        renderer.renderPlayer1Score(board.thisPlayerScore)
    }
    else if(event.keyCode === 75 || event.keyCode === 73 || event.keyCode === 76 || event.keyCode === 74){
        board.movePlayer(board.otherPlayerNum,event.keyCode)
        renderer.renderBoard(board.matrix)
        renderer.renderPlayer2Score(board.otherPlayerScore)
    }
});

loadPage()