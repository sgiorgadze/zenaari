import React from "react";
import { useHistory } from "react-router-dom";

const Series = ({ data, onSelectEvent }) => {
  const history = useHistory();
  const handleSpanClick = (linkPath) => {
    history.push(linkPath);
  };

  return (
    <div id="series-list">
      {/* <div data-id="series-popup" className="action-btn"></div> */}
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            handleSpanClick(`/zenaari/series/${item.id}`);
            // onSelectEvent(item.id);
          }}
        >
          <span>{item.number}</span>
          <span>{item.author}</span>
          <span>{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Series;
