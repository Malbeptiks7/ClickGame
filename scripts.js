let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];

document.querySelectorAll('.tic-tac-toe .cell').forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.getAttribute('data-index');
        if (board[index] === '') {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

function resetGame() {
    board.fill('');
    document.querySelectorAll('.tic-tac-toe .cell').forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}