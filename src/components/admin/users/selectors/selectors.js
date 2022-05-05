import { createSelector } from "@reduxjs/toolkit";

const userSelector = (state) => state.user;
const adminSelector = (state) => state.admin;
const userAdminSelector = createSelector(userSelector, adminSelector, (user, admin) => ({
  id: user.id,
  token: user.token,
  users: admin.users,
}));

export { userAdminSelector, userSelector, adminSelector };