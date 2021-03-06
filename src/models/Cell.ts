import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean; //Is available to move?
    id: number; // For React keys


    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board; 
        this.x = x;
        this.y = y;
        this.color = color;
        this.available = false;
        this.figure = figure;
        this.id = Math.random();
    }

}