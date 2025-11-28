import clsx from "clsx";
import BoardTile from "./BoardTile";
import { BOARD_SIZE } from "./utils.BoardTile";

type BoardProps = {
    boardState?: number[][];
}

const Board = ({ boardState }: BoardProps) => {
    return ( 
        <div 
        className={clsx(
            `grid`, 
            `w-fit border-t-2 border-l-2`
        )} 
        style={{
                gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`
        }}
        >
            { boardState?.map((row, rowIndex) => 
                row.map((tile, colIndex) => 
                    <BoardTile key={`${rowIndex}-${colIndex}`} boardPos={rowIndex * BOARD_SIZE + colIndex} state={tile} />
                )
            )}
        </div>
    )
}

export default Board;