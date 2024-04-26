import React from "react"
import { IButtonProps } from "../../interfaces/IButtonProps"
import { StyledButton } from "./style"

export const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}