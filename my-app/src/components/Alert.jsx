import React from "react";
import cn from 'classnames';

class Alert extends React.Component {
    render() {
        const {type, text} = this.props;

        const alertAttrs = {
            role: 'alert'
        }

        const alertClass = cn('alert',
            {
                [`alert-${type}`]: true
            });

        return (
            <div className={alertClass} role={alertAttrs.role}>{text}</div>
        );
    }
}

export default Alert;