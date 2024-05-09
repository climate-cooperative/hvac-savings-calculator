import React from 'react';
import SimpleQuestion from '../SimpleQuestion';

interface HasAirCondProps {
  hasAirCond: string;
  setHasAirCond: (value: string) => void;
}

const HasAirCond: React.FC<HasAirCondProps> = (props) => {
  const { hasAirCond, setHasAirCond } = props;

  return (
    <SimpleQuestion
      question="Does your home have air conditioning?"
      options={['Yes', 'No']}
      answer={hasAirCond}
      setAnswer={setHasAirCond}
    />
  );
};

export default HasAirCond;