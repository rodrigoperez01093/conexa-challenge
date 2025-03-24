import { Chip, Tooltip } from "@mui/material";
import React from "react";

interface CharacterAttributesProps {
  species?: string;
  status?: string;
  location?: string;
}

const CharacterAttributes: React.FC<CharacterAttributesProps> = ({
  species = "Unknown",
  status = "Unknown",
  location = "Unknown",
}) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "success";
      case "dead":
        return "error";
      default:
        return "default";
    }
  };

  const TooltipChip = ({
    label,
    color,
    maxLength = 15,
  }: {
    label: string;
    color?: "success" | "error" | "default" | "primary" | "secondary" | "info";
    maxLength?: number;
  }) => {
    const displayText =
      label.length > maxLength ? `${label.slice(0, maxLength)}...` : label;

    return (
      <Tooltip title={label} placement="bottom" arrow>
        <Chip
          label={displayText}
          size="small"
          color={color}
          variant="filled"
          className="w-full truncate scale-75"
        />
      </Tooltip>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <TooltipChip label={species} color="info" />
      <TooltipChip label={status} color={getStatusColor(status)} />
      <TooltipChip label={location} color="secondary" />
    </div>
  );
};

export default CharacterAttributes;
