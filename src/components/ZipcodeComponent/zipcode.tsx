import React, { FC } from 'react';
import TextQuestion from '../TextQuestion';

interface ZipcodeProps {
  zipcode: number;
  setZipcode: React.Dispatch<React.SetStateAction<number>>;
}

const Zipcode: FC<ZipcodeProps> = ({ zipcode, setZipcode }) => {
  return (
    <TextQuestion
      question="What is your zip code?"
      subtext="We use your zip code to determine the local climate and building codes for your area."
      label="Zip Code"
      value={zipcode}
      setValue={setZipcode}
    />
  );
};

export default Zipcode;