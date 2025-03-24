import React, { type ReactNode } from "react";
import Cta from "../Ctas/Cta";
import DownIcon from "../Icons/DownIcon";
import { type filtersProps } from "../../../../interfaces/interfaces";

interface FiltersLayoutProps {
  children: ReactNode;
  onFiltersLayoutAction: any;
  filters: filtersProps;
}

const FiltersLayout: React.FC<FiltersLayoutProps> = ({
  children,
  onFiltersLayoutAction,
  filters
}) => {
  return (
    <section
      className={`w-full flex flex-col bg-white border border-gray rounded-lg p-5 mb-3 h-[120px] transition-all`}
    >
      <div className="flex flex-row items-center justify-between">
        <Cta
          title="Clear filters"
          action={() => {
            onFiltersLayoutAction();
          }}
          onlyText={true}
          disabled={Object.values(filters).every(
            (item) => item === "" || item === null
          )}
        />
      </div>
      {children}
    </section>
  );
};

export default FiltersLayout;
