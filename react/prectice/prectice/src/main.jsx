import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import FormInput from "./component/day1/formPrintClass";
import FormPrintFc from "./component/day1/formPrintFC";
import FormPrintObj from "./component/day1/formPrintFcObj";
import FormValidation from "./component/day2/formValidetionCC";
import FormValidationFc from "./component/day2/formValidetionFC";
import ListRender from "./component/day3/listRender";
import DynamicListRender from "./component/day3/dynamicListRender";
import ToDoList from "./component/day3/to-do-List";
import AppList from "./component/day4/idVsIndex";
import EditListRender from "./component/day4/edit";
import ToDoList2 from "./component/day3/tryThis";
import ParentComp from "./component/day8/ParentComp";
import List from "./component/day8/List";
import Progress from "./component/progress Bar/Progress";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Calculator from "./features/Calculator/Calculator";
import Movies from "./features/Movies/Movies";
import Otp from "./component/otp/otp";
import Armstrong from "./component/armstrong";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  //   <Calculator />
  //   <Movies />
  // </Provider>
  // <Armstrong />
  <Progress />
);
