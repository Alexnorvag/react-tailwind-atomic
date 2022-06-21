import PropTypes from "prop-types";

import { Header } from "../containers(organisms)/header";
import { Section } from "../containers(organisms)/section";
import { Heading } from "../components(molecules)/common(atoms)/heading";
import { Form } from "../containers(organisms)/form";

export const AuthLayout = ({ page, inputs, buttons }) => (
  <>
    <Header />

    <Section size="sm" classes="flex flex-col items-center gap-8">
      <Heading level={5} classes="text-center">
        {page}
      </Heading>

      <Form inputs={inputs} buttons={buttons} />
    </Section>
  </>
);

AuthLayout.propTypes = {
  page: PropTypes.string,
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

AuthLayout.defaultProps = {
  page: "Authorization template",
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
