import React, { useState } from 'react';
import { useLocale, useSetLocale } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';

const config = require('../../../config');

const languages = config.languages || [];

function LanguageSwitcher() {
  const [menu, setMenu] = useState(null);

  const locale = useLocale();
  const setLocale = useSetLocale();
  const currentLng = languages.find((lng) => lng.id === locale);

  const userMenuClick = (event) => {
    setMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setMenu(null);
  };

  function handleLanguageChange(lng) {
    console.log(lng);
    setLocale(lng.id);
    userMenuClose();
  }

  return (
    <>
      <Button className='h-64 w-64' onClick={userMenuClick}>
        {currentLng.flag && (
          <img
            className='mx-4 min-w-20'
            src={`assets/images/flags/${currentLng.flag}.png`}
            alt={currentLng.title}
          />
        )}

        <Typography className='mx-4 font-600'>{currentLng.id}</Typography>
      </Button>

      <Popover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-8',
        }}
      >
        {languages.map((lng) => (
          <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
            <ListItemIcon className='min-w-40'>
              {lng.flag && (
                <img
                  className='min-w-20'
                  src={`assets/images/flags/${lng.flag}.png`}
                  alt={lng.title}
                />
              )}
            </ListItemIcon>
            <ListItemText primary={lng.title} />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}

export default LanguageSwitcher;
