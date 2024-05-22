import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import HasAirCond from "../components/HasAirCondComponent/hasaircond";
import Heat from "../components/HeatComponent/heat";
import Source from "../components/SourceComponent/source";
import SqrFeet from "../components/SqrFeetComponent/sqrfeet";
import Zipcode from "../components/ZipcodeComponent/zipcode";
import Layout from '../components/LayoutComponent/layout';
import HomeEnergyAudit from '../components/Results/results';

interface LayoutValues {
    stories: number;
    basements: number;
}

const Main = () => {
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [zipcode, setZipcode] = useState<number>(0);
    const [sqrFeet, setSqrFeet] = useState<number>(0);
    const [heat, setHeat] = useState<string>('');
    const [source, setSource] = useState<string>('');
    const [layout, setLayout] = useState<LayoutValues>({ stories: 0, basements: 0 });
    const [hasAirCond, setHasAirCond] = useState<string>('No');

    useEffect(() => {
        if (success) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, [success]);
    
    const validateInput = (input: { zipcode: number, sqrFeet: number, heat: string, source: string, layout: { stories: number, basements: number }, hasAirCond: string }) => {
        const { zipcode, sqrFeet, heat, source, layout, hasAirCond } = input;
      
        if (zipcode < 10000 || zipcode > 99999) {
          return 'Invalid zipcode';
        }
      
        if (sqrFeet < 0) {
          return 'Square feet cannot be negative';
        }
      
        if (!heat) {
          return 'Heat is required';
        }
      
        if (!source) {
          return 'Source is required';
        }
      
        if (layout.stories === 0) {
          return 'At least one story is required';
        }

        if (!hasAirCond) {
          return 'Air conditioning status is required';
        }
      
        return null;
    }

    const handleSubmit = () => {
        const error_code = validateInput({ zipcode, sqrFeet, heat, source, layout, hasAirCond });
        if (error_code) {
            setError(error_code);
        } else{
            setError('');
            setSuccess(true);
            console.log('Success');
        }
    }

    const Error = () => {
        return (
            <div>
                <h1 style={{ color: 'darkred' }}>{error}</h1>
            </div>
        );
    }

    return (
        <div className="page">
            <Zipcode zipcode={zipcode} setZipcode={setZipcode} />
            <SqrFeet sqrfeet={sqrFeet} setSqrfeet={setSqrFeet} />
            <Source source={source} setSource={setSource} />
            <Heat heat={heat} setHeat={setHeat} source={source} />
            <Layout layout={layout} setLayout={setLayout} />
            <HasAirCond hasAirCond={hasAirCond} setHasAirCond={setHasAirCond} />
            {error && <Error />}
            <div style={{ height: '20px' }} />
            {!success && <Button color="primary" type="submit" onClick={handleSubmit}>Submit</Button>}
            {success && <HomeEnergyAudit isElectric={source === 'Electric'} />}
        </div>
    );
}

export default Main;