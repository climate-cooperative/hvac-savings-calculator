import React, {FC} from 'react';
import ImageButton from '../ImageButton';
import PopupHint from '../PopupHint';
import Typography from '@mui/material/Typography';

interface ImageQuestionProps {
  question: string;
  content: Array<{ values: object | string, label: string, icon: SvgIconComponent | FC}>;
  state?: string | string[];
  setState: React.Dispatch<React.SetStateAction<string | string[]>>;
  label?: string | null;
  popup?: string | null;
  selectMultiple?: boolean;
}

const ImageQuestion: React.FC<ImageQuestionProps> = ({
  question,
  content,
  state = 'Not Sure',
  setState,
  label = null,
  popup = null,
  selectMultiple = false
}) => {
  const handleImageClick = (item: string) => {
    if (selectMultiple) {
      // If selectMultiple is true, toggle the selection of the clicked image
      if (Array.isArray(state) && state.includes(item)) {
        setState(state.filter((i) => i !== item));
      } else if (item === 'Not Sure' || (Array.isArray(state) && state.includes('Not Sure'))) {
        setState([item]);
      } else {
        setState((prev) => [...prev, item]);
      }
    } else {
      // If selectMultiple is false, set the clicked image as the only selected image
      setState(item);
    }
  };

  return (
    <div className="component" style={{ width: '50%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2">{question}</Typography>
        {popup && <PopupHint content={popup} />}
      </div>
      {label && <Typography variant="h3">{label}</Typography>}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '80%'
        }}
      >
        {content.map((item, index) => (
          <div style={{ margin: '1%' }} key={index}>
            <ImageButton
              key={index}
              content={item}
              selected={state}
              setSelected={() => handleImageClick(item.values)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageQuestion;