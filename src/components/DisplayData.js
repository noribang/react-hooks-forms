import React from "react";

/* Display state form data.
   Pass in props object from ParentComponent. */
function DisplayData(props) {
    return (
        <div>
            <h1>{props.firstName}</h1>
            <h1>{props.lastName}</h1>
        </div>
    );
}

export default DisplayData;