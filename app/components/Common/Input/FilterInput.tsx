import { IconButton, TextField, ThemeProvider } from "@mui/material";
import React from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { muiConfig } from "@/app/lib/muiConfig";

interface FilterInputProps {
  multi?: boolean;
  labelText?: string;
  widths?: string;
  type?: string;
  value?: any;
  fullWidth?: boolean;
  onChange?: any;
  clearable?: boolean;
  clearFunction?: any;
  disabled?: boolean;
  styles?: string;
  readOnly?: boolean;
  placeholder?: string;
  showFixedLabel?: boolean;
}

const FilterInput: React.FC<FilterInputProps> = ({
  labelText = "",
  widths = "w-full",
  type = "text",
  value,
  onChange,
  clearable = false,
  clearFunction,
  fullWidth = true,
  disabled = false,
  multi = true,
  styles = "",
  readOnly = false,
  placeholder = "",
  showFixedLabel = false,
}) => {
  return (
    <ThemeProvider theme={muiConfig}>
      <div
        className={`flex flex-col ${multi ? "lg:first:ml-0 lg:last:mr-0 mx-0 lg:mx-2" : "mx-0"} ${readOnly && "border-b border-b-gray"} mt-4 lg:mt-0 ${widths} ${styles}`}
      >
        <TextField
          label={labelText}
          variant={readOnly ? "standard" : "outlined"}
          type={type}
          size="small"
          placeholder={placeholder}
          InputLabelProps={{
            shrink: showFixedLabel ? true : undefined,
          }}
          disabled={disabled}
          fullWidth={fullWidth}
          InputProps={{
            sx: { borderRadius: 16 },
            endAdornment:
              clearable && value !== "" && value !== null ? (
                <IconButton
                  size="small"
                  onClick={() => {
                    clearFunction();
                  }}
                >
                  <ClearIcon />
                </IconButton>
              ) : undefined,
          }}
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default FilterInput;
