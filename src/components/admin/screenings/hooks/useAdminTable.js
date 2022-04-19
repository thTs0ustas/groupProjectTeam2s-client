import { adminUsersAction, selectors, useProvider } from "../../../../model";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleError } from "../../../../model/actions";
import { handleData } from "../helpers/handleData";

const useAdminTable = (eventK) => {
  const [state, dispatch] = useProvider([selectors.url, selectors.token, selectors.username]);

  const [tableData, setTableData] = useState([]);
  const [updateTable, setUpdateTable] = useState(true);

  useEffect(() => {
    if (eventK === "screenings") {
      axios
        .get(`${state.BASE_URL}/admin/${state.username}/getScreenings`, {
          headers: {
            authorization: `Bearer ${state.token}`,
          },
        })
        .then(({ data }) => {
          console.log(data);
          setTableData(() => [...handleData(data)]);
          dispatch(adminUsersAction(data));
        })
        .catch((error) =>
          dispatch(handleError({ message: error.message, time: new Date().getTime() }))
        );
    }
  }, [eventK, updateTable]);

  return { tableData, setUpdateTable, setTableData, updateTable };
};

export { useAdminTable };
