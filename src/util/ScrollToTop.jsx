import React, { useEffect, Fragment, FC } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history, children }) => {
      useEffect(() => {
            const unlisten = history.listen(() => {
                  window.scrollTo(0, 0);
            });
            return () => {
                  unlisten();
            }
      }, []);

      return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);