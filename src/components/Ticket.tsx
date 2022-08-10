import React from "react";
import { ITicket } from "../types/types";
import turkish from "../assets/turkish.png";
import way from "../assets/way.png";

interface TicketProps extends ITicket {
  valuteCode: string;
  valuteValue: number;
}

const Ticket: React.FC<TicketProps> = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  stops,
  price,
  valuteCode,
  valuteValue,
}) => {
  const createDate = (date: string) => {
    const newDate = new Date(date).toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const array = newDate.split(" ");

    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    const weekDay = days[new Date(date).getDay()];

    const result = `${array[0]} ${array[1].substring(0, 3)} ${
      array[2]
    }, ${weekDay}`;

    return result;
  }

  return (
    <div className="ticket">
      <div className="button-block">
        <div className="img-block">
          <img src={turkish} alt="" />
        </div>
        <button className="buy-btn">
          Купить <br /> за {Math.round(price * valuteValue)}
          {(function () {
            switch (valuteCode) {
              case "RUB":
                return "₽";
              case "USD":
                return "$";
              case "EUR":
                return "€";
            }
          })()}
        </button>
      </div>
      <div className="info-block">
        <div className="departure-block">
          <div className="time">{departure_time}</div>
          <div className="origin">
            {origin}, {origin_name}
          </div>
          <div className="date">{createDate(departure_date)}</div>
        </div>
        <div className="stops-block">
          <div className="stops-title">{stops} ПЕРЕСАДОК</div>
          <div className="stops-img">
            <img src={way} alt="stops" />
          </div>
        </div>
        <div className="arrival-block">
          <div className="time">{arrival_time}</div>
          <div className="origin">
            {destination}, {destination_name}
          </div>
          <div className="date">{createDate(arrival_date)}</div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
