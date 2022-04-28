import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { UpdateMovieForm } from "./updateMovieForm/UpdateMovieForm";
import { AddNewMovieForm } from "./addNewMovieForm/AddNewMovieForm";
import { Data } from "./styledComponents/Data";

function TableBody({ columns }) {
  const { movies } = useSelector((state) => state.admin);
  const [include, setInclude] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [addNewModalShow, setAddNewModalShow] = useState(false);
  const [movieData, setMovieData] = useState(null);

  const handleModal = (data) => {
    setMovieData(data);
    setModalShow(true);
  };

  const checkTitle = (title) => title.toLowerCase().includes(include.toLowerCase());
  return (
    <>
      <tbody>
        <tr>
          <td colSpan={6}>
            <Button onClick={() => setAddNewModalShow(true)} variant='primary'>
              Add New Movie
            </Button>
          </td>
        </tr>
        <tr>
          <Data />
          <td>
            <input onChange={(e) => setInclude(e.target.value)} />
          </td>
          <Data colSpan={4} />
        </tr>
        {movies?.map((data) =>
          checkTitle(data.title) ? (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                return accessor !== "description" ? (
                  <Data onClick={() => handleModal(data)} key={accessor}>
                    {tData}
                  </Data>
                ) : (
                  <Data key={accessor}>
                    <Accordion defaultActiveKey='0'>
                      <Accordion.Header style={{ width: 500 }}>
                        {data[accessor].substring(0, 50)}...
                      </Accordion.Header>
                      <Accordion.Body>{data[accessor]}</Accordion.Body>
                    </Accordion>
                  </Data>
                );
              })}
            </tr>
          ) : null
        )}
      </tbody>
      {movieData && (
        <UpdateMovieForm show={modalShow} data={movieData} onHide={() => setModalShow(false)} />
      )}
      <AddNewMovieForm show={addNewModalShow} onHide={() => setAddNewModalShow(false)} />
    </>
  );
}
TableBody.propTypes = {
  columns: PropTypes.array.isRequired,
};
export default TableBody;
