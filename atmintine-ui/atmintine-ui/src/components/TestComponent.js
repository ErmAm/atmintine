// const TestComponent = (props) => (
//     <div>
//
//     <p> Viso gero iš <strong>komponento </strong>,second order</p>
//     <span>{props.user.name}</span>
//
//     </div>
// )


// function TestComponent() {
//     return <h2> Viso gero iš komponento</h2>
// }

import React from "react";

class TestComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {...props.user}
        // name: props.user.name,
        // surname: props.user.surname
    }

    onChange = (e) =>{
        // console.log(e)
        console.log("Value: ", e.target.value)

        this.setState({
            ...this.state,
            name:e.target.value
        })
    }

    render() {
        return (
            <>
                <div>
                    Hello,
                    <strong className="red">
                        {this.state.name}
                    </strong>
                    ,from class component
                </div>
                <input onChange={this.onChange}
                value={this.state.name}/>

            </>
        )
    }

}

export default TestComponent
