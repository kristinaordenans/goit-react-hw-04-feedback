import PropTypes from "prop-types";
import {FeedbackBtn, BtnContainer} from './FeedbackOptions.styled'

// options={} onLeaveFeedback={}

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return <BtnContainer>
            {options.map(option=> {
               return <FeedbackBtn
                           key={option}
                           type="button"
                           name={option}
                           onClick={onLeaveFeedback}>{ option}</FeedbackBtn>
                  })
               }
          </BtnContainer>
}

FeedbackOptions.protoTypes = {
    options: PropTypes.arrayOf({
        option: PropTypes.string.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}