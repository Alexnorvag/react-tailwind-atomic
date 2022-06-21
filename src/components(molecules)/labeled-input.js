import PropTypes from "prop-types";
import clsx from "clsx";

import { Input } from "./common(atoms)/input";
import { Label } from "./common(atoms)/label";

export const LabeledInput = ({ id, placeholder, label, type, classes }) => {
  return (
    <div className={clsx("mb-4", classes)}>
      <Label id={id}>{label}</Label>

      <Input id={id} placeholder={placeholder} type={type} />
    </div>
  );
};

LabeledInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
