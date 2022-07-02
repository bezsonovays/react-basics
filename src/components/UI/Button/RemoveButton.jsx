import React from "react";
import classes from "./RemoveButton.module.css"

function RemoveButton ({children, ...props}) {
    return (
        <button {...props} className={classes.removeButton}>{children}</button>
    )
}
export default RemoveButton;