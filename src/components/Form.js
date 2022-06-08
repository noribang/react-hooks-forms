import React, { useState } from "react";

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

function Form() {
  const [newsletter, setNewsletter] = useState(false);

  /* Event handler callback */
  function handleNewsletterChange(event) {
    setNewsletter(event.target.checked);
    console.log(newsletter);
  }

  return (
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter? </label>
      <input 
        type="checkbox"
        id="newsletter"
        /* Event listener={callback} */
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  )  
}

export default Form;
