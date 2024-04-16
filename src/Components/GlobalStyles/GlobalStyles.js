import Proptype from 'prop-types';
import './GlobalStyles.scss';
function GlobalStyles({ children }) {
    return children;
}
GlobalStyles.prototype = {
    children: Proptype.node.isRequired,
};
export default GlobalStyles;
