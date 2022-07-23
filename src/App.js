// import { useState } from 'react';
import { CssBaseline } from '@mui/material';
// import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import GridLayout from './components/GridLayout';
import DrawerAppBar from './components/Appbar';
// import Paginations from './components/Paginations';

function App() {
//   const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
//   const toggleMode=() =>{
//     if (mode==='light'){
//       setMode('dark')
//       document.body.style.backgroundColor='#AE0A12';
//   }
//   else {
//     setMode('light')
//     document.body.style.backgroundColor='white';
//   }
// }
  return (
        <>
          <div>
          <CssBaseline />
          {/* <Navbar title="RED" mode={mode} toggleMode={toggleMode}/> */}
          {/* <Navbar title="RED"/> */}
          <DrawerAppBar/>
            <main>
              <GridLayout/>
            </main>
          </div>
          <div className="container my-3">
            {/* <TextForm heading="Enter the text to analyze below" mode={mode}></TextForm> */}
            <TextForm heading="Enter the text to analyze below"></TextForm>
          </div>
          <div></div>
        </>
  );
}

export default App;