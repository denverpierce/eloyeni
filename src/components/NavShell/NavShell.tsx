import React, { Component } from 'react';

interface NavShellProps {
    children: JSX.Element | JSX.Element[]
}

class NavShell extends Component {
    render() {
        return (
            <React.Fragment>{this.props.children}</React.Fragment>
        );
    }
}

export default NavShell;