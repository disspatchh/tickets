import React, { useState } from "react";
import Filter from "./Filter";
import Tickets from "./Tickets";
import data from "../tickets";

const Content = () => {
  const priceFiltered = data.tickets.sort((a, b) =>
    a.price > b.price ? 1 : -1
  );

  const [filterValue, setFilterValue] = useState<number[]>([]);

  const filtered = [];
  for (let i = 0; i < priceFiltered.length; i++) {
    if (filterValue.includes(priceFiltered[i].stops)) {
      filtered.push(priceFiltered[i]);
    }
  }

  const [valuteCode, setValuteCode] = useState("RUB");
  const [valuteValue, setValuteValue] = useState<number>(1);

  function handleChangeValute(
    event: React.MouseEvent<HTMLElement>,
    newValute: string
  ): void {
    if (newValute === "RUB") {
      setValuteValue(1);
    } else {
      fetch(`https://www.cbr-xml-daily.ru/latest.js`)
        .then((res) => res.json())
        .then((data) =>
          Object.entries(data.rates).forEach((item) => {
            if (item[0] === newValute && typeof item[1] === "number") {
              setValuteValue(item[1]);
            }
          })
        );
    }
    setValuteCode(newValute);
  }

  return (
    <div className="content">
      <Filter
        valuteCode={valuteCode}
        handleChangeValute={handleChangeValute}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <Tickets
        tickets={!!filterValue.length ? filtered : priceFiltered}
        valuteCode={valuteCode}
        valuteValue={valuteValue}
      />
    </div>
  );
}

export default Content;
