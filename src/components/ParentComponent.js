import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
    /* State. Form values.*/
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    /* Event handlers. Callbacks.*/
    function handleFirstNameChange(event) {
        /* Call setState. Setter function. */
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        /* Call setState. Setter function. */
        setLastName(event.target.value);    
    }

    return (
        <div>
            <Form
             /* Passing state and event handlers as a prop. */
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            />
            <DisplayData firstName={firstName} lastName={lastName} />
        </div>
        
    )
}

export default ParentComponent;