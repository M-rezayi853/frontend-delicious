import React from 'react';

import Error404 from '../../pages/error404/error404';


class ErrorBoundary extends React.Component {
    state = {
        hasErrored: false
    };

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    };

    componentDidCatch(error, info) {
        console.log(error);
    };

    render() {
        if(this.state.hasErrored) {
            return (
                <Error404 />
            );
        };

        return this.props.children;
    };
};


export default ErrorBoundary;