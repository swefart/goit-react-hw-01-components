import PropTypes from 'prop-types';
import { Statisticsbox } from './statistics.styled';
import { Itembox } from './Item/Item';


export const StatisticsSection = ({stats}) => {
    return (
        <Statisticsbox>
            <h2>Upload stats</h2>
            <ul>
                {stats.map(stat => {
                    const {id, label, percentage} = stat;
                return <Itembox key={id} label={label} percentage={percentage }/>
            })}
            </ul>
        </Statisticsbox>
    )
}


StatisticsSection.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}