import React, { useEffect, useState } from "react";
import { TextField, ThemeProvider } from "@mui/material";

import DownIcon from "../Icons/DownIcon";
import Autocomplete from "@mui/material/Autocomplete";
import { muiConfig } from "@/app/lib/muiConfig";

interface FilterSelectProps {
  multi?: boolean;
  labelText: string;
  widths?: string;
  value?: any;
  onChange?: any;
  disabled?: boolean;
  styles?: string;
  readOnly?: boolean;
  array: any;
  itemName: string;
  itemValue: string;
  itemKey: string;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  labelText = "Type title",
  widths = "w-full",
  value,
  onChange,
  disabled = false,
  multi = true,
  styles = "",
  readOnly = false,
  array,
  itemName,
  itemValue,
  itemKey,
}) => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (value === "") {
      setInputValue("");
    }
  }, [value]);
  return (
    <ThemeProvider theme={muiConfig}>
      <div
        className={`flex flex-col mx-0 ${widths} ${multi ? "lg:first:ml-0 lg:last:mr-0 lg:mx-2 mx-0" : "lg:mx-0"} ${readOnly && "border-b border-b-gray"} mt-4 lg:mt-0 ${styles}`}
      >
        <Autocomplete
          value={
            array?.find((option: any) => option?.[itemValue] === value) ?? null
          }
          onChange={(e, newValue) => {
            onChange(e, newValue);
          }}
          options={array}
          getOptionLabel={(option) => option?.[itemName]}
          renderInput={(params) => (
            <TextField variant="outlined" {...params} label={labelText} />
          )}
          renderOption={(props, option) => {
            return (
              <li
                {...props}
                className="py-1 px-2 hover:bg-primary hover:text-white"
                key={option?.[itemKey]}
              >
                {option?.[itemName]}
              </li>
            );
          }}
          popupIcon={<DownIcon />}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          clearOnBlur={false}
          disabled={disabled}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 16,
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default FilterSelect;
