function ticTacToe(moves) {

    let board = Array.from({length: 3}, () => Array(3).fill(false));

    let lastMove = '';
    let movesMade = 0;

    for (let i = 0; i < moves.length; i++) {
        let move = moves[i];
        let [p1, p2] = move.split(' ');

        if (board[p1][p2] !== false) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }

        if (i === 0) {
            board[p1][p2] = 'X';
            movesMade++
            lastMove = 'X';
        } else {
            if (lastMove === 'X') {
                board[p1][p2] = 'O'
                movesMade++
                lastMove = 'O';
            } else {
                board[p1][p2] = 'X'
                movesMade++
                lastMove = 'X';
            }
        }

        if (diagonals(board) === 'X') {
            console.log(`Player X wins!`);
            break;
        } else if (diagonals(board) === 'O') {
            console.log(`Player O wins!`);
            break;
        }

        if (rowsOrCols(board) === 'X') {
            console.log(`Player X wins!`);
            break;
        } else if (rowsOrCols(board) === 'O') {
            console.log(`Player O wins!`);
            break;
        }

        if ((movesMade === 9) &&
            (diagonals(board) === false && rowsOrCols(board) === false)) {
            console.log(`The game ended! Nobody wins :(`);
            break;   
        }
    }

    function diagonals(matrix) {

        let i = 0;
        let j = 1;
        let diagonal1 = [];
        let diagonal2 = [];

        matrix.map(el => diagonal1.push(el[i++]));
        matrix.map(el => diagonal2.push(el[el.length - j++]));

        let outcome = false;

        if (!(diagonal1.some(el => el !== diagonal1[0]))) {

            if (diagonal1[0] !== 'false') outcome = diagonal1[0];

        } else if (!(diagonal2.some(el => el !== diagonal2[0]))) {

            if (diagonal2[0] !== 'false') outcome = diagonal2[0];

        }

        return outcome;
    }

    function rowsOrCols(matrix) {

        let outcome = false;

        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let col = [];

            if (!(row.some(el => el !== row[0]))) {
                outcome = row[0];
                break;
            };

            matrix.map(el => col.push(el[i]));
            if (!(col.some(el => el !== col[0]))) {
                if (col[0] !== 'false') outcome = col[0];
                break;
            };

        }

        return outcome;

    }

    for (const row of board) {
        console.log(row.join('\t'));
    }

}