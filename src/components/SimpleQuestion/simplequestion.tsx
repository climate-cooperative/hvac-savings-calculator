import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PopupHint from '../PopupHint/popup';

interface SimpleQuestionProps {
  question: string;
  subtext?: string;
  options: string[];
  answer: string | string[];
  setAnswer: React.Dispatch<React.SetStateAction<string | string[]>>;
  popup?: string | null;
  selectMultiple?: boolean;
}

const SimpleQuestion: React.FC<SimpleQuestionProps> = ({
  question,
  subtext,
  options,
  answer,
  setAnswer,
  popup = null,
  selectMultiple = false
}) => {
  const handleButtonClick = (option: string) => {
    if (selectMultiple) {
      // If selectMultiple is true, toggle the selection of the clicked option
      if (Array.isArray(answer) && answer.includes(option)) {
        setAnswer(answer.filter((a) => a !== option));
      } else if (option === 'Not Sure' || (Array.isArray(answer) && answer.includes('Not Sure'))) {
        setAnswer([option]);
      } else {
        setAnswer((prev) => [...prev, option]);
      }
    } else {
      // If selectMultiple is false, set the clicked option as the only selected option
      setAnswer(option);
    }
  };

  return (
    <div className="component">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2">{question}</Typography>
        {popup && <PopupHint content={popup} />}
      </div>
      {subtext && <Typography variant="h3">{subtext}</Typography>}
      <div>
        {options.map((option, index) => (
          <Button
            key={option}
            variant="contained"
            color={Array.isArray(answer) && answer.includes(option) ? 'secondary' : 'primary'}
            onClick={() => handleButtonClick(option)}
            style={{ margin: '10px' }}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SimpleQuestion;