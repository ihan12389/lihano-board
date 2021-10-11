import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import PostsHeader from "../components/posts/PostsHeader";
import PostsContent from "../components/posts/PostsContent";
import SideBar from "../components/posts/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { PostsActions } from "../actions/posts";

/* STYLE */
const ContainerPosts = styled(Container)`
  height: 100%;
  padding: 0;
`;

const FirstRow = styled(Row)`
  height: 400px;
  margin: 0;
`;

const SecondRow = styled(Row)`
  margin: 0;
`;

const PostsContainer = (props: any) => {
  /* REDUX */
  const postsState = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  /* USE STATE */
  const [page, setPage] = useState(
    props.match.params === undefined ? 1 : props.match.params.page
  );
  const [currentPostsList, setCurrentPostsList] = useState(postsState.posts);
  const [search, setSearch] = useState(
    props.location.state === undefined ? "" : props.location.state.search
  );
  const [target, setTarget] = useState(
    props.location.state === undefined ? "" : props.location.state.target
  );

  /* INIT SETTING */
  useEffect(() => {
    console.log("post의 search와 target", search, target);
    if (search === "" || target === "") {
      dispatch(PostsActions.read());
    } else {
      console.log(search, target);
      dispatch(PostsActions.search({ search, target }));
    }
  }, [search, target]);

  useEffect(() => {
    const slicedArr = postsState.posts.slice((page - 1) * 6, page * 6);

    setCurrentPostsList(slicedArr); // 만약 pageNumber가 1이라면 0~5, 2라면 6~11
  }, [postsState, page]);

  useEffect(() => {
    console.log(props.location);
  }, [props.location.state]);

  return (
    <ContainerPosts fluid>
      <SideBar />
      <FirstRow>
        <PostsHeader />
      </FirstRow>
      <SecondRow>
        <PostsContent
          posts={currentPostsList}
          len={postsState.posts.length}
          page={page}
          setPage={setPage}
          setSearch={setSearch}
          setTarget={setTarget}
        />
      </SecondRow>
    </ContainerPosts>
  );
};

export default PostsContainer;
