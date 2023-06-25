import PropTypes from "prop-types";
import { StatisticsContainer } from './Stratistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <div>
        <StatisticsContainer>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>PosistiveFeedback:{positivePercentage}%</li>
        </StatisticsContainer>
    </div>                
}

  Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    }

