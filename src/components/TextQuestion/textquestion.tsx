import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PopupHint from '../PopupHint';
import '../../styles/page.css';

interface TextQuestionProps {
  question: string;
  subtext?: string | null;
  popup?: string | null;
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const TextQuestion: React.FC<TextQuestionProps> = ({ question, subtext = null, popup = null, label, value, setValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue =  event.target.value;
    if (isNaN(Number(inputValue)) || Number(inputValue) < 0) {
      return;
    }
    setValue(Number(inputValue));
  };

  return (
    <div className="component">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2">{question}</Typography>
        {popup && <PopupHint content={popup} />}
      </div>
      {subtext && <Typography variant="h3">{subtext}</Typography>}
      <TextField label={label} variant="outlined" value={value} onChange={handleChange} />
    </div>
  );
};

export default TextQuestion;