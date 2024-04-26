import { IMaxWidth } from "../../interfaces/IMaxWidth"
import { StyledDivContainer } from "./styles"

export const MaxWidth: React.FC<IMaxWidth> = ({ children }) => {
  return (
    <StyledDivContainer>
      {children}
    </StyledDivContainer>
  )
}