import styled from "styled-components";
import { IRecord } from "../../types/types";
import Record from "../Record/Record";

const RecordsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const RecordsList = ({
  records,
  ownCollection,
}: {
  records: IRecord[];
  ownCollection: boolean;
}) => {
  return (
    <RecordsListStyled>
      {records.map((record, position) => {
        return (
          <Record
            ownCollection={ownCollection}
            key={position}
            record={record}
          />
        );
      })}
    </RecordsListStyled>
  );
};

export default RecordsList;
