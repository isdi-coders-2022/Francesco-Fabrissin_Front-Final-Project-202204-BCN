import styled from "styled-components";

const UserStyled = styled.div`
  position: relative;
  width: 100%;
  height: 4.5rem;
  background-color: #3a4042;
  margin-top: -1px;

  .user {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-5rem, -2.5rem);
    display: flex;
    flex-direction: column;
    align-items: center;

    &__avatar {
      width: 10rem;
      border: 2px solid #fff;
      border-radius: 5rem;
    }

    &__username {
      color: #4f4f4f;
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
`;

export default UserStyled;
