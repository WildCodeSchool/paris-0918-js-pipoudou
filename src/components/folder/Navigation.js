import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOut';
import * as Routes from '../constants/Routes';
import AuthUserContext from './AuthUserContext';
import './Navigation.css';
import { Button } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

     const NavigationAuth = () =>
    <div className="linksbuttons">
    <ul>
      <li><NavLink to={Routes.HOME}> <Button size= "lg" color ="elegant" className="btncolor">Accueil </Button></NavLink></li>
      <li><NavLink to={Routes.ACCOUNT}> <Button size= "lg" color ="elegant" className="btncolor"> Compte </Button></NavLink></li>
      <li> <SignOutButton /></li>
    </ul>
    </div> 

    const NavigationNonAuth = () =>
    <div className="linksbuttons">
    <ul className="links"> 
      <li><NavLink to={Routes.SIGN_IN}> <Button size= "lg" color ="elegant" className="btncolor2">Se connecter</Button></NavLink></li>
    </ul>
    </div> 



export default Navigation;