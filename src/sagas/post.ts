import { all, put, call, takeLatest } from "redux-saga/effects";
import { PostTypes, WriteAction, ReadAction } from "../actions/post";
import * as postApi from "../apis/post";

/* BIND POST SAGA FUNCTIONS */
export default function* postSaga() {
  yield all([
    takeLatest(PostTypes.WRITE_REQUEST, write$),
    takeLatest(PostTypes.READ_REQUEST, read$),
  ]);
}

/* WRITE REQUEST TRIGGER SAGA FUNCTION */
function* write$(action: WriteAction) {
  try {
    // GET REQUEST DATA
    const writeData = action.payload;
    // TRY API
    const { data } = yield call(postApi.write, writeData);
    // GET RESPONSE DATA
    const postId = data.result._id;
    // IF SUCCESS GO SHOW PAGE
    // eslint-disable-next-line no-restricted-globals
    location.href = `/show/${postId}`;
    // DISPATCH WRITE SUCCESS
    yield put({
      type: PostTypes.WRITE_SUCCESS,
      payload: "성공했습니다.",
    });
  } catch (err) {
    // IF GET ERROR
    console.log(err);
    // DISPATCH WRITE FAILURE
    yield put({
      type: PostTypes.WRITE_FAILURE,
      payload: "데이터베이스 오류가 발생했습니다.",
    });
  }
}

/* READ REQUEST TRIGGER SAGA FUNCTION */
function* read$(action: ReadAction) {
  try {
    // GET REQUEST DATA
    const id = action.payload;
    // TRY API
    const { data } = yield call(postApi.read, id);
    // GET RESPONSE DATA
    const postId = data[0]._id;
    const title = data[0].title;
    const content = data[0].content;
    const uid = data[0].uid;
    const nickname = data[0].nickname;
    const date = data[0].date;
    const likes = data[0].likes;
    // DISPATCH READ SUCCESS
    yield put({
      type: PostTypes.READ_SUCCESS,
      payload: {
        postId,
        title,
        content,
        uid,
        nickname,
        date,
        likes,
      },
    });
  } catch (err) {
    // IF GET ERROR
    console.log(err);
    // DISPATCH READ FAILURE
    yield put({
      type: PostTypes.WRITE_FAILURE,
      payload: "데이터베이스 오류가 발생했습니다.",
    });
    // GO MAIN PAGE
    alert("게시물을 찾을 수가 없습니다.");
    // eslint-disable-next-line no-restricted-globals
    location.href = "/";
  }
}
