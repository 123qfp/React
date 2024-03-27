
import './App.css';
import ButtonC from './components/classcomponents/button';
import FormC from './components/classcomponents/form';
import ImageC from './components/classcomponents/img';
import ListC from './components/classcomponents/list';
import TableC from './components/classcomponents/table';
import ButtonF from './components/functioncomponents/button';
import FormF from './components/functioncomponents/form';
import ImageF from './components/functioncomponents/img';
import TablEF from './components/functioncomponents/table';

function App() {
  return(
    <div class="container" >
   <ButtonC></ButtonC>  
   <ListC></ListC>
   <ImageC></ImageC>
   <ButtonF></ButtonF>
   <ImageF></ImageF>
   <listF></listF>
   <TableC></TableC>
   <TablEF></TablEF>
   <FormC></FormC>
   <FormF></FormF>
   
    </div>
   );
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
