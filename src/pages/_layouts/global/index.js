import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import logoPath from '../../../assets/images/logo.png';

export default function GlobalLayout({ children }) {
  return (
    <Wrapper>
        <img src={logoPath} alt="logo"/>
        {children}
    </Wrapper>
  );
}

GlobalLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
