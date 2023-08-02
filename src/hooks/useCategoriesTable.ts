import { useSelector } from "react-redux";
import { TableProps } from "../components/Table";
import { selectCategoriesWithStats } from "../redux";

const titles = ["Category", "Active", "Archived"];

export function useCategoriesTable(): TableProps {
  const categories = useSelector(selectCategoriesWithStats);

  const headProps: TableProps["headProps"] = {
    data: titles,
  };

  const rowsProps: TableProps["rowsProps"] = categories.map(
    ({ icon, name, active, archived }) => {
      return {
        icon: icon,
        data: [name, active, archived],
      };
    }
  );

  return { headProps, rowsProps };
}
