import { Dispatch, FC, useEffect, SetStateAction } from 'react';
import ImageQuestion from '../ImageQuestion';
import { Fireplace } from '@mui/icons-material';
import { furnace, floor, raidant, air_source, geothermal, boiler, space_heater, stove } from './svgs';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface HeatOption {
  values: string;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

interface HeatProps {
  heat: string;
  setHeat: Dispatch<SetStateAction<string>>;
  source: string;
}


const Heat: FC<HeatProps> = ({ heat, setHeat, source }) => {
  const Electricity: HeatOption[] = [
    { values: 'Electric Baseboard Heating', label: 'Baseboard', icon: floor },
    { values: 'Electric Boiler / Radiator', label: 'Boiler / Radiator', icon: boiler },
    { values: 'Ducted Air Source Heat Pump', label: 'Ducted Air Source Heat Pump', icon: air_source },
    { values: 'Geothermal Heat Pump', label: 'Geothermal Heat Pump', icon: geothermal },
    { values: 'Electric Space Heater', label: 'Space Heater', icon: space_heater },
  ];

  const Gas: HeatOption[] = [
    { values: 'Natural Gas Forced Air Furnace', label: 'Forced Air Furnace', icon: furnace },
    { values: 'Natural Gas Boiler / Radiator', label: 'Boiler / Radiator', icon: boiler },
    { values: 'Natural Gas Space Heater', label: 'Space Heater', icon: space_heater },
    { values: 'Natural Gas Fireplace Inserts', label: 'Fireplace', icon: Fireplace },
  ];

  const PropaneAndOil: HeatOption[] = [
    { values: 'Propane Forced Air Furnace', label: 'Forced Air Furnace', icon: furnace },
    { values: 'Propane Boiler / Radiator', label: 'Boiler / Radiator', icon: boiler },
    { values: 'Propane Space Heater', label: 'Space Heater', icon: space_heater },
  ];

  const Wood: HeatOption[] = [
    { values: 'Wood Stove', label: 'Wood Stove', icon: stove },
    { values: 'Wood Pellet Stove', label: 'Pellet Stove', icon: stove },
    { values: 'Wood Fireplace', label: 'Fireplace', icon: Fireplace },
  ];

  useEffect(() => {
    setHeat('');
  }, [source]);

  const content =
    source === 'Electric'
      ? Electricity
      : source === 'Natural Gas'
      ? Gas
      : source === 'Propane' || source === 'Fuel Oil'
      ? PropaneAndOil
      : source === 'Bio Fuel'
      ? Wood
      : [];

  return (
    <>
      {source !== '' && (
        <ImageQuestion
          question="What is the primary source of heat for your home?"
          label="You'll have the option to enter a fuel type for a secondary system later."
          popup="What is the primary fuel source of the unit that you use to heat your home most of the time?"
          content={content}
          state={heat}
          setState={setHeat}
        />
      )}
    </>
  );
};

export default Heat;
