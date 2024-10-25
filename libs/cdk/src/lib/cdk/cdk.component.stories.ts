import type { Meta, StoryObj } from '@storybook/angular';
import { CdkComponent } from './cdk.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CdkComponent> = {
  component: CdkComponent,
  title: 'CdkComponent',
};
export default meta;
type Story = StoryObj<CdkComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cdk works!/gi)).toBeTruthy();
  },
};
