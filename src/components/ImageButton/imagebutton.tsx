import React, { FC, MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import { SvgIconComponent } from '@mui/icons-material';

interface Content {
  values: string;
  label: string;
  icon: SvgIconComponent;
}

interface ImageButtonProps {
  key: string;
  content: Content;
  selected: string | string[];
  setSelected: MouseEventHandler<HTMLButtonElement>;
}

const ImageButton: FC<ImageButtonProps> = ({ key, content, selected, setSelected }) => {
  const isSelected = Array.isArray(selected)
    ? selected.map(JSON.stringify).includes(JSON.stringify(content.values))
    : JSON.stringify(selected) === JSON.stringify(content.values);

  const color = isSelected ? 'secondary' : 'primary';
  const iconColor = isSelected ? '#ffffff': '#000000';

  return (
    <Button
      variant="contained"
      onClick={setSelected}
      color={color}
      style={{ margin: '10px' }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '150px',
        height: '150px',
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: isSelected ? 'lightcoral' : 'lightblue'
        }
      }}
    >
      <content.icon style={{ fontSize: '50px' }} color={iconColor}/>
      <div>{content.label}</div>
    </Button>
  );
};

export default ImageButton;