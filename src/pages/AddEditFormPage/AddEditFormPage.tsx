import { useParams } from "react-router-dom";
import AddEditRecordForm from "../../components/AddEditRecordForm/AddEditRecordForm";

const AddEditFormPage = () => {
  const { recordId } = useParams();
  return <AddEditRecordForm recordId={recordId} />;
};

export default AddEditFormPage;
