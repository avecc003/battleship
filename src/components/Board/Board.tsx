import clsx from "clsx";
import BoardTile from "./BoardTile";
import { BOARD_SIZE } from "./utils.BoardTile";

const Board = () => {
    const board = Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, i) => ({ id: i, name: `Component ${i + 1}` }));

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
            { board.map(tile => <BoardTile key={tile.id} number={tile.id} />)  }
        </div>
    )
}

export default Board;