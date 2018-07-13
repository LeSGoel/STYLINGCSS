/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <form className="my-form my-form--theme-dark my-form--compact">
          <div
            className="my-form__input-area"
            placeholder="Enter your username"
          >
            Username:
            <input id="username" className="my-form__input" type="text" />
          </div>
          <div
            className="my-form__input-area"
            placeholder="enter your password"
          >
            Password:
            <input id="password" className="my-form__input" type="password" />
          </div>
          <button
            type="submit"
            className="my-form__submit my-form__submit--disabled"
          />
        </form>
      </div>
    );
  }
}
