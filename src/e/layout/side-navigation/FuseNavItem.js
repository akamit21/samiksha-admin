import React from 'react';

const components = {};

export function registerComponent(name, Component) {
  components[name] = Component;
}

export default function FuseNavItem(props) {
  const { type } = props;
  const C = components[type];
  return C ? <C {...props} /> : null;
}
