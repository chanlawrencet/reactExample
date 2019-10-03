import React from 'react'


const todoStyle = {
    textAlign: 'center'
}

class Todos extends React.Component{

    constructor(props) {
        console.log('Constructor')
        super(props);
        this.state = {
            list:['Walk dog', 'Make coffee'],
            textValue:''
        }
    }

    theList = () => {
        let toReturn = []
        let i = 0
        this.state.list.forEach(x => {
            toReturn.push(<div key={x+i}>{x}</div>)
            i = i + 1
        })
        return toReturn;
    }

    addToList = newElement => {
        if (newElement !== ''){
            const {list} = this.state
            let newList = list
            newList.push(newElement)
            console.log('newList', newList)
            this.setState({
                list: newList,
                textValue: ''
            })
        }
    }

    removeFromList = () => {
        const {list} = this.state
        if (list.length !== 0 ){
            let newList = list
            newList.shift()
            console.log('newList', newList)
            this.setState({
                list: newList,
            })
        }
    }

    render(){
        const {textValue, list} = this.state

        return(
            <div style={todoStyle}>
                <h2>ToDo:</h2>
                {this.theList()}
                <br/>
                <div>
                    <input type='text' value={textValue} onChange={x=> {
                        this.setState({textValue: x.target.value})}
                        }/>
                    <br/>
                    <button onClick={()=>this.addToList(textValue)}>Add {textValue}</button>
                    <br/>
                    <br/>
                    <button onClick={this.removeFromList}>Remove {list[0]}</button>
                </div>
            </div>
        )
    }
}

export default Todos;