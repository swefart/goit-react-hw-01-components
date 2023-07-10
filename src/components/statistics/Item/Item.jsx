import { StatEl, Label, Percentage } from "./Item.styled";
import { getRandomHexColor } from "../RandomColor";

export const Itembox = ({id, label, percentage}) => {
    return (
        <StatEl key={id} label={label} style={
            {backgroundColor: getRandomHexColor()}
        }>
            <Label>{label }</Label>
            <Percentage>{percentage}%</Percentage>
            </StatEl>
    )

}