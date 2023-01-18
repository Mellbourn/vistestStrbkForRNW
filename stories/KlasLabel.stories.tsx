import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

import {KlasLabel} from '../KlasLabel';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/KlasLabel',
  component: KlasLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    chromatic: {
      viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphone6',
      },
    },
  },
};

export const Primary = <KlasLabel />;
