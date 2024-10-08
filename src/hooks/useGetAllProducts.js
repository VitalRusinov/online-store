import { useSelector } from "react-redux";

// Создаем кастомный хук
export const useGetAllProducts = () => {
  const chairs = useSelector((state) => state.chairs.entries);
  const lamps = useSelector((state) => state.lamps.entries);
  const mirrors = useSelector((state) => state.mirrors.entries);
  const tables = useSelector((state) => state.tables.entries);

  // Возвращаем объединенные данные
  return [...chairs, ...lamps, ...mirrors, ...tables];
};

