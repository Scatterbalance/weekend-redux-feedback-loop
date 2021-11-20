
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Feeling( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );
    const tester = useSelector( store => store.tester );
    const dispatch = useDispatch();

    

    return(
        <div>
            <h1>Feeling</h1>
            <p onClick = { ()=>{dispatch( { type: 'TEST', payload: "Meowbark"})}}>{tester}</p>
        </div>
    )
}

export default Feeling;