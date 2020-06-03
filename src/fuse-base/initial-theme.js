import { createMuiTheme } from '@material-ui/core';

const config = require('../config');

const initialTheme = require(`./themes/${config.theme}.json`);

export default createMuiTheme(initialTheme);
