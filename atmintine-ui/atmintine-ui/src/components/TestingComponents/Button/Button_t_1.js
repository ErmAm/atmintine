import React from "react";
import {Button} from "@material-ui/core";
import "../../../Styles/Testing/design_t_1.css"

export default class ActionButtonClicked extends  React.Component{
    render() {
        return <>
            <Button className="resetButton" variant="contained" color="primary"
                    // onClick={this.props.onHandlingResetCount}
            >
                Reset
            </Button>
        </>
    }
}