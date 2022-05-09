import { combineEpics } from "redux-observable";
import { getMovieEpic } from "./getMovieEpic";
import { requestLoginEpic } from "./requestLoginEpic";
import { logOutEpic } from "./logoutEpic";
import { getNowShowingEpic } from "./getNowShowingEpic";
import { todayMoviesEpic } from "./todayMoviesEpic";
import { moviesByGenreEpic } from "./moviesByGenreEpic";
import { getUpcomingEpic } from "./getUpcomingEpic";
import { registerUserEpic } from "./registerUserEpic";
import { checkoutEpic } from "./checkoutEpic";
import { createUserEpic } from "./createUserEpic";
import { updateUserEpic } from "./updateUserEpic";
import { getHistoryEpic } from "./getHistoryEpic";
import mOtMEpic from "../../components/admin/moviesOfTheMonth/epics";
import adminMoviesEpics from "../../components/admin/movies/epics";
import { getMovieForResEpic } from "../../components/reservation/epics/getMovieForResEpic";
import { adminUsersEpics } from "../../components/admin/users/epics";
import { adminScreeningsEpics } from "../../components/admin/screenings/epics";
import { paymentEpic } from "../../stripe/epics/paymentEpic";
import { paymentToTicketEpic } from "../../components/payment/epics/paymentToTicketEpic";

const rootEpic = combineEpics(
  getMovieForResEpic,
  paymentEpic,
  paymentToTicketEpic,
  getMovieEpic,
  getNowShowingEpic,
  requestLoginEpic,
  logOutEpic,
  todayMoviesEpic,
  moviesByGenreEpic,
  getUpcomingEpic,
  registerUserEpic,
  checkoutEpic,
  createUserEpic,
  updateUserEpic,
  getHistoryEpic,
  adminMoviesEpics,
  mOtMEpic,
  adminUsersEpics,
  adminScreeningsEpics
);

export default rootEpic;
