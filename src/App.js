import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  const [skylineId, setSkyline] = useState(1);
  const [waterfrontId, setWaterfront] = useState(1);
  const [castleId, setCastle] = useState(1);
  const [CityName, setCityName] = useState('Portland');
  const [slogans, setSlogans] = useState(['The City of Beer']);
  const [sloganForm, setSloganForm] = useState('');

  return (
    <div className="App">
      <City
        skylineId={skylineId} 
        waterfrontId={waterfrontId}
        castleId={castleId}
      />
      <h1>
        Welcome to {CityName}!
      </h1>
      <div className='bottom'>
        <CityNameInput setCityName={setCityName} />
        <section className='dropdowns'>
          <SkylineDropdown setSkyline={setSkyline} />
          <WaterfrontDropdown setWaterfront={setWaterfront} />
          <CastleDropdown setCastle={setCastle} />
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        <SloganForm setSlogans={setSlogans} slogans={slogans} setSloganForm={setSloganForm} sloganForm={sloganForm} />
        {/* here, the SloganList component takes the array of slogans that lives in state */}
        <SloganList slogans={slogans} />
      </div>
    </div>
  );
}

export default App;
