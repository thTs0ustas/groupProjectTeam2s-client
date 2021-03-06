import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { errorHandling } from "../signInForm/errors/errorHandling";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../model/actions";
import { selectors, useProvider } from "../../model";

const Subscription = () => {
  const navigate = useNavigate();
  const [{ BASE_URL }, dispatch] = useProvider([selectors.url]);
  useEffect(() => {
    const values = JSON.parse(window.sessionStorage.getItem("values"));
    axios
      .post(`${BASE_URL}/users/create`, {
        username: values.username,
        password: values.password,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        address: values.address,
        postal: values.postal,
        birth_date: values.birth_date,
      })
      .then(({ data }) => {
        window.sessionStorage.removeItem("values");
        dispatch(
          handleError({
            message: data.message,
            time: new Date().getTime(),
          })
        );
        navigate("/login");
      })
      .catch((error) => {
        errorHandling(error);
      });
  }, [BASE_URL, dispatch, navigate]);

  return (
    <Spinner animation='border' role='status'>
      <span className='visually-hidden' />
    </Spinner>
  );
};

export { Subscription };
