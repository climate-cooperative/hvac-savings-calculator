import React, { useState } from 'react';
import HasAirCond from "../components/HasAirCondComponent/hasaircond";
import Heat from "../components/HeatComponent/heat";
import Source from "../components/SourceComponent/source";
import SqrFeet from "../components/SqrFeetComponent/sqrfeet";
import Zipcode from "../components/ZipcodeComponent/zipcode";

const Main = () => {
    const [zipcode, setZipcode] = useState('');
    const [sqrFeet, setSqrFeet] = useState('');
    const [heat, setHeat] = useState('');
    const [source, setSource] = useState('');
    const [hasAirCond, setHasAirCond] = useState('');

    return (
        <div>
            <Zipcode zipcode={zipcode} setZipcode={setZipcode} />
            <SqrFeet sqrfeet={sqrFeet} setSqrfeet={setSqrFeet} />
            <Heat heat={heat} setHeat={setHeat} source={source} />
            <Source source={source} setSource={setSource} />
            <HasAirCond hasAirCond={hasAirCond} setHasAirCond={setHasAirCond} />
        </div>
    );
}

export default Main;