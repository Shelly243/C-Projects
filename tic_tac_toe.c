#include <stdio.h>
#include <stdbool.h>

void printBoard(char board[3][3])
{
    printf("  1 2 3\n");
    for (int i = 0; i < 3; i++)
    {
        printf("%d ", i + 1);
        for (int j = 0; j < 3; j++)
        {
            printf("%c", board[i][j]);
            if (j < 2)
            {
                printf("|");
            }
        }
        printf("\n");
        if (i < 2)
        {
            printf("  -+-+-\n");
        }
    }
}

bool isGameOver(char board[3][3])
{
    for (int i = 0; i < 3; i++)
    {
        if (board[i][0] != ' ' && board[i][0] == board[i][1] && board[i][1] == board[i][2])
        {
            return true;
        }
    }

    for (int j = 0; j < 3; j++)
    {
        if (board[0][j] != ' ' && board[0][j] == board[1][j] && board[1][j] == board[2][j])
        {
            return true;
        }
    }

    if (board[0][0] != ' ' && board[0][0] == board[1][1] && board[1][1] == board[2][2])
    {
        return true;
    }

    if (board[0][2] != ' ' && board[0][2] == board[1][1] && board[1][1] == board[2][0])
    {
        return true;
    }

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (board[i][j] == ' ')
            {
                return false;
            }
        }
    }

    return true;
}

int main()
{
    char board[3][3] = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
    char currentPlayer = 'X';
    int row, col;

    printf("Welcome to Tic-Tac-Toe!\n");
    printf("Player X starts.\n");

    while (1)
    {
        printBoard(board);
        printf("Player %c, enter your move (row and column): ", currentPlayer);
        scanf("%d %d", &row, &col);

        if (row < 1 || row > 3 || col < 1 || col > 3 || board[row - 1][col - 1] != ' ')
        {
            printf("Invalid move. Try again.\n");
            continue;
        }

        board[row - 1][col - 1] = currentPlayer;

        if (isGameOver(board))
        {
            printBoard(board);
            if (currentPlayer == 'X')
            {
                printf("Player X wins!\n");
            }
            else
            {
                printf("Player O wins!\n");
            }
            break;
        }

        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }

    printf("Game over. Thank you for playing!\n");

    return 0;
}
