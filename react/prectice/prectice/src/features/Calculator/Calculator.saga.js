import { put, takeLatest } from "redux-saga/effects";
import { addRequestFailed, addRequestSuccess } from "./Calculator.slice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const { num1, num2 } = action.payload;
    console.log("Actions: ", action);
    const sum = +num1 + +num2;
    //yield delay(5000);
    yield put(addRequestSuccess({ sum }));
  } catch (e) {
    console.log("Actions Error: ", e);
    yield put(addRequestFailed({ sum: 0 }));
  }
}


function* watchAddNumRequest() {
  yield takeLatest("calculator/add", fetchUser);
}

export default watchAddNumRequest;