import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface ProductFiltersProps {
  sortByPrice: string;
  handlePriceSortChange: (event: SelectChangeEvent) => void;
  isLatestFilterEnabled: boolean;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductFilters = ({
  sortByPrice,
  isLatestFilterEnabled,
  handlePriceSortChange,
  handleFilterChange,
}: ProductFiltersProps) => {
  return (
    <>
      <FormControl
        variant="outlined"
        style={{ marginBottom: "1rem", minWidth: 320 }}
      >
        <InputLabel>Sort By Price</InputLabel>
        <Select
          value={sortByPrice}
          onChange={handlePriceSortChange}
          label="Sort By Price"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="price-low-high">Price: Low to High</MenuItem>
          <MenuItem value="price-high-low">Price: High to Low</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset" sx={{ marginLeft: "1rem" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isLatestFilterEnabled}
                onChange={handleFilterChange}
              />
            }
            label="Z to A"
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

export default ProductFilters;
