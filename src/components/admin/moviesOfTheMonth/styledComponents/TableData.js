import styled from "styled-components";
import defaultArrow from "../../../../assets/default.png";
import upArrow from "../../../../assets/up_arrow.png";
import downArrow from "../../../../assets/down_arrow.png";

const TableHeader = styled.th`
  cursor: ${({ sortable }) => sortable && "pointer"};
  background-repeat: no-repeat;
  background-position: center right;
  & td {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  background-image: ${({ sort, sortable }) =>
    sortable
      ? sort === "up"
        ? `url(${upArrow})`
        : sort === "down"
        ? `url(${downArrow})`
        : `url('${defaultArrow}')`
      : ""};

  &:first-child {
    width: 4% !important;
    text-align: center;
  }
  &:nth-child(2) {
    width: 6% !important;
    text-align: center !important;
  }
  &:nth-child(3) {
    width: 80% !important;
    align-items: flex-start;
  }
  &:nth-child(4) {
    width: 10% !important;

`;

export { TableHeader };
