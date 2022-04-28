import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../../constants";
import { actionTypes } from "../actions/actionTypes";
import { setError } from "../reducers/errorReducer/errorReducer";
import { getMovies } from "../reducers/moviePageReducer/moviePageReducer";

export const getNowShowingEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_NOW_PLAYING),
    switchMap(() =>
      from(axios.get(`${BASE_URL}/moviesOfTheMonth/showingNow`)).pipe(
        map(({ data }) => getMovies(data)),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );