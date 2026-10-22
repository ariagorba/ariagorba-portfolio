import { expect } from 'storybook/test';
import ProjectCard from './ProjectCard';

const meta = {
  component: ProjectCard,
  tags: ['ai-generated'],
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Gravion Design System',
    description:
      'Enterprise design system created from scratch for a multinational bank.',
    tags: ['Design System', 'UI/UX', 'Figma'],
    imageSrc: '/assets/images/gravion/banner-gravion.png',
    imageAlt: 'Gravion Design System Banner',
    href: '#',
  },
};

export default meta;

export const Default = {};

export const LongContent = {
  args: {
    title: 'Redesigning the Enterprise Analytics Dashboard for 50k Active Users',
    description:
      'End-to-end UX research, rapid prototyping, cross-functional collaboration, and production-ready design tokens.',
    tags: ['UX Research', 'Design System', 'Analytics', 'Next.js', 'Accessibility'],
  },
};

export const CssCheck = {
  play: async ({ canvas }) => {
    const card = canvas.getByRole('link');
    // Asserts surface-card-regular (#ffffff) and border-radius (24px) loaded from globals.css & ProjectCard.module.css
    await expect(getComputedStyle(card).backgroundColor).toBe('rgb(255, 255, 255)');
    await expect(getComputedStyle(card).borderRadius).toBe('24px');
  },
};
