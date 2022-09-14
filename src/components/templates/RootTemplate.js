import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyle';
import mainTheme from 'themes/mainTheme';
import { ThemeProvider as MUIthemeProvider } from '@material-ui/core/styles';
import { MUItheme } from 'themes/MUItheme';

const RootTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <MUIthemeProvider theme={MUItheme}>{children}</MUIthemeProvider>
    </ThemeProvider>
  );
};
export default RootTemplate;

RootTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
