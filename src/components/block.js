import React from 'react';
import { createMarkup } from './markup';
import Card from './card';

const BlockTitle = createMarkup({ type: 'h2', defaultClass: 'block__title' });

function Block({ children, title }) {
  return (
    <Card className="block" isSection={true}>
      <BlockTitle>{title}</BlockTitle>
      <div className="block__content">{children}</div>
    </Card>
  );
}

export default Block;
