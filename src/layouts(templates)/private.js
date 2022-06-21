import PropTypes from "prop-types";

import { Header } from "../containers(organisms)/header";
import { Section } from "../containers(organisms)/section";
import { Heading } from "../components(molecules)/common(atoms)/heading";
import { Table } from "../components(molecules)/table";

export const PrivateLayout = ({ links, page, columns, rows }) => (
  <>
    <Header links={links} />

    <Section
      size="lg"
      color="primary"
      classes="flex flex-col items-center gap-8"
    >
      <Heading level={5} classes="text-center">
        {page}
      </Heading>

      <Table columns={columns} rows={rows} striped />
    </Section>
  </>
);

PrivateLayout.propTypes = {
  cover: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string, title: PropTypes.string })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

PrivateLayout.defaultProps = {
  page: "Admin template",
  columns: [
    { key: "col_1", title: "Col 1" },
    { key: "col_2", title: "Col 2" },
  ],
  rows: [
    { col_1: "Cell_0_0", col_2: "Cell_0_1" },
    { col_1: "Cell_1_0", col_2: "Cell_1_1" },
    { col_1: "Cell_2_0", col_2: "Cell_2_1" },
  ],
  links: [
    { to: "/", name: "Home" },
    { to: "/admin", name: "Admin" },
    { to: "/login", name: "Logout" },
  ],
};
