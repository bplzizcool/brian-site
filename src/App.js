import React from 'react';
import InfoPanel from './components/info-panel/InfoPanel';
import DetailTabPanel from './components/detail-tabpanel/DetailTabPanel';

const App = () => {
    return (
        <div className="App">
            <InfoPanel />
            <DetailTabPanel />
        </div>
    );
};

export default App;