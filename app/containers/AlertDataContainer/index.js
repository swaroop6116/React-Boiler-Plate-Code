/**
 *
 * AlertDataContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAlertDataContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Alert } from 'reactstrap';

/* eslint-disable react/prefer-stateless-function */
export class AlertDataContainer extends React.Component {
  render() {
    return (
      <div>
        <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert color="info">
        This is a info alert — check it out!
      </Alert>
      <Alert color="light">
        This is a light alert — check it out!
      </Alert>
      <Alert color="dark">
        This is a dark alert — check it out!
      </Alert>
      </div>
    );
  }
}

AlertDataContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  alertDataContainer: makeSelectAlertDataContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'alertDataContainer', reducer });
const withSaga = injectSaga({ key: 'alertDataContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AlertDataContainer);
