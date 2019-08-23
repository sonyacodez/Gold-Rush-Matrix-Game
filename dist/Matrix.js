class Matrix {
    constructor(rowAmount, colAmount) {
        this.matrix = this.generateMatrix(rowAmount, colAmount)
    }
    generateMatrix(rowAmount, colAmount) {
        const matrix = []
        const rows = rowAmount
        const columns = colAmount
        let counter = 1

        for (let r = 0; r < rows; r++) {
            matrix.push([])
            for (let c = 0; c < columns; c++) {
                matrix[r].push(counter++)
            }
        }
        return matrix
    }
    getAllSquares() {
        const allSquares = []
        this.matrix.forEach(r => r.forEach(c => allSquares.push(c)))
        return allSquares
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    // print() {
    //     for (let r = 0; r < this.matrix.length; r++) {
    //         console.log(this.matrix[r].toString().split(",").join("\t"))
    //     }
    // }
    // getColumn(colNum) {
    //     let column = []
    //     this.matrix.forEach(r => column.push(r[colNum]))
    //     return column
    // }
    // getRow(rowNum) {
    //     let row = []
    //     this.matrix[rowNum].forEach(c => row.push(c))
    //     return row
    // }
    alter(rowNum, colNum, newVal) {
        this.matrix[rowNum][colNum] = newVal
    }
    findCoordinate(val) {
        for (let r in this.matrix) {
            for (let c in this.matrix[r]) {
                if (this.matrix[r][c] === val) {
                    return { x: c, y: r }
                }
            }
        }
    }
}