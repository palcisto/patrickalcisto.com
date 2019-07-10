import React from 'react';
import compact from '../utils/compact';

function Markup({ children, type }) {
  return (
    <>
      <small className="tag tag--open" data-tag-type={type}></small>
      {children}
      <small className="tag tag--close" data-tag-type={type}></small>
    </>
  );
}

function createMarkup({ defaultClass, type }) {
  const Element = type;
  return ({ children, className }) => {
    let classNames = [defaultClass, className ? className : null];
    classNames = compact(classNames).join(' ');

    return (
      <Element className={classNames}>
        <Markup type={type}>{children}</Markup>
      </Element>
    );
  };
}

const createHeading = ({ level }) => createMarkup({ type: `h${level}` });
const Heading = ({ children, level, className, ...rest }) => {
  const Component = createHeading({ level });
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};
const ListItem = createMarkup({ type: 'li' });
const Paragraph = createMarkup({ type: 'p' });
const OrderedList = createMarkup({ type: 'ol' });
const UnorderedList = createMarkup({ type: 'ul' });

const MARKUP_MAP = {
  heading3: createHeading({ level: '3' }),
  heading4: createHeading({ level: '4' }),
  paragraph: Paragraph,
  'ordered-list': OrderedList,
  'unordered-list': UnorderedList,
};

export default Markup;
export {
  MARKUP_MAP,
  createMarkup,
  Heading,
  ListItem,
  Paragraph,
  OrderedList,
  UnorderedList,
};
