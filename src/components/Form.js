/* Version 1 & 2 */
// import React, { useState } from "react";

/* Version 3 with ParentComponent */
import React from "react";

/* Version 1 */
// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");

//   /* Event handler callback */
//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }

//   return (
//     <form>
//       {/* Event listener={event handler callback} */}
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

/* Vsersion 2 */
// function Form() {
//   const [newsletter, setNewsletter] = useState(false);

//   /* Event handler callback */
//   function handleNewsletterChange(event) {
//     setNewsletter(event.target.checked);
//     console.log(newsletter);
//   }

//   return (
//     <form>
//       <label htmlFor="newsletter">Subscribe to our Newsletter? </label>
//       <input 
//         type="checkbox"
//         id="newsletter"
//         /* Event listener={callback} */
//         onChange={handleNewsletterChange}
//         checked={newsletter}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   )  
// }

/* Version 3 Controlled form. */
// Takes in props object.
function Form(props) {
  // console.log(props)
  return (
    <form>
      <input 
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input 
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>

  );

}

export default Form;
