import { DataType } from "../tickets";
import Ticket from "./Ticket";

interface TicketsProps extends DataType {
  valuteCode: string;
  valuteValue: number;
}

const Tickets: React.FC<TicketsProps> = ({ tickets, valuteCode, valuteValue }) => {
  return (
    <div className="tickets">
      {tickets.map((item, id) => {
        return (
          <Ticket
            key={item.price + id}
            origin={item.origin}
            origin_name={item.origin_name}
            destination={item.destination}
            destination_name={item.destination_name}
            departure_date={item.departure_date}
            departure_time={item.departure_time}
            arrival_date={item.arrival_date}
            arrival_time={item.arrival_time}
            carrier={item.carrier}
            stops={item.stops}
            price={item.price}
            valuteCode={valuteCode}
            valuteValue={valuteValue}
          />
        );
      })}
    </div>
  );
}

export default Tickets;
