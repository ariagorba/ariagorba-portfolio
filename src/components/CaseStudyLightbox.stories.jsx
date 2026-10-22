import { expect, within } from 'storybook/test';
import CaseStudyLightbox from './CaseStudyLightbox';

const meta = {
  component: CaseStudyLightbox,
  tags: ['ai-generated'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Default = {
  render: () => (
    <div>
      <figure className="figure" style={{ cursor: 'pointer', maxWidth: '300px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/gravion/banner-gravion.png"
          alt="Gravion Design Preview"
          className="figureImage"
          style={{ width: '100%', borderRadius: '12px' }}
        />
        <figcaption className="caption" style={{ marginTop: '8px', color: '#666' }}>
          Interactive Lightbox Target (Click image to expand)
        </figcaption>
      </figure>
      <CaseStudyLightbox />
    </div>
  ),
  play: async ({ canvas, userEvent, canvasElement }) => {
    const triggerImage = canvas.getByAltText('Gravion Design Preview');
    await expect(triggerImage).toBeInTheDocument();
    await userEvent.click(triggerImage);

    // Lightbox modal portal should open in document.body
    const dialog = await within(canvasElement.ownerDocument.body).findByRole('dialog', { name: /Image view/i });
    await expect(dialog).toBeInTheDocument();

    const closeBtn = within(dialog).getByRole('button', { name: /Close image lightbox/i });
    await userEvent.click(closeBtn);
    await expect(dialog).not.toBeInTheDocument();
  },
};
