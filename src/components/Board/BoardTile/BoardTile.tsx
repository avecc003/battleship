import clsx from "clsx";
import { getCoordinates } from "../utils.BoardTile";

type BoardTileProps = {
    boardPos: number;
    state?: number;
}

const BoardTile = ({ boardPos, state = 0 }: BoardTileProps) => {
    const { x, y } = getCoordinates(boardPos);
    // 0 = empty, 1 = ship, 2 = hit, 3 = miss
    const stateColor = { 
        0: 'bg-blue-400 hover:bg-blue-700',
        1: 'bg-green-600',
        2: 'bg-red-600',
        3: 'bg-grey-600',
    }


    const handleClick = () => {
        console.log(`Tile clicked at coordinates: (${x}, ${y}, state: ${state})`);
    }

    return (
        <div 
            onClick={handleClick} 
            className= {clsx(stateColor[state as keyof typeof stateColor],
                'aspect-square w-12 overflow-hidden border-r-2 border-b-2 cursor-pointer')}
        />
    )
}

export default BoardTile;
