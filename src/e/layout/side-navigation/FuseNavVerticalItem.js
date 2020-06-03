import React, { createElement } from 'react';
import { MenuItemLink } from 'react-admin';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import FuseNavBadge from './FuseNavBadge';
import { CustomIcons } from '../../../fuse-base/components/all.components';

const useStyles = makeStyles((theme) => ({
  item: () => ({
    height: 40,
    width: 'calc(100% - 16px)',
    borderRadius: '0 20px 20px 0',
    paddingRight: 1,
    // paddingLeft: props.itemPadding > 80 ? 80 : props.itemPadding,
    '&.active': {
      backgroundColor: theme.palette.secondary.main,
      color: `${theme.palette.secondary.contrastText}!important`,
      pointerEvents: 'none',
      transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
      '& .list-item-text-primary': {
        color: 'inherit',
      },
      '& .list-item-icon': {
        color: 'inherit',
      },
    },
    '>a:hover': {
      backgroundColor: 'transparent',
    },
    '& .list-item-icon': {
      marginRight: 16,
    },
    '& .list-item-text': {},
    color: theme.palette.text.primary,
    cursor: 'pointer',
    textDecoration: 'none!important',
  }),
}));

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const FuseNavVerticalItem = (props) => {
  const { item, nestedLevel, activePath } = props;
  const classes = useStyles({
    itemPadding: nestedLevel > 0 ? 30 + nestedLevel * 16 : 24,
  });
  const listItemClass = 'list-item-text sidebar-list-item-text';
  const { onMenuClick } = props;
  let sidebarItemName = item.name;
  if (item.options !== undefined && item.options.label !== undefined) {
    sidebarItemName = item.options.label;
  }
  return (
    <ListItem
      button
      disableRipple
      style={{ color: 'white' }}
      component='li'
      to={item.url || item.name}
      className={clsx(
        classes.item,
        'list-item sidebar-list-item',
        activePath === (item.url || item.name) ? 'active' : ''
      )}
      exact={item.exact}
    >
      {item.icon && createElement(CustomIcons[item.icon])}
      <MenuItemLink
        disableRipple
        className={listItemClass}
        to={`/${item.url || item.name}`}
        primaryText={capitalize(sidebarItemName)}
        onClick={onMenuClick}
      />
      {item.badge && <FuseNavBadge badge={item.badge} />}
    </ListItem>
  );
};

export default FuseNavVerticalItem;
