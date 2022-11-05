import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to
      <span style={{ color: "blue" }}> Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;

// import { useState } from "react";

// const SummaryForm = () => {
//   const [isDisabled, setIsDisabled] = useState(true);

//   return (
//     <div>
//       <h1>SummaryForm</h1>
//       <form>
//         <label htmlFor="agree-checkbox">I agree all instructions</label>
//         <input
//           type="checkbox"
//           name="agree-checkbox"
//           id="agree-checkbox"
//           onChange={(event) => {
//             setIsDisabled((prevIsDisabled) => !prevIsDisabled);
//           }}
//         />
//         <button disabled={isDisabled}>I buy</button>
//       </form>
//     </div>
//   );
// };

// export default SummaryForm;
