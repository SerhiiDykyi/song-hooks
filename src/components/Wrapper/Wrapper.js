import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.scss';

export default function Wrapper({ children }) {
  return <section className="Wrapper">{children}</section>;
}
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
