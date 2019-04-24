solutions = [
    [0, 4, 7, 5, 2, 6, 1, 3],
    [0, 5, 7, 2, 6, 3, 1, 4],
    [0, 6, 3, 5, 7, 1, 4, 2],
    [0, 6, 4, 7, 1, 3, 5, 2],
    [1, 3, 5, 7, 2, 0, 6, 4],
    [1, 4, 6, 0, 2, 7, 5, 3],
    [1, 4, 6, 3, 0, 7, 5, 2],
    [1, 5, 0, 6, 3, 7, 2, 4],
    [1, 5, 7, 2, 0, 3, 6, 4],
    [1, 6, 2, 5, 7, 4, 0, 3],
    [1, 6, 4, 7, 0, 3, 5, 2],
    [1, 7, 5, 0, 2, 4, 6, 3],
    [2, 0, 6, 4, 7, 1, 3, 5],
    [2, 4, 1, 7, 0, 6, 3, 5],
    [2, 4, 1, 7, 5, 3, 6, 0],
    [2, 4, 6, 0, 3, 1, 7, 5],
    [2, 4, 7, 3, 0, 6, 1, 5],
    [2, 5, 1, 4, 7, 0, 6, 3],
    [2, 5, 1, 6, 0, 3, 7, 4],
    [2, 5, 1, 6, 4, 0, 7, 3],
    [2, 5, 3, 0, 7, 4, 6, 1],
    [2, 5, 3, 1, 7, 4, 6, 0],
    [2, 5, 7, 0, 3, 6, 4, 1],
    [2, 5, 7, 0, 4, 6, 1, 3],
    [2, 5, 7, 1, 3, 0, 6, 4],
    [2, 6, 1, 7, 4, 0, 3, 5],
    [2, 6, 1, 7, 5, 3, 0, 4],
    [2, 7, 3, 6, 0, 5, 1, 4],
    [3, 0, 4, 7, 1, 6, 2, 5],
    [3, 0, 4, 7, 5, 2, 6, 1],
    [3, 1, 4, 7, 5, 0, 2, 6],
    [3, 1, 6, 2, 5, 7, 0, 4],
    [3, 1, 6, 2, 5, 7, 4, 0],
    [3, 1, 6, 4, 0, 7, 5, 2],
    [3, 1, 7, 4, 6, 0, 2, 5],
    [3, 1, 7, 5, 0, 2, 4, 6],
    [3, 5, 0, 4, 1, 7, 2, 6],
    [3, 5, 7, 1, 6, 0, 2, 4],
    [3, 5, 7, 2, 0, 6, 4, 1],
    [3, 6, 0, 7, 4, 1, 5, 2],
    [3, 6, 2, 7, 1, 4, 0, 5],
    [3, 6, 4, 1, 5, 0, 2, 7],
    [3, 6, 4, 2, 0, 5, 7, 1],
    [3, 7, 0, 2, 5, 1, 6, 4],
    [3, 7, 0, 4, 6, 1, 5, 2],
    [3, 7, 4, 2, 0, 6, 1, 5],
    [4, 0, 3, 5, 7, 1, 6, 2],
    [4, 0, 7, 3, 1, 6, 2, 5],
    [4, 0, 7, 5, 2, 6, 1, 3],
    [4, 1, 3, 5, 7, 2, 0, 6],
    [4, 1, 3, 6, 2, 7, 5, 0],
    [4, 1, 5, 0, 6, 3, 7, 2],
    [4, 1, 7, 0, 3, 6, 2, 5],
    [4, 2, 0, 5, 7, 1, 3, 6],
    [4, 2, 0, 6, 1, 7, 5, 3],
    [4, 2, 7, 3, 6, 0, 5, 1],
    [4, 6, 0, 2, 7, 5, 3, 1],
    [4, 6, 0, 3, 1, 7, 5, 2],
    [4, 6, 1, 3, 7, 0, 2, 5],
    [4, 6, 1, 5, 2, 0, 3, 7],
    [4, 6, 1, 5, 2, 0, 7, 3],
    [4, 6, 3, 0, 2, 7, 5, 1],
    [4, 7, 3, 0, 2, 5, 1, 6],
    [4, 7, 3, 0, 6, 1, 5, 2],
    [5, 0, 4, 1, 7, 2, 6, 3],
    [5, 1, 6, 0, 2, 4, 7, 3],
    [5, 1, 6, 0, 3, 7, 4, 2],
    [5, 2, 0, 6, 4, 7, 1, 3],
    [5, 2, 0, 7, 3, 1, 6, 4],
    [5, 2, 0, 7, 4, 1, 3, 6],
    [5, 2, 4, 6, 0, 3, 1, 7],
    [5, 2, 4, 7, 0, 3, 1, 6],
    [5, 2, 6, 1, 3, 7, 0, 4],
    [5, 2, 6, 1, 7, 4, 0, 3],
    [5, 2, 6, 3, 0, 7, 1, 4],
    [5, 3, 0, 4, 7, 1, 6, 2],
    [5, 3, 1, 7, 4, 6, 0, 2],
    [5, 3, 6, 0, 2, 4, 1, 7],
    [5, 3, 6, 0, 7, 1, 4, 2],
    [5, 7, 1, 3, 0, 6, 4, 2],
    [6, 0, 2, 7, 5, 3, 1, 4],
    [6, 1, 3, 0, 7, 4, 2, 5],
    [6, 1, 5, 2, 0, 3, 7, 4],
    [6, 2, 0, 5, 7, 4, 1, 3],
    [6, 2, 7, 1, 4, 0, 5, 3],
    [6, 3, 1, 4, 7, 0, 2, 5],
    [6, 3, 1, 7, 5, 0, 2, 4],
    [6, 4, 2, 0, 5, 7, 1, 3],
    [7, 1, 3, 0, 6, 4, 2, 5],
    [7, 1, 4, 2, 0, 6, 3, 5],
    [7, 2, 0, 5, 1, 4, 6, 3],
    [7, 3, 0, 2, 5, 1, 6, 4]
]