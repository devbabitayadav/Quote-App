import React, { useContext } from 'react';
import QuoteContext from '../context/QuoteContext';
import { getQuote } from '../context/QuoteAction';



const Card = () => {
const { quoteData  , dispatch} = useContext(QuoteContext)

const handleClick = async()=>{
const data = await getQuote();
dispatch({
  type: "GET_DATA",
  payload: data,
});

};

  return (
    <div className="card rounded-0 border-0 shadow-sm mt-5">
    <div className="card-header bg-danger text-light fs-4 rounded-0">
      Get Daily Quotes....
    </div>
    <div className="card-body bg-info-subtle">

      {/* /* exceptional handling ki h yha par  */}


    {
      quoteData === null ? (
        <>
        <h1 className='my-3'>No Quote Here...</h1>
        </>
      ):<>
        <h5 className="card-title display-7 text-dark my-3 mb-4">'{quoteData.content}'</h5>

      <button className="card-text fs-5 text-bg-warning rounded-0 border-0 text-light shadow-sm">{quoteData.author}</button>
      <div className="my-3">
      <span className="badge text-bg-success rounded-0 p-2">{quoteData.tags[0]} </span>
      </div>
      
      </>
    }
      <button className="btn btn-primary rounded-0 w-100 my-2" onClick={handleClick}>Get More Motivation</button>

      
    </div>
  </div>
  )
}

export default Card;
