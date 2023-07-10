import PropTypes from 'prop-types';
import { FriendsList } from "./FriendList.styled";
import { FriendsListItem } from './FriendItem/Frienditem';

export const FriendlistEl = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map((e) => <FriendsListItem key={e.id } friend={e}></FriendsListItem>)}
       </FriendsList> 
    )
}


FriendlistEl.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
}