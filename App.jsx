import {add,Sub,Div} from './Calc';
ReactDOM.render(
  <>
  <ul>
    <li>{add(40,4)}</li>
    <li>{Sub(40,4)}</li>
    <li>{Div(40,4)}</li>
  </ul>
  </>
)