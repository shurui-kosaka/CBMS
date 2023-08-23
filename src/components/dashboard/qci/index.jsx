import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Health from './Health';
import Income from './Income';
import Employment from './Employment';
import Nutrition from './Nutrition';
import WaterAndSanitation from './WaterAndSanitation';
import BasicEdAndLit from './BasicEdAndLit';
import PeaceAndOrder from './PeaceAndOrder';
import Housing from './Housing';

function QCI() {
    const params = useParams();
    const location = useLocation();
    const queryparams = new URLSearchParams(location.search)

    console.log(queryparams.get("message"));
    switch (params.path) {
        case "health": return <Health />
        case "nutrition": return <Nutrition />
        case "housing": return <Housing />
        case "waterandsanitation": return <WaterAndSanitation />
        case "basiceducationandliteracy": return <BasicEdAndLit />
        case "income": return <Income />
        case "employment": return <Employment />
        case "peaceandorder": return <PeaceAndOrder />
    }
}

export default QCI
