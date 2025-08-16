import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import CustomButton from '../components/CustomButton';

const meta = {
component: CustomButton,
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    onClick: () => {}
  },
};