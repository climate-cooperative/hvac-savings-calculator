import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PopupHint from '../PopupHint/popup';

interface SimpleQuestionProps {
  question: string;
  subtext?: string;
  options: string[];
  answer: string | string[];
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
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
}) => {
  const handleButtonClick = (option: string) => {
    setAnswer(option);
  };

  return (
    <div className="component">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2">{question}</Typography>
        {popup && <PopupHint content={popup} />}
      </div>
      {subtext && <Typography variant="h3">{subtext}</Typography>}
      <div>
        {options.map((option, _index) => (
          <Button
            key={option}
            variant="contained"
            color={answer === option ? 'secondary' : 'primary'}
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