import React, { Dispatch, SetStateAction } from 'react';
import ImageButton from '../ImageButton';
import PopupHint from '../PopupHint';
import Typography from '@mui/material/Typography';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface ImageQuestionProps {
  question: string;
  content: Array<{ 
    values: string | Object, 
    label: string, 
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
  }>;
  state?: any;
  setState: Dispatch<SetStateAction<any>>;
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
}) => {
  const handleImageClick = (item: any) => {
    setState(item);
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