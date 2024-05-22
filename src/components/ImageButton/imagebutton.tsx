import { FC, MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface Content {
  values: any;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
}

interface ImageButtonProps {
  key: number;
  content: Content;
  selected: string | string[];
  setSelected: MouseEventHandler<HTMLButtonElement>;
}

const ImageButton: FC<ImageButtonProps> = ({ key, content, selected, setSelected }) => {
  const isSelected = Array.isArray(selected)
    ? selected.includes(content.values)
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
      <content.icon component="svg" style={{fontSize: "50px", color: iconColor}}/>
      <div>{content.label}</div>
    </Button>
  );
};

export default ImageButton;