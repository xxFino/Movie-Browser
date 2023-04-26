import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../core/components/Container";
import {
  fetchActor,
  selectActor,
  selectActorStatus,
} from "./actorSlice";
import { NoResult } from "../../Content/NoResult";
import { Loading } from "../../Content/Loading";
import { ActorInfo } from "./index";
import { Error } from "../../Content/Error";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const ActorPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const actor = useSelector(selectActor(id));
  const status = useSelector(selectActorStatus);

  useEffect(() => {
    dispatch(fetchActor(id));
  }, [dispatch, id]);

  return {
    initial: null,
    loading: <Loading />,
    success: (
      <Container>
        <ActorInfo actorInfo={actor} />
      </Container>
    ),
    error: <Error />,
    noResult: <NoResult />,
  }[status];
};
