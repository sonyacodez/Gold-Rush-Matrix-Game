class Render {
    renderBoard(matrix){
        $(".container").empty()
        const source = $('#matrix-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({matrix});
        $('.container').append(newHTML);
    }
    renderPlayer1Score(score){
        $(".player1Score-container").empty()
        const source = $('#score1-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({score});
        $('.player1Score-container').append(newHTML);
    }
    renderPlayer2Score(score){
        $(".player2Score-container").empty()
        const source = $('#score2-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({score});
        $('.player2Score-container').append(newHTML);
    }
}