
// import logo from './logo.svg';
import './App.scss';
import { Gallery } from './Gallery';
import Todolist from './Todolist';
import Card from './components/Card';
import PackingList from './components/PackingList';
import Scientists from './components/Scientists';
import TeaSet from './components/TeaSet';
import DateForm from './components/Date';
import DifferentProfiles from './components/DifferentProfiles';
import NotableGallery from './components/NotableScienstist';
import SallayPacking from './components/SallayPacking';
import UsmanPackingList from './components/conditional-rendering-challenges/Task-1';
import UsmanPackingList2 from './components/conditional-rendering-challenges/Task-2';
import DrinkList from './components/conditional-rendering-challenges/Task-3';
import PeopleList from './components/rendering-list/PeopleList';
import List from './components/rendering-list/rendering-list-challenges/List';
import Recepilist from './components/rendering-list/rendering-list-challenges/recepilist';
import Poem from './components/rendering-list/rendering-list-challenges/Poem';
import ChaiRecipe from './components/pure-components/ChaiRecipe';
import Cup from './components/pure-components/Cup';

// Application's root component
function App() {
  return (
    <div className="App">
      <section>
        <h1>Amazing scientist</h1>
        <Gallery/>
        <Todolist/>
        <Card/>
        <PackingList/>
        <Scientists/>
        <TeaSet/>
        <DateForm/>
        <DifferentProfiles/>
        <NotableGallery/>
        <SallayPacking/>
        <UsmanPackingList/>
        <UsmanPackingList2/>
        <DrinkList/>
        <PeopleList/>
        <h1>Rendering list task 1</h1>
        <List/>
        <h2>Rendering list task 2</h2>
        <Recepilist/>
        <Poem/>
        <ChaiRecipe/>
        <Cup/>
      </section>
    </div>
  );
}

export default App;
