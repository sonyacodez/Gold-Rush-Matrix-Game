class GoldRush extends Matrix {
    constructor(rowNum, colNum, player1, player2) {
        super(rowNum, colNum)
        this.loadBoard(rowNum, colNum)
        this.setPlayers(rowNum, colNum, player1, player2)

        this.thisPlayer = this.getPlayerSquare(player1)
        this.col = parseInt(this.thisPlayer.x)
        this.row = parseInt(this.thisPlayer.y)
        this.thisPlayerNum = 1
        this.thisPlayerScore = 0

        this.otherPlayer = this.getPlayerSquare(player2)
        this.rowOther = parseInt(this.otherPlayer.y)
        this.colOther = parseInt(this.otherPlayer.x)
        this.otherPlayerNum = 2
        this.otherPlayerScore = 0
        
        this.generateCoins(rowNum, colNum)
    }
    loadBoard(rowNum, colNum){
        this.matrix = []
        const star = "*"

        for (let r = 0; r < rowNum; r++) {
            this.matrix.push([])
            for (let c = 0; c < colNum; c++) {
                this.matrix[r].push(star)
            }
        }
        return this.matrix
    }
    setPlayers(rowNum, colNum, player1, player2){
        this.alter(0, 0, player1)
        this.alter(rowNum-1, colNum-1, player2)
        return this.matrix
    }
    generateCoins(rowNum, colNum){
        for (let r = 0; r < rowNum; r++) {
            for (let c = 0; c < colNum; c++) {
                const allSquares = this.getAllSquares()
                const allCoins = allSquares.reduce((total, c) => c == "c" ? total += 1 : total, 1)
                if(allCoins <= 12){
                    const randomNum = Math.floor(Math.random() * (colNum))
                    if((this.matrix[r][randomNum] !== this.matrix[this.row][this.col]) && (this.matrix[r][randomNum] !== this.matrix[this.rowOther][this.colOther])){
                        this.matrix[r][randomNum] !== "coin" ? this.matrix[r][randomNum] = "coin": null
                    }
                }
            }
        }
        return this.matrix
    }
    getPlayerSquare(playerNum){
        return this.findCoordinate(playerNum)
    }
    movePlayer(playerNum, key){
        if(key === 83 || key === 75){
            this.down(playerNum)
        }
        else if(key === 87 || key === 73){
                this.up(playerNum)
        }
        else if(key === 68 || key === 76){
                this.right(playerNum)
        }
        else if(key === 65 || key === 74){
                this.left(playerNum)
        }
    }
    down(playerNum){
        if(playerNum === this.thisPlayerNum){
            if(!(this.row + 1 === this.rowOther && this.col === this.colOther)){
                this.get(this.row+1, this.col) === "coin" ? this.thisPlayerScore++ : null
            
                this.alter(this.row, this.col,'*')
                this.alter(this.row+1, this.col, playerNum)
                this.thisPlayer.y++
                this.row++
            }
        }
        else if(playerNum === this.otherPlayerNum){
            if(!(this.rowOther + 1 === this.row && this.colOther === this.col)){
                this.get(this.rowOther+1, this.colOther) === "coin" ? this.otherPlayerScore++ : null

                this.alter(this.rowOther, this.colOther,'*')
                this.alter(this.rowOther+1, this.colOther, playerNum)
                this.otherPlayer.y++
                this.rowOther++
            }
        }
        
    }
    up(playerNum){
        if(playerNum === this.thisPlayerNum){
            if(!(this.row - 1 === this.rowOther && this.col === this.colOther)){
                this.get(this.row-1, this.col) === "coin" ? this.thisPlayerScore++ : null
                
                this.alter(this.row, this.col,'*')
                this.alter(this.row-1, this.col, playerNum)
                this.thisPlayer.y--
                this.row--
            }
        }
        else if(playerNum === this.otherPlayerNum){
            if(!(this.rowOther - 1 === this.row && this.colOther === this.col)){
                this.get(this.rowOther-1, this.colOther) === "coin" ? this.otherPlayerScore++ : null

                this.alter(this.rowOther, this.colOther,'*')
                this.alter(this.rowOther-1, this.colOther, playerNum)
                this.otherPlayer.y--
                this.rowOther--
            }
        }

    }
    right(playerNum){
        if(playerNum === this.thisPlayerNum){
            if(!(this.col+1 === this.colOther && this.row === this.rowOther)){
                this.get(this.row, this.col+1) === "coin" ? this.thisPlayerScore++ : null

                this.alter(this.row, this.col,'*')
                this.alter(this.row, this.col+1, playerNum)
                this.thisPlayer.x++
                this.col++
            }
        }
        else if(playerNum === this.otherPlayerNum){
            if(!(this.colOther+1 === this.col && this.rowOther === this.row)){
                this.get(this.rowOther, this.colOther+1) === "coin" ? this.otherPlayerScore++ : null

                this.alter(this.rowOther, this.colOther,'*')
                this.alter(this.rowOther, this.colOther+1, playerNum)
                this.otherPlayer.x++
                this.colOther++
            }
        }
    }
    left(playerNum){
        if(playerNum === this.thisPlayerNum){
            if(!(this.col-1 === this.colOther && this.row === this.rowOther)){
                this.get(this.row, this.col-1) === "coin" ? this.thisPlayerScore++ : null

                this.alter(this.row, this.col,'*')
                this.alter(this.row, this.col-1, playerNum)
                this.thisPlayer.x--
                this.col--
            }
        }
        else if(playerNum === this.otherPlayerNum){
            if(!(this.colOther-1 === this.col && this.rowOther === this.row)){
                this.get(this.rowOther, this.colOther-1) === "coin" ? this.otherPlayerScore++ : null

                this.alter(this.rowOther, this.colOther,'*')
                this.alter(this.rowOther, this.colOther-1, playerNum)
                this.otherPlayer.x--
                this.colOther--
            }
        }
    }
}

