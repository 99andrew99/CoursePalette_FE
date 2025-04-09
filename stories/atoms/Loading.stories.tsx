import type { Meta, StoryObj } from '@storybook/react';

import Loading from '../../components/atoms/Loading';

const meta: Meta<typeof Loading> = {
  title: 'Atoms/Loading',
  component: Loading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
