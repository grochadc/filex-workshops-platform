import React, { Component, useState } from "react";
import Workshop from "./components/Workshop";
import styled from "styled-components";

const Modal = styled.div`
  background-color: "#3b69c4";

  z-index: 1;
  background-color: white;
  position: absolute;
  left: 400px;
  top: 150px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
  text-align: center;
`;

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => setShowModal(!showModal);

  const [reserved, setReserved] = useState(false);

  const [chosenSchedule, setChosenSchedule] = useState();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Workshop
          title="Tutorials"
          description="This is a description of the workshop"
          schedules={[
            { day: "Martes", time: "14:00 - 15:00", teacher: "Gonzalo" },
            { day: "Jueves", time: "13:00 - 14:00", teacher: "Gonzalo" }
          ]}
          handleSchedule={setChosenSchedule}
        />
        <Workshop
          title="Conversation Club"
          description="This is a description of the workshop"
          schedules={[
            { day: "Martes", time: "14:00 - 15:00", teacher: "Sergio" },
            { day: "Jueves", time: "13:00 - 14:00", teacher: "Sergio" }
          ]}
          handleSchdule={setChosenSchedule}
        />
      </div>
      {chosenSchedule ? (
        <Modal>
          {reserved ? (
            <div>
              <h3>¡Gracias por reservar!</h3>
              <p>
                <button onClick={() => setShowModal(false)}>Ok</button>
              </p>
            </div>
          ) : (
            <div>
              <h3>¿Estas seguro que deseas reservar en este horario?</h3>
              <p>
                {chosenSchedule
                  ? `${chosenSchedule.day} ${chosenSchedule.time}  Teacher ${
                      chosenSchedule.teacher
                    }`
                  : null}
              </p>
              <button onClick={() => setReserved(true)}>Reservar</button>{" "}
              <button
                onClick={() => {
                  setChosenSchedule(null);
                  setShowModal(false);
                }}
              >
                Cancelar
              </button>
            </div>
          )}
        </Modal>
      ) : null}
      <div />
    </div>
  );
};

export default App;
