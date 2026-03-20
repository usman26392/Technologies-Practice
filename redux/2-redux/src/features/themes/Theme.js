
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from './themeSlice';

import { useState } from 'react';

const Theme = () => {
    const [mycolor, setMycolor] = useState('blue')
    const dispatch = useDispatch()

  return (
    <div>
        <input type="text" 
            onChange={
                (e)=> {
                    return (
                        setMycolor(e.target.value)
                    )
                }
            } 
            />
        <button type="submit" onClick={()=> (dispatch(incrementByAmount(mycolor)))}>Submit</button>
        <p>{mycolor}</p>
        
    </div>
  )
}

export default Theme