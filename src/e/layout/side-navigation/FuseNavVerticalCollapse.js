import React, { createElement, useEffect, useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItemLink } from 'react-admin';
import clsx from 'clsx';
import FuseNavBadge from './FuseNavBadge';
import FuseNavVerticalItem from './FuseNavVerticalItem';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CustomIcons,
} from '../../../fuse-base/components/all.components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    '&.open': {
      backgroundColor:
        theme.palette.type === 'dark'
          ? 'rgba(255,255,255,.015)'
          : 'rgba(0,0,0,.04)',
    },
    item: (props) => ({
      height: 40,
      width: 'calc(100% - 16px)',
      borderRadius: '0 20px 20px 0',
      paddingRight: 12,
      flex: 1,
      paddingLeft: props.itemPadding > 60 ? 60 : props.itemPadding,
      color: theme.palette.text.primary,
      '&.active > .list-item-text > span': {
        fontWeight: 600,
      },
      '& .list-item-icon': {
        marginRight: 16,
      },
    }),
  },
}));

const isUrlInChildren = (parent, url) => {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i += 1) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (
      parent.children[i].url === url ||
      url.includes(parent.children[i].url)
    ) {
      return true;
    }
  }

  return false;
};

const needsToBeOpened = (location, item) => {
  return location && isUrlInChildren(item, location.pathname);
};

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function FuseNavVerticalCollapse({ activePath, ...props }) {
  const [open, setOpen] = useState(() =>
    needsToBeOpened(window.location, props.item)
  );
  const { item, nestedLevel } = props;
  const classes = useStyles({
    itemPadding: nestedLevel > 0 ? 40 + nestedLevel * 16 : 24,
  });

  useEffect(() => {
    if (needsToBeOpened(window.location, item)) {
      setOpen(true);
    }
  }, [item]);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <ul className={clsx(classes.root, open && 'open')}>
      <ListItem
        button
        disableRipple
        style={{ color: 'white', paddingTop: '0px', paddingBottom: '0px' }}
        className={clsx(classes.item, 'list-item')}
        onClick={handleClick}
        component='li'
        to={item.url}
        role='button'
      >
        {item.icon && createElement(CustomIcons[item.icon])}
        <MenuItemLink
          disableRipple
          className='list-item-text sidebar-list-item-text'
          to={`/${item.url || item.name}`}
          primaryText={capitalize(item.name)}
        />
        {item.badge && <FuseNavBadge className='mx-4' badge={item.badge} />}

        <IconButton
          disableRipple
          style={{ color: 'white' }}
          className='w-40 h-40 p-0 focus:bg-transparent hover:bg-transparent'
          onClick={(ev) => ev.preventDefault()}
        >
          {createElement(!open ? ArrowDownIcon : ArrowUpIcon)}
        </IconButton>
      </ListItem>

      {item.children && (
        <Collapse
          in={open}
          className='collapse-children'
          style={{ marginLeft: '16px' }}
        >
          {item.children.map((i, index) => {
            if (i.children)
              return (
                <FuseNavVerticalCollapse
                  key={index}
                  activePath={activePath}
                  item={i}
                  nestedLevel={props.nestedLevel + 1}
                />
              );
            return (
              <FuseNavVerticalItem
                activePath={activePath}
                key={index}
                item={i}
                nestedLevel={props.nestedLevel + 1}
              />
            );
          })}
        </Collapse>
      )}
    </ul>
  );
}

export default FuseNavVerticalCollapse;
