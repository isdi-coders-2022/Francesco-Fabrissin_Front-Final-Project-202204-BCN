import styled from "styled-components";
import { IRecord } from "../../types/types";
import Record from "../Record/Record";

const RecordsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const RecordsList = ({ records }: { records: IRecord[] }) => {
  return (
    <RecordsListStyled>
      {records.map((record, position) => {
        return <Record key={position} record={record} />;
      })}
    </RecordsListStyled>
  );
};

export default RecordsList;
