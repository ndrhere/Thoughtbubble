import { useContext } from "react";
import dairyContext from "./Context/dairyContext";
import { useEffect } from "react";
import Dairyitems from "./Dairyitems";
import { useRef } from "react";
import React from "react";
import { useState } from "react";

const About = () => {
  const context = useContext(dairyContext);
  const { fetchDairy, dairies, updateDairy } = context;

  useEffect(() => {
    fetchDairy();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editDairy = (currentDairy) => {
    ref.current.click();
    setDairy({
      id: currentDairy._id,
      eday: currentDairy.day,
      eImportantEvents: currentDairy.ImportantEvents,
      efavouritepersonoftheDay: currentDairy.favouritepersonoftheDay,
      eeatingHabits: currentDairy.eatingHabits,
      ewakingTime: currentDairy.wakingTime,
      esleepingTime: currentDairy.sleepingTime,
    });
   
  };

  const handleChange = (event) => {
    setDairy({ ...dairy, [event.target.name]: event.target.value });
  };

  const handleClick = (e) => {
    updateDairy(
      dairy.id,
      dairy.eday,
      dairy.eImportantEvents,
      dairy.efavouritepersonoftheDay,
      dairy.eeatingHabits,
      dairy.ewakingTime,
      dairy.esleepingTime
    );
   
    refClose.current.click();
    e.preventDefault();
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  const [dairy, setDairy] = useState({
    id: "",
    eday: "",
    eImportantEvents: "",
    efavouritepersonoftheDay: "",
    eeatingHabits: "",
    ewakingTime: "",
    esleepingTime: "",
  });

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Dairy
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3" action="">
                <div className="mb-3 my-3">
                  <label htmlFor="title" className="form-label">
                    Day
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="day"
                    name="eday"
                    aria-describedby="emailHelp"
                    value={dairy.eday}
                    onChange={handleChange}
                   
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Important Events
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eImportantEvents"
                    name="eImportantEvents"
                    value={dairy.eImportantEvents}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Favourite Person Of the Day
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="efavouritepersonoftheDay"
                    name="efavouritepersonoftheDay"
                    value={dairy.efavouritepersonoftheDay}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Eating Habits
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eeatingHabits"
                    name="eeatingHabits"
                    value={dairy.eeatingHabits}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                   Waking Time
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ewakingTime"
                    name="ewakingTime"
                    value={dairy.ewakingTime}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Sleeping Time
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="esleepingTime"
                    name="esleepingTime"
                    value={dairy.esleepingTime}
                    onChange={handleChange}
                    
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
              
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Dairy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-2 my-3">
      {dairies &&
        dairies.map((element) => {
          return (
            <div className=" col-md-4"  key={element._id}>
              <Dairyitems
               
                day={element.day}
                ImportantEvents={element.ImportantEvents}
                favouritepersonoftheDay={element.favouritepersonoftheDay}
                eatingHabits={element.eatingHabits}
                wakingTime={element.wakingTime}
                sleepingTime={element.sleepingTime}
                editDairy={editDairy}
                dairy={element}
              />
            </div>
          );
        })}
        </div>
    </>
  );
};

export default About;
