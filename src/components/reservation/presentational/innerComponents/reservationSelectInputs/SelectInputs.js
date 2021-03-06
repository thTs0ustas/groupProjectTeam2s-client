import { Input, SelectContainer } from "../../../../../theme";
import { setScreeningString } from "../../../helpers";
import { ReservationInfoBar } from "../../styledComponents";
import React from "react";

const SelectInputs = ({ handleChange, requests, movie, cinema, auditorium, screening }) => {
  return (
    <ReservationInfoBar>
      <SelectContainer controlId='floatingInput' label='Movie'>
        <Input value={movie} id='movie' name='movie' onChange={handleChange}>
          <option value={requests.movies?.title}>{requests.movies?.title}</option>
        </Input>
      </SelectContainer>

      <SelectContainer controlId='floatingInput' label='Theater'>
        <Input name='cinema' value={cinema} onChange={handleChange} disabled={!movie}>
          <option value='' />
          {requests.cinemas.map(({ id, address }) => (
            <option key={id} value={address}>
              {address}
            </option>
          ))}
        </Input>
      </SelectContainer>

      <SelectContainer controlId='floatingInput' label='Auditorium'>
        <Input
          value={auditorium}
          name='auditorium'
          onChange={(e) => handleChange(e)}
          disabled={!cinema}
        >
          <option value='' />
          {requests.auditoriums.map(({ id, hall_num, columns }) => {
            return (
              <option key={id} value={[id, columns]}>
                {`Hall ${hall_num}`}
              </option>
            );
          })}
        </Input>
      </SelectContainer>

      <SelectContainer controlId='floatingInput' label='Screenings'>
        <Input
          value={screening}
          name='screening'
          onChange={(e) => handleChange(e)}
          disabled={!auditorium}
        >
          <option value='' />
          {requests.screenings.map(({ id, movie_starts, movie_ends, movie_date }) => (
            <option key={id} value={[id, movie_date]}>
              {setScreeningString(movie_starts, movie_ends, movie_date)}
            </option>
          ))}
        </Input>
      </SelectContainer>
    </ReservationInfoBar>
  );
};

export { SelectInputs };
