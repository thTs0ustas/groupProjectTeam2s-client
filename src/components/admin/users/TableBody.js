import { useState } from "react";
import { UpdateUserForm } from "./updateUserForm/UpdateUserForm";

const TableBody = ({ tableData, columns, handleUpdateTable }) => {
  const [include, setInclude] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleModal = (data) => {
    setUserData(data);
    setModalShow(true);
  };

  return (
    <>
      <tbody>
        <tr>
          <td />
          <td>
            <input onChange={(e) => setInclude(e.target.value)} />
          </td>
        </tr>
        {tableData?.map(
          (data) =>
            data.username.includes(include) && (
              <tr key={data.id}>
                {columns.map(({ accessor }) => {
                  const tData = !data[accessor]
                    ? "——"
                    : accessor === "birth_date"
                    ? new Date(data[accessor]).toLocaleDateString()
                    : data[accessor];
                  return (
                    <td onClick={() => handleModal(data)} key={accessor}>
                      {tData}
                    </td>
                  );
                })}
              </tr>
            )
        )}
      </tbody>
      {userData && (
        <UpdateUserForm
          handleUpdateTable={handleUpdateTable}
          show={modalShow}
          data={userData}
          onHide={() => setModalShow(false)}
        />
      )}
    </>
  );
};

export default TableBody;
