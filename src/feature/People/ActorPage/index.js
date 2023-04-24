import { Container } from "../../../core/components/Container";

export const ActorInfo = ({ actorInfo }) => {
    return (
      <Container>
        <p>aktor </p>
        {actorInfo && (
          <div key={actorInfo.id}>
            <p>{actorInfo.name}</p>
          </div>
        )}
      </Container>
    );
  };