import Navbar from './Navbar';

const meta = {
  component: Navbar,
  tags: ['ai-generated'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    showHomeOnMobile: false,
  },
};

export default meta;

export const Default = {};

export const WithMobileHomeIcon = {
  args: {
    showHomeOnMobile: true,
  },
};
