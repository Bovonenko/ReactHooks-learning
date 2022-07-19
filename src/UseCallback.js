import React, {useState, useCallback} from "react";
import List from './List';
const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItems = useCallback((increment) => {
        return [number + increment, number + 1 + increment, number + 2 + increment]
    }, [number]) 
    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }



    return (
        <div style={theme}>
            <input 
                value={number}
                type="number"
                onChange={e => setNumber(parseInt(e.target.value))} />
            <button className="btn btn-success" onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <List getItems={getItems} />
        </div>
    )
}

export default UseCallback;