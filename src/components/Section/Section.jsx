import PropTypes from "prop-types";
import { SectionTitle } from './Section.styled';

export const Section = ({title, children}) => {
    return <div>
               <SectionTitle>{title}</SectionTitle>
               {children}
           </div>

}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}