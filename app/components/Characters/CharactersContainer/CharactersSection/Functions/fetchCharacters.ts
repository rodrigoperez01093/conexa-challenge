import { endpoints } from "@/config";
import { type filtersProps, type pagingProps } from "@/interfaces/interfaces";
import axios from "axios";

export const fetchCharacters = async (
  filters: filtersProps,
  paging: pagingProps,
  setData: any,
  setLoading: any
): Promise<void> => {
  try {
    setLoading(true);
    let filterString = "";
    Object.entries(filters).forEach(([key, value]: any) => {
      if (value !== "" && value !== null) {
        filterString += `&${filterString === "" ? "" : ""}${key}=${value}`;
      }
    });
    const pagingString = `page=${paging.page}`;
    const { data } = await axios.get(
      endpoints("characters") + `/?${pagingString}${filterString}`
    );
    console.log("characters", data);
    setData(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
