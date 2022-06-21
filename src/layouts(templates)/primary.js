// header + post

import { Header } from "../containers(organisms)/header";
import { Section } from "../containers(organisms)/section";

export const PrimaryLayout = () => {
  return (
    <>
      <Header />

      <Section color="secondary">Medium secondary section</Section>

      <Section>Medium default section</Section>

      <Section size="sm" color="primary">
        Small primary section
      </Section>

      <Section size="lg">Large default section</Section>

      <Section size="xs" color="primary">
        Extra small default section
      </Section>
    </>
  );
};
