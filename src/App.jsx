import React, { useState } from 'react';
import Chat from './components/Chat';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const App = () => {
  const [displayRight, setDisplayRight] = useState(true);

  const handleSwitchChange = () => {
    // Cambia el estado del interruptor
    setDisplayRight(!displayRight);
  };

  const resetChat = () => {
    // Reinicia el chat cuando cambia el interruptor
    setDisplayRight(!displayRight);
  };

  return (
    <div className="app-container">
      <FormControlLabel
        control={<Switch checked={displayRight} onChange={handleSwitchChange} />}
        label="Mostrar mensajes a la derecha"
      />
      <Chat displayRight={displayRight} onSwitchChange={resetChat} />
    </div>
  );
};

export default App;