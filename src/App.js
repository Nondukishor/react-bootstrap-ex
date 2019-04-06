import React, { Component } from 'react';
import FlatButton from './component/FlatButton/FlatButton';
import PreFixingComponent from './component/PrefixingComponent/PreFixingComponent';
import GridSystem from './component/GridSystem/GridSystem';
import AlertComponents from './component/AlertComponents/AlertComponents';
import AlertCoponent2 from './component/AlertComponents/AlertCoponent2';
import DismissingAlert from './component/AlertComponents/DismissingAlert';
import SuccessAlert from './component/AlertComponents/SuccessAlert';
import Badge1 from './component/Badge/Badge1';
import ButtonBadge from './component/Badge/ButtonBadge';
import Contextualvariations from './component/Badge/Contextualvariations';
import BadgePill from './component/Badge/BadgePill';
import BredcrumbExample from './component/Breadcrumb/BredcrumbExample1';
import ButtonExaple1 from './component/ButtonExample/ButtonExaple1';
import ButtonExaple2 from './component/ButtonExample/ButtonExample2';
import ButtonExample3 from './component/ButtonExample/ButtonExample3';
import ButtonExample4 from './component/ButtonExample/ButtonExample4';
import ClickToLoadButton from './component/ButtonExample/ClickToLoadButton';
import ModalExample from './component/Modal/ModalExample';
import ModalExample2 from './component/Modal/ModalExample2';
import CardExample1 from './component/cards/CardExample1';
import CardListGorup from './component/cards/CardListGorup';
import Carosel1 from './component/Carousel/Carosel1';
import Carousel2 from './component/Carousel/Carousel2';
import Dropdowns1 from './component/Dropdowns/Dropdowns1';
import Dropdown2 from './component/Dropdowns/Dropdown2';
import Dropdown3 from './component/Dropdowns/Dropdown3';
import Dropdown4 from './component/Dropdowns/Dropdown4';
import Dropdown5 from './component/Dropdowns/Dropdown5';




class App extends Component {
  render() {
    return (
      <div className="App">
        <FlatButton />
        <PreFixingComponent />
        <GridSystem />
        <h1>Alert components</h1>
        <AlertComponents />
        <AlertCoponent2 />
        <h1>Dismissing</h1>
        <DismissingAlert />
        <h1>Alert Success</h1>
        <SuccessAlert />
        <h1>Badge example</h1>
        <Badge1 />
        <ButtonBadge />
        <h1>Contextual variations</h1>
        <Contextualvariations />
        <h1>Pill</h1>
        <BadgePill />
        <h1>BredCrumb example</h1>
        <BredcrumbExample />
        <h1>ButtonExample</h1>
        <ButtonExaple1 />
        <h1>Button Block</h1>
        <ButtonExaple2 />
        <h1>Button Example types</h1>
        <ButtonExample3 />
        <h1>Button Example Size</h1>
        <ButtonExample4 />
        <h1>Loading Button</h1>
        <ClickToLoadButton />
        <h1>Modal Example 1</h1>
        <ModalExample/>
        <h1>Example modal 2</h1>
        <ModalExample2/>
        <h1>React bootstrap Card Example</h1>
        <CardExample1/>
        <h1>React bootstrap card List Group</h1>
        <CardListGorup/>
        <h1>Carousel Example</h1>
        <Carosel1/>
        <h1>Carousel Example 2</h1>

        <Carousel2/>
        <h1>Dropdown example 1</h1>
        <Dropdowns1/>
        <h1>Dropdwon example 2</h1>
        <Dropdown2/>
        <h1>Dropdwon example 3</h1>
        <Dropdown3/>
        <h1>Dropdwon example 4</h1>
        <Dropdown4/>
        <h1>Dropdown example 5</h1>
        <Dropdown5/>

        
      </div>
    );
  }
}

export default App;


