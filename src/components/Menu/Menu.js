import React from 'react';

import Link from '../Link';

import './styles.css';

function Menu() {
	return(
  	<div className="menu">
      <Link />
      <Link />
      <Link active />
    </div>
  );
}

export default Menu;
