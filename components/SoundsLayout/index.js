import { getLayout as getSiteLayout } from '../SiteLayout';
import MusicNavbar from '../MusicNavbar';
import React from 'react';

const SoundsLayout = ({ children }) => {
  return (
    <div>
      <MusicNavbar />
      <div>{children}</div>
    </div>
  );
};

export const getLayout = page =>
  getSiteLayout(<SoundsLayout>{page}</SoundsLayout>);

export default SoundsLayout;
