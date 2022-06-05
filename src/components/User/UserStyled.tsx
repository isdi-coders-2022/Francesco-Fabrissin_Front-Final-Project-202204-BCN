import styled from "styled-components";

const UserStyled = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  background-color: #3a4042;
  margin-top: -1px;
  margin-bottom: 6.5rem;

  .user {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-4rem, -3rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.2rem;

    &__avatar {
      width: 8rem;
      height: 8rem;
      border: 2px solid #fff;
      border-radius: 5rem;
    }

    &__username {
      color: #4f4f4f;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

export default UserStyled;
