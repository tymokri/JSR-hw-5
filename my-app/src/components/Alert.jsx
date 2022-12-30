import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';

class Alert extends React.Component {
    render() {
        const {type, text} = this.props;

        const alertAttrs = {
            role: 'alert'
        }

        const alertClass = cn('alert', `alert-${type}`);

        return (
            <div className={alertClass} role={alertAttrs.role}>{text}</div>
        );
    }
}

Alert.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
}

export default Alert;