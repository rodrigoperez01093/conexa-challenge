import React from "react";
import {
  type pagingProps,
  type filtersProps,
} from "../../../../../../interfaces/interfaces";
import InputsLayout from "../../../../Common/Layouts/InputsLayout";
import FiltersLayout from "../../../../Common/Layouts/FiltersLayout";
import FilterInput from "../../../../Common/Input/FilterInput";
import FilterSelect from "@/app/components/Common/Select/FilterSelect";
import filtersInitialState from "./Resources/filtersInitialState.json";
import { CHARACTER_STATUS } from "@/config";

interface FilterProps {
  filters: filtersProps;
  setFilters: React.Dispatch<React.SetStateAction<filtersProps>>;
  setPaging: React.Dispatch<React.SetStateAction<pagingProps>>;
}

const Filters: React.FC<FilterProps> = ({ filters, setFilters, setPaging }) => {
  return (
    <FiltersLayout
      onFiltersLayoutAction={() => {
        setFilters({ ...filtersInitialState });
      }}
      filters={filters}
    >
      <InputsLayout>
        <FilterInput
          labelText="Name"
          value={filters.name}
          onChange={(e: any) => {
            setFilters({ ...filters, name: e.target.value });
            setPaging({ page: 1 });
          }}
          clearable={true}
          clearFunction={() => {
            setFilters({ ...filters, name: "" });
            setPaging({ page: 1 });
          }}
        />
        <FilterSelect
          labelText="Status"
          array={CHARACTER_STATUS.map((status: string) => {
            return { status, value: status };
          })}
          value={filters.status}
          itemName="status"
          itemValue="value"
          onChange={(e: any, newValue: any) => {
            setFilters({
              ...filters,
              status: newValue === null ? "" : newValue.value,
            });
            setPaging({ page: 1 });
          }}
          itemKey="value"
        />
      </InputsLayout>
    </FiltersLayout>
  );
};

export default Filters;
