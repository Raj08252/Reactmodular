import React from 'react';
import ReactDOM from 'react-dom';
import son,{favprog,name,sirname} from './App';
import add,{sub,mul,div} from './Calc';


ReactDOM.render(
<>
    {son}<br/>
    {favprog}<br/>
    {name()}<br/>
    {sirname()}
    <ul>
    <li>Addition of two no  is {add(40,4)}</li>
    <li>Subtraction of two no  is {sub(40,4)}</li>
    <li>Multiplication of two no  is {mul(40,4)}</li>
    <li>Division of two no  is {div(40,3)}</li>
    </ul>
    </>
  ,document.getElementById('root')
);

