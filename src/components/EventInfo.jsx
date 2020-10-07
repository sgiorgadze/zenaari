import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../services/data-services";

const EventInfo = ({ data }) => {
  const { id } = useParams();

  const [selectedData, setSelectedData] = useState({
    id: 0,
    number: "",
    author: "",
    date: "",
    price: "",
  });
  useEffect(() => {
    const d = getDataById(+id);
    setSelectedData(d);
  }, [id]);

  return (
    <div id="series-popup">
      <div className="title">
        <span>{selectedData.number}</span>
        <span>{selectedData.author}</span>
        <span>{selectedData.date}</span>
      </div>
      <div className="text">
        <span>
          ონლაინ ბილეთის შეძენა შეუძლიათ რეგისტრაცია გავლილ და ვერიფიცირებულ
          მომხმარებლებს. ონლაინ ბილეთის საფასურის გადახდა ვიზა და მასტერქარდის
          პლასტიკური ბარათებით არის შესაძლებელი. თითოეულ ვერიფიცირებულ
          მომხმარებელს მაქსიმუმ 1 ონლაინ ბილეთის შეძენა შეუძლია. გაყიდული ონლაინ
          ბილეთი უკან არ ბრუნდება. კლუბში დასაშვებად აუცილებელია წარადგინოთ:
          ამობეჭდილი ონლაინ ბილეთი ან მასზე დატანილი QR კოდი პირადობის
          დამატასტურებელ მოწმობასთან ერთად. კლუბის გარეთ დატოვებულ ნივთებზე
          ადმინისტრაცია პასუხისმგებლობას არ იღებს.
          <br />
          <br />
          Online ticket can be purchased for only verified users. Only Visa and
          MasterCard credit cards are available to pay for the Online ticket.
          Verified user can purchase a maximum 1 Online ticket. Online Tickets
          are non-refundable. To be allowed in club is necessary to submit: a
          printed online Ticket or QR code with ID card.
          <br />
          <br />
          ონლაინ ბილეთის შეძენა შეუძლიათ რეგისტრაცია გავლილ და ვერიფიცირებულ
          მომხმარებლებს. ონლაინ ბილეთის საფასურის გადახდა ვიზა და მასტერქარდის
          პლასტიკური ბარათებით არის შესაძლებელი. თითოეულ ვერიფიცირებულ
          მომხმარებელს მაქსიმუმ 1 ონლაინ ბილეთის შეძენა შეუძლია. გაყიდული ონლაინ
          ბილეთი უკან არ ბრუნდება. კლუბში დასაშვებად აუცილებელია წარადგინოთ:
          ამობეჭდილი ონლაინ ბილეთი ან მასზე დატანილი QR კოდი პირადობის
          დამატასტურებელ მოწმობასთან ერთად. კლუბის გარეთ დატოვებულ ნივთებზე
          ადმინისტრაცია პასუხისმგებლობას არ იღებს.
          <br />
          <br />
          Online ticket can be purchased for only verified users. Only Visa and
          MasterCard credit cards are available to pay for the Online ticket.
          Verified user can purchase a maximum 1 Online ticket. Online Tickets
          are non-refundable. To be allowed in club is necessary to submit: a
          printed online Ticket or QR code with ID card.
          <br />
          <br />
          გაითვალისწინეთ კლუბის ტერიტორიაზე სასტიკად აკრძალულია:
        </span>
      </div>
      <div className="popup-footer">
        <div className="price">price: {selectedData.price}</div>
        <div className="buy-btn">buy ticket</div>
      </div>
    </div>
  );
};

export default EventInfo;
