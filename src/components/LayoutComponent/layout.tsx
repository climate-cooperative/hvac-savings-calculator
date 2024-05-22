import React, { FC } from 'react';
import ImageQuestion from '../ImageQuestion';
import { Icon_1Story, Icon_1Story_1Basement, Icon_2Story, Icon_2Story_1Basement, Icon_1Story_halfBasement } from './svgs';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface LayoutValues {
  stories: number;
  basements: number;
}

interface HomeLayout {
  values: LayoutValues;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

interface LayoutProps {
  layout: LayoutValues;
  setLayout: React.Dispatch<React.SetStateAction<LayoutValues>>;
}

const Layout: FC<LayoutProps> = ({ layout, setLayout }) => {
  const homeLayouts: HomeLayout[] = [
    { values: { stories: 1, basements: 0 }, label: '1 Story', icon: Icon_1Story },
    { values: { stories: 1, basements: 1 / 2 }, label: '1 Story + 1/2 Basement', icon: Icon_1Story_halfBasement },
    { values: { stories: 1, basements: 1 }, label: '1 Story + 1 Basement', icon: Icon_1Story_1Basement },
    { values: { stories: 2, basements: 0 }, label: '2 Story', icon: Icon_2Story },
    { values: { stories: 2, basements: 1 }, label: '2 Story + 1 Basement', icon: Icon_2Story_1Basement }
  ];

  return (
    <ImageQuestion
      question="Which layout is most similar to your home?"
      content={homeLayouts}
      state={layout}
      setState={setLayout}
    />
  );
};

export default Layout;