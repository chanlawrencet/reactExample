import React from 'react'


const busStyle = {
    marginTop: '50px',
    textAlign: 'center'
}

const bigBus = {
    fontSize: '50px',
    cursor: 'pointer'
}

class Bus extends React.Component{

    requestBus = () => {
        this.setState({
            next: 'updating...'
        })
        var request = new Request('https://api-v3.mbta.com/predictions?sort=arrival_time&filter%5Bdirection_id%5D=1&filter%5Broute_type%5D=3&filter%5Bstop%5D=2377&filter%5Broute%5D=96', {method:'GET'});
        fetch(request)
        .then(response => response.json())
        .then(data => {
            var theDate = new Date(data.data[0].attributes.arrival_time)
            this.setState({
                next: theDate.toLocaleTimeString()
            })
            return(data.data[0].attributes.arrival_time.toString()) 
        }).catch(x => {
            return('no data')
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            next: 'updating...',
            showbus: false
        }
    }

    componentDidMount(){
        this.requestBus()
    }
    render(){
        const {next, showbus} = this.state

        return (
            <div style={busStyle}>
                <h2>Bus Tracker:</h2>

                <br/>
                The next 96 will arrive at Boston Ave @ Fairmount at {next}
                <br/>
                <br/>
                <span 
                    role='img' 
                    aria-label='bus' 
                    style={bigBus} 
                    onClick={this.requestBus} 
                    onMouseEnter={() => this.setState({showbus: true})}
                    onMouseLeave={() => this.setState({showbus: false})}
                    >
                    🚌
                </span>
                {showbus && 
                    <div>
                        Click <span 
                            role='img' 
                            aria-label='bus' 
                        >
                        🚌
                        </span> 
                        to update!
                    </div>}
            </div>
        )
    }
}

export default Bus