import React from 'react';

const Portrait = () => {
    return(
        <div className="portrait">
        <div className='img-box'><img src={require("./portraits/portrait.jpg")} alt='portrait'></img></div>
         </div>

    )

}

export default Portrait;