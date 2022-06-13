import styled from "styled-components";

const RecordConditionsPageStyled = styled.div`
  position: relative;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    padding-top: 1rem;
    font-weight: 400;
    word-spacing: 0.5px;
  }

  .conditions {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;

    .condition-grade {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .icon-back {
    cursor: pointer;
    margin-bottom: 1rem;
  }
`;

export default RecordConditionsPageStyled;
