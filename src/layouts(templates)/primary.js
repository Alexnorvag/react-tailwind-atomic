// header + post

import { Header } from "../containers(organisms)/header";
import { Section } from "../containers(organisms)/section";

export const PrimaryLayout = () => {
  return (
    <>
      <Header />

      <Section color="secondary">Medium section</Section>

      <Section>Medium section</Section>

      <Section color="primary" size="sm">
        Small section
      </Section>

      <Section size="lg">Large section</Section>
    </>
  );
};
