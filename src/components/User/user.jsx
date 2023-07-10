import PropTypes from 'prop-types';
import { Card, Username, SocialLocation, Itemlabel, Itemstats } from './user.styled'


export const Profile = ({avatar, location, tag, username, stats: { followers, views, likes}}) => {
    return (
        <Card>
            <div>
                <img src={avatar} alt={username} />
                <Username>{username}</Username>
                <SocialLocation>@{tag}</SocialLocation>
                <SocialLocation>{location}</SocialLocation>
                <ul>
                    <li>
                        <Itemlabel>Followers</Itemlabel>
                        <Itemstats>{followers}</Itemstats>
                    </li>
                    <li>
                        <Itemlabel>Views</Itemlabel>
                        <Itemstats>{views}</Itemstats>
                    </li>
                    <li>
                        <Itemlabel>Likes</Itemlabel>
                        <Itemstats>{likes}</Itemstats>
                    </li>
                </ul>
            </div>
        </Card>
    )
}


Profile.propTypes = {
    avatar: PropTypes.string,
    location: PropTypes.string,
    tag: PropTypes.string,
    username: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
}
