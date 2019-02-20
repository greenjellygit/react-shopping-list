import {Component} from "react";
import React from "react";
import {clients} from "../clients";
import {Redirect} from "react-router-dom";
import {attachAuthInterceptor, getAccessToken} from "../allegro-api.utils";

export class AuthorizationConatiner extends Component {

  constructor() {
    super();
    this.state = {
      accessToken: null
    }
  }

  componentDidMount() {
    clients.allegroAuth.client.post('/token', null, {
      params: {
        grant_type: 'client_credentials'
      }
    }).then(({data}) => {
      const accessToken = getAccessToken(data);
      attachAuthInterceptor(clients.allegroApi.client, accessToken);
      this.setState({
        accessToken: accessToken
      })
    });
  }

  hasAccessToken = () => {
    return !!this.state.accessToken;
  };

  render() {
    if (this.hasAccessToken()) {
      return <Redirect to='/search'/>
    }
    return (
      <div className='auth-container'>
        Connecting to API...
      </div>
    );
  }
}