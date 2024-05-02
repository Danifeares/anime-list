import { StaffList } from "../../interfaces/IStaffList";
import { StaffImg, StaffItem, StaffName } from "./styles";

interface Props {
  staff?: StaffList;
}

export const Staff: React.FC<Props> = ({ staff }) => {
  return (
    <StaffItem>
      <StaffImg
        src={staff?.person.images.jpg.image_url}
        alt={staff?.person.name}
      />
      <StaffName>{staff?.person.name}</StaffName>
    </StaffItem>
  );
};
