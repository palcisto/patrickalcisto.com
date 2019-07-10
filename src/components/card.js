import React from 'react';
import compact from '../utils/compact';

function Card({ children, className, isSection, ...rest }) {
  const Element = isSection === true ? 'section' : 'div';
  let classNames = ['card', className ? className : null];
  classNames = compact(classNames).join(' ');

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
}

export default Card;
