import styled from "styled-components";

const UserStyled = styled.div`
  position: relative;
  width: 100%;
  height: 4.5rem;
  background-color: #3a4042;
  margin-top: -1px;
  margin-bottom: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .user {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 18rem;
    transform: translate(-9rem, -3rem);
    display: flex;
    flex-direction: column;
    align-items: center;

    &__avatar {
      object-fit: cover;
      width: 8rem;
      height: 8rem;
      border: 2px solid #fff;
      border-radius: 5rem;
      background-color: #fff;
    }

    &__username {
      color: #4f4f4f;
      font-size: 1.5rem;
      font-weight: 600;
      width: fit-content;
      text-align: center;
    }
  }
`;

export default UserStyled;
