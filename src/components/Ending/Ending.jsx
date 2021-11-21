
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

function Ending( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div>
            <h1>now what do you want to do?</h1>
        </div>
    )
}

export default Ending;