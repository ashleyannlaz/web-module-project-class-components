import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue:''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            inputValue: e.target.value
        })
    };

    handleClick = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.inputValue)
    }

    render(){
        return(
            <div>
                <form>
                    <input onChange={this.handleChanges} type="text" name="task" />
                    <button onClick={this.handleClick} onSubmit>Add Item</button>
                </form>
                
            </div>
        )
    }

}

export default TodoForm;