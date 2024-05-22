import React, { FC } from 'react';
import ImageQuestion from '../ImageQuestion';
import { ElectricBolt, GasMeter, Propane, OilBarrel } from '@mui/icons-material';
import { Wood } from './svgs';

interface SourceProps {
  source: string;
  setSource: React.Dispatch<React.SetStateAction<string>>;
}

const Source: FC<SourceProps> = ({ source, setSource }) => {
  return (
    <ImageQuestion
      question="What is the primary fuel source for heating your home?"
      label="You'll have the option to enter a fuel type for a secondary system later."
      popup="What is the primary fuel source of the unit that you use to heat your home most of the time?"
      content={[
        { values: 'Electric', label: 'Electric', icon: ElectricBolt },
        { values: 'Natural Gas', label: 'Natural Gas', icon: GasMeter },
        { values: 'Propane', label: 'Propane', icon: Propane },
        { values: 'Fuel Oil', label: 'Fuel Oil / Kerosene', icon: OilBarrel },
        { values: 'Bio Fuel', label: 'Bio Fuel', icon: Wood }
      ]}
      state={source}
      setState={setSource}
    />
  );
};

export default Source;