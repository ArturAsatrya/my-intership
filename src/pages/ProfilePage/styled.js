import styled from "styled-components";
import {
    TextField,
    Button
} from "@mui/material"


export const CostomInput = styled(TextField)`
 & .MuiInputBase-input{
    
 }
`
export const CostomButton = styled(Button)`
  & .MuiButtonBase-root{
    background-color:red
  }
`

export const Flex = styled.div`
 justify-content:center
`