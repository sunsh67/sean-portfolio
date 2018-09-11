import React from 'react';

const Portrait = () => {
    return(
        <div className="portrait">
           <img src={require("./portraits/portrait.jpg")} alt='portrait'></img>
         </div>

    )

}

export default Portrait;