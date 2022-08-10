import React, { Dispatch } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface FilterProps {
  valuteCode: string;
  handleChangeValute: (
    event: React.MouseEvent<HTMLElement>,
    newValute: string
  ) => void;
  filterValue: number[];
  setFilterValue: Dispatch<number[]>;
}

const Filter: React.FC<FilterProps> = ({
  valuteCode,
  handleChangeValute,
  filterValue,
  setFilterValue,
}) => {
  const handleStopsCount = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "all") {
      setFilterValue([]);
    } else {
      const newArray = filterValue.includes(Number(e.currentTarget.value))
        ? filterValue.filter((item) => item !== Number(e.currentTarget.value))
        : [...filterValue, Number(e.currentTarget.value)];
      setFilterValue(newArray);
    }
  }

  return (
    <div className="filter">
      <div className="valute-block">
        <h4>ВАЛЮТА</h4>
        <ToggleButtonGroup
          color="primary"
          value={valuteCode}
          exclusive
          onChange={handleChangeValute}
          size="medium"
        >
          <ToggleButton value="RUB">RUB</ToggleButton>
          <ToggleButton value="USD">USD</ToggleButton>
          <ToggleButton value="EUR">EUR</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="stops-block">
        <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                value={"all"}
                onChange={handleStopsCount}
                checked={!filterValue.length}
              />
            }
            label="Все"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={0}
                onChange={handleStopsCount}
                checked={filterValue.includes(0)}
              />
            }
            label="Без пересадок"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={1}
                onChange={handleStopsCount}
                checked={filterValue.includes(1)}
              />
            }
            label="1 пересадка"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={2}
                onChange={handleStopsCount}
                checked={filterValue.includes(2)}
              />
            }
            label="2 пересадки"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={3}
                onChange={handleStopsCount}
                checked={filterValue.includes(3)}
              />
            }
            label="3 пересадки"
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default Filter;
