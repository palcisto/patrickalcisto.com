import React from 'react';
import PropTypes from 'prop-types';
import Block from '../components/block';
import { MARKUP_MAP, ListItem } from '../components/markup';

// Need to implement theme options for the code formatting of bio, skills, and job blocks

// theme options will be based on real sublime text syntax highlighting color schemes

// initial options:
// 1.) Brogrammer
// 2.) HalfLife
// 3.) Babel JavaScript

const blocks = [
  {
    title: 'Bio',
    content: [
      {
        text:
          'Patrick is a frontend developer who takes pride in his thoughtful and deliberate approach to development and design. He is experienced in CSS, HTML, Ruby, and JavaScript and fully prescribes to a philosophy of (somewhat fanatical) precision and persnicketiness. After hours, this meticulous developer balances a delicate love triangle involving his fiancé and downhill mountain biking.',
        type: 'paragraph',
      },
    ],
  },
  {
    title: 'Core Skills',
    content: [
      {
        text: 'Languages',
        type: 'heading3',
      },
      {
        items: ['CSS3+', 'HTML5', 'JavaScript', 'ES6+'],
        type: 'unordered-list',
      },
      {
        text: 'Frameworks & Libraries',
        type: 'heading3',
      },
      {
        items: [
          'React',
          'AngularJS 1.x',
          'Ember 3.x',
          'jQuery',
          'Lodash',
          'Foundation',
          'Bootstrap',
          'styled components',
          'Jasmine',
          'Mocha',
          'Jest',
          'QUnit',
        ],
        type: 'unordered-list',
      },
    ],
  },
  {
    title: 'Experience',
    content: [
      {
        text: 'Software Engineer',
        type: 'heading3',
      },
      {
        text: 'Company Name',
        type: 'heading4',
      },
      {
        text:
          'Something descriptive about this work experience, blah, blah, blah, etc, etc, etc...',
        type: 'paragraph',
      },
      {
        text: 'Lead Frontend Developer & Software Developer',
        type: 'heading3',
      },
      {
        text: 'Company Name',
        type: 'heading4',
      },
      {
        text:
          'Something descriptive about this work experience, blah, blah, blah, etc, etc, etc...',
        type: 'paragraph',
      },
      {
        text: 'Frontend Web Developer',
        type: 'heading3',
      },
      {
        text: 'Company Name',
        type: 'heading4',
      },
      {
        text:
          'Something descriptive about this work experience, blah, blah, blah, etc, etc, etc...',
        type: 'paragraph',
      },
    ],
  },
];

const Resume = props => {
  return (
    <>
      <div className="skill-legend">
        <ol>
          <li>Beginner</li>
          <li>Intermediate</li>
          <li>Advanced</li>
          <li>Expert</li>
          <li>Badass (Think Eric Elliot and Rachel Andrew to name a couple)</li>
        </ol>
      </div>
      {blocks.map((block, i) => {
        const key = block.title.toLowerCase().replace(/\b\s/g, '-');
        return (
          <Block title={block.title} key={key}>
            {buildBlockContent(block)}
          </Block>
        );
      })}
    </>
  );
};

Resume.propTypes = {};

function buildBlockContent(block) {
  const { content: contents } = block;
  return contents.map((content, i) => {
    const { type } = content;
    const Component = MARKUP_MAP[type];
    let children;

    switch (type) {
      case 'ordered-list':
      case 'unordered-list':
        children = content.items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ));
        break;
      case 'heading3':
      case 'heading4':
      case 'heading5':
      case 'heading6':
      case 'paragraph':
      default:
        children = content.text;
    }

    return <Component key={i}>{children}</Component>;
  });
}

export default Resume;
