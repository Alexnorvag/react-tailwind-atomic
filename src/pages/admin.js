import { PrivateLayout } from "../layouts(templates)/private";

export const AdminPage = () => {
  return (
    <PrivateLayout
      page="Only Admins can see this page"
      columns={[
        { key: "col_1", title: "Song" },
        { key: "col_2", title: "Artist" },
        { key: "col_3", title: "Year" },
      ]}
      rows={[
        { col_1: "Cheri Cheri Lady", col_2: "Modern Talking", col_3: "1998" },
        {
          col_1: "You're Gonna Go Far, Kid",
          col_2: "The Offspring",
          col_3: "2008",
        },
        { col_1: "Circles", col_2: "Hollywood Undead", col_3: "2008" },
        {
          col_1: "Let Me Hear",
          col_2: "Fear, and Loathing in Las Vegas",
          col_3: "2015",
        },
      ]}
    />
  );
};
