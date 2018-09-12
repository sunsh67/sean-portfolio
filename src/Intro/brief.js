import React from 'react';


const describes = [
    'is an innovative front-end developer',
    'hopes to help people with technologies',
    'is a hiking beginner',
    'is a Pokémon◓ master',
    'does not exercise a lot',
    'is a coffee addict'
]

class Brief extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            spanText: describes[0]
        }

        this.increaseCount = this.increaseCount.bind(this);
    }
    componentDidMount(){
        this.timerID = setInterval(this.increaseCount, 2000);
    }
    componentWillMount(){
        clearInterval(this.timerID);
    }

    increaseCount = () => {
        let currCount = this.state.count;
        if(currCount < describes.length -1){
            currCount++;
            this.setState({count: currCount,
                           spanText: describes[currCount]});
        
        }else{
            this.setState({count: 0,
                spanText: describes[0]});
        }
     }
    

    render(){
        return(
            <div className="brief">
                <div className='brief-item'><p>Hi ! I'm Sean Sun</p></div>
                <div className='brief-item'><p>who</p></div>
                <div className='span-item'><p>{this.state.spanText}</p></div>
                <div className='brief-item'><p>is looking for new opportunities.</p></div>
                </div>
        )

    }
      
}

export default Brief;

