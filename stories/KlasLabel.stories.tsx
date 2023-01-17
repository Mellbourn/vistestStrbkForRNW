import React from 'react';

import {KlasLabel} from '../KlasLabel';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Example/KlasLabel',
//   component: KlasLabel,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: {control: 'color'},
//   },
// };
//
// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args: any) => <KlasLabel {...args} />;
//
// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// (Primary as any).args = {};

// import {storiesOf} from '@storybook/react-native';
//
// const props = {};
//
// storiesOf('App', module).add('Primary', () => <KlasLabel />);

export const Primary = <KlasLabel />;

export default Primary;
