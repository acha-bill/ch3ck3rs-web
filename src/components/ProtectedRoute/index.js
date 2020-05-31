import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import usersApi from '../../apis/usersApi';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getApi} from '../../apis/axios';
import {setLoggedIn} from '../../redux/actions/authActions';

const ProtectedRoute = props => {
  const { layout: Layout, setLoggedIn, isLoggedIn, component: Component, ...rest } = props;
  
  let isAuthenticated = isLoggedIn;
  if(!isAuthenticated){
    const jwt = localStorage.getItem('jwt');
    if(jwt){
      isAuthenticated = true;
      const api = getApi(jwt);
      usersApi.setApi(api);
      let res = null;
      (async () => {
        res = usersApi.profile();
        isAuthenticated = res !== null;
        setLoggedIn(isAuthenticated);
      })();
    }
  }

  return (
    isAuthenticated ? 
      <Route
        {...rest}
        render={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
      : 
      <Redirect to={{ pathname: '/sign-in' }} />
  );
}


ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isLoggedIn: PropTypes.bool,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  setLoggedIn: PropTypes.func
};

const mapStateToProps = ({auth}) => {
  return {
    isLoggedIn: auth.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setLoggedIn  
},
dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
