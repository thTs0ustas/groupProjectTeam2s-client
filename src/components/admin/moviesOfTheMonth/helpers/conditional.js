import { IconContainer } from "../styledComponents/IconContainer";

const decideTdData = (data, accessor, Icon, index) => {
  let tdData;
  switch (accessor) {
    case "#":
      tdData = index + 1;
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
