import React, { useState } from "react";

const wrapperStyle = {
  display: "inline-block",
  textAlign: "center",
  width: "20%",
  margin: "20px"
};

const titleStyle = {
  backgroundColor: "#3B69C4",
  borderRadius: "10px",
  padding: "10px",
  color: "white"
};

const scheduleStyle = {
  backgroundColor: "white",
  width: "90%",
  padding: "10px",
  borderStyle: "solid",
  borderColor: "grey",
  borderWidth: "1px",
  borderRadius: "5px",
  margin: "0.5px"
};
function Workshop(props) {
  const [isToggled, setToggled] = useState("true");

  const toggle = () => setToggled(!isToggled);

  return (
    <div style={wrapperStyle}>
      <div style={titleStyle}>
        <h1>{props.title.toUpperCase()}</h1>
        <div style={{ margin: "20px" }}>{props.description}</div>
        <button onClick={() => toggle()}>
          {isToggled ? "Mostrar Horarios" : "Esconder Horarios"}
        </button>
      </div>
      {isToggled ? (
        ""
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {props.schedules.map((schedule, index) => (
            <button
              style={scheduleStyle}
              onClick={() => {
                props.handleSchedule(schedule);
              }}
              key={index}
            >
              {schedule.day} {schedule.time} Teacher {schedule.teacher}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Workshop;
