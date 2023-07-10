
import { Item, Status, Name } from "./Frienditem.styled";


export const FriendsListItem = ({ friend }) => {
    const { name, avatar, isOnline, id } = friend;
    return (
        <Item key={id}>
            <Status isonline={isOnline ? "true" : "false"}></Status>
            <img src={avatar} alt={name} width="50" />
            <Name>{name }</Name>
        </Item>
    )
}
