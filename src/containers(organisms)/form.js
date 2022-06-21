import PropTypes from "prop-types";

import { Card } from "../components(molecules)/common(atoms)/card";
import { LabeledInput } from "../components(molecules)/labeled-input";
import { Button } from "../components(molecules)/common(atoms)/button";

export const Form = ({ inputs, buttons }) => (
  <Card size="sm">
    {inputs.map((inputProps) => (
      <LabeledInput key={inputProps.id} {...inputProps} />
    ))}

    {buttons.map((buttonProps) => (
      <Button
        key={buttonProps.id}
        variant="outline"
        onClick={buttonProps.onSubmit}
      >
        {buttonProps.label}
      </Button>
    ))}
  </Card>
);

Form.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      placeholder: PropTypes.string,
    })
  ),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,

      onSubmit: PropTypes.func,
    })
  ),
};

Form.defaultProps = {
  inputs: [
    {
      id: "input",
      label: "Input",
      placeholder: "placeholder",
    },
  ],
  buttons: [
    {
      id: "submit",
      label: "Submit",

      onSubmit: () => {},
    },
  ],
};
