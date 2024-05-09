import React, { FC } from 'react';
import TextQuestion from '../TextQuestion';

interface SqrFeetProps {
  sqrfeet: string;
  setSqrfeet: React.Dispatch<React.SetStateAction<string>>;
}

const SqrFeet: FC<SqrFeetProps> = ({ sqrfeet, setSqrfeet }) => {
  return (
    <TextQuestion
      question="What is the square footage of your home?"
      subtext="Include all finished square footage attached to your main home. Don't include detached units, garages, or unfinished basements."
      popup="Your home's square footage can be found by searching your address on Zillow"
      label="Square Footage"
      value={sqrfeet}
      setValue={setSqrfeet}
    />
  );
};

export default SqrFeet;