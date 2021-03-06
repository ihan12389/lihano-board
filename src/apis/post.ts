import axios from "axios";

/* API REQUEST DTO INTERFACE */
interface WriteRequestDto {
  title: string;
  content: string;
  uid: string | undefined;
  nickname: string | undefined;
  date: string;
  previewImg: string;
  mainImg: string;
  likes: number;
}
/* API FUNCTION PROPS DATA INTERFACE */
interface WriteData {
  title: string;
  content: string;
  uid: string | undefined;
  nickname: string | undefined;
  date: string;
  previewImg: string;
  mainImg: string;
  likes: number;
}
/* WRITE API FUNCTION */
export const write = async (writeData: WriteData) => {
  /* CREATE DTO */
  console.log(writeData);
  const request: WriteRequestDto = {
    title: writeData.title,
    content: writeData.content,
    uid: writeData.uid,
    nickname: writeData.nickname,
    date: writeData.date,
    previewImg: writeData.previewImg,
    mainImg: writeData.mainImg,
    likes: writeData.likes,
  };
  /* GET RESPONSE */
  const response = await axios
    // .post("http://localhost:3000/api/write", request)
    .post("https://lihano-board.herokuapp.com/api/write", request)
    .catch((err) => {
      console.log(err);
    });
  /* RETURN */
  return response;
};
/* READ API FUNCTION */
export const read = async (postId: string) => {
  /* GET RESPONSE */
  const response = await axios
    // .get(`http://localhost:3000/api/read/${postId}`, {
    .get(`https://lihano-board.herokuapp.com/api/read/${postId}`, {
      params: {
        postId: postId,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  /* RETURN */
  return response;
};

/* DELETE API FUNCTION */
export const postdelete = async (postId: string) => {
  /* GET RESPONSE */
  const response = await axios
    // .delete(`http://localhost:3000/api/postdelete/${postId}`, {
    .delete(`https://lihano-board.herokuapp.com/api/postdelete/${postId}`, {
      params: {
        postId: postId,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  /* RETURN */
  return response;
};
