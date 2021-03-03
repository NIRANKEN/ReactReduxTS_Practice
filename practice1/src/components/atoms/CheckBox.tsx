import { Checkbox } from "@material-ui/core";
import React from "react";



interface OwnProps {
    checkState: boolean
    handleOnChange: Function
}

type Props = OwnProps

const CheckBox : React.FC<Props> = (props) => {
    return (
        <Checkbox checked={props.checkState} onChange={(e) => props.handleOnChange(e.target.checked)} />
    );
}

export default CheckBox;