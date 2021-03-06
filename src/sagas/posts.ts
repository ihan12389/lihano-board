import { all, put, call, takeLatest } from "redux-saga/effects";
import { PostsTypes, ReadAction, SearchAction } from "../actions/posts";
import * as postsApi from "../apis/posts";

/* BIND POSTS SAGA FUNCTIONS */
export default function* postSaga() {
  yield all([
    takeLatest(PostsTypes.READ_REQUEST, read$),
    takeLatest(PostsTypes.SEARCH_REQUEST, search$),
  ]);
}

/* READ REQUEST TRIGGER SAGA FUNCTION */
function* read$(action: ReadAction) {
  try {
    // TRY API
    const { data } = yield call(postsApi.read);

    // DISPATCH READ SUCCESS
    yield put({
      type: PostsTypes.READ_SUCCESS,
      payload: data,
    });
  } catch (err) {
    // IF GET ERROR
    console.log(err);
    yield put({
      type: PostsTypes.READ_FAILURE,
      payload: null,
    });
  }
}

/* SEARCH REQUEST TRIGGER SAGA FUNCTION */
function* search$(action: SearchAction) {
  try {
    // TRY API
    const { data } = yield call(postsApi.search, action.payload);
    console.log("Data", data);
    // DISPATCH SEARCH SUCCESS
    yield put({
      type: PostsTypes.READ_SUCCESS,
      payload: data,
    });
  } catch (err) {
    // IF GET ERROR
    console.log(err);
    yield put({
      type: PostsTypes.SEARCH_FAILURE,
      payload: null,
    });
  }
}
