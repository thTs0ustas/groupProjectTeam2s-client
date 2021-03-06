import { IconContainer } from "../styledComponents/IconContainer";

const decideTdData = (data, accessor, Icon) => {
  let tdData;
  switch (accessor) {
    case "birth_date":
      tdData = data[accessor] ? new Date(data[accessor]).toISOString().split("T")[0] : "——";
      break;
    case "delete":
      tdData = (
        <IconContainer>
          <Icon />
        </IconContainer>
      );
      break;
    default:
      tdData = data[accessor] ? data[accessor] : "——";
  }
  return tdData;
};

export { decideTdData };
