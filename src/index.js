import React from 'react';
import ReactDOM from 'react-dom';
import CookieConsent from 'cookie-consent-lib';
import button from './index.css';


const COOKIE_EXPIRY_TIME = 150
const defaultMessage = 'This website is using cookies.';
const defaultButtonStyle = button;


function getCookieConsentInput(element){
  const el = document.getElementById(element)
  if(element === 'data-id-cookie-consent-bg-color' && el.getAttribute('data-param') === 'default') {
    return ; 
  } 
  if (element === 'data-id-cookie-consent-button-style' && el.getAttribute('data-param') === 'default'){
    return;
  }

  if(el){
    return el.getAttribute('data-param');
  }  
  return;
}

const backgroundColor = getCookieConsentInput('data-id-cookie-consent-bg-color');
const bgColor = backgroundColor || '#2B373B';

// Create consent object here
const consent = {}
consent.expires = COOKIE_EXPIRY_TIME;
consent.message = getCookieConsentInput('data-id-cookie-consent-message') || defaultMessage;
consent.location = getCookieConsentInput('data-id-cookie-consent-location');
consent.buttonText = getCookieConsentInput('data-id-cookie-consent-button-text');
consent.style = {background: bgColor};
consent.buttonStyle = getCookieConsentInput('data-id-cookie-consent-button-style') || defaultButtonStyle;
consent.enableDeclineButton = getCookieConsentInput('data-id-cookie-enable-decline');
consent.cookieName = 'consentCookie';

function ConsentWrapper(props) {
  const { message, ...restProps} = props.props;
  return (
    <CookieConsent {...restProps}>{message}</CookieConsent>
  );
}

ReactDOM.render(
  <ConsentWrapper props = {consent}/>,
  document.getElementById('light-beam-cookie-consent')
);