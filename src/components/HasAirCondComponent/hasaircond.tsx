import { Dispatch, SetStateAction } from 'react';
import SimpleQuestion from '../SimpleQuestion';

interface HasAirCondProps {
  hasAirCond: string;
  setHasAirCond: Dispatch<SetStateAction<string>>;
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