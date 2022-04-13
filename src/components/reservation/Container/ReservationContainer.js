import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Reservation } from "../presentational/reservation";
import { useProvider } from "../../../model";
import { useResContainer } from "./customHooks/useResContainer";
import { paymentWithStripe } from "../../../stripe/stripe";

const ReservationContainer = () => {
  const [state, dispatch] = useProvider([
    "userInfo.username",
    "userInfo.token",
    "reservation.inputValues",
    "reservation.requests",
    "reservation.response",
    "BASE_URL",
  ]);

  const {
    token,
    username,
    inputValues,
    requests,
    response,
    inputValues: { numOfTickets },
    BASE_URL,
  } = state;

  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(true);

  const handleContinueButton = (ev) => {
    ev.preventDefault();
    setSpinner(!spinner);
    if (username)
      paymentWithStripe(
        BASE_URL,
        {
          data: dataForPayment(numOfTickets),
          username,
        },
        { BASE_URL, seat: inputValues.seat, screening: inputValues.screening },
        dispatch,
        token
      );
  };

  const { handleSeatAdd, title, handleSeatRemove, handleChange, dataForPayment } = useResContainer({
    BASE_URL,
    inputValues,
    dispatch,
    response,
  });

  const props = {
    title,
    handleContinueButton,
    handleChange,
    handleSeatRemove,
    handleSeatAdd,
    spinner,
    setSpinner,
    navigate,
    BASE_URL,
    inputValues,
    requests,
    state,
    numOfTickets,
    username,
  };

  return <Reservation {...props} />;
};

export { ReservationContainer };
