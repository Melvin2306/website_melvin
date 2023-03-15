import { useEffect, useState } from "react";
import DragDrop from "./FileuploadDragandDrop";

const MAX_FILE_SIZE = 5120; // 5MB
const inMB = (inKB: number) => inKB / 1024

function FileuploadPicker() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);



  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const validateSelectedFile = () => {

    if (!selectedFile) {
      setErrorMsg("Please choose a file");
      setIsSuccess(false);
      return;
    }

    const fileSizeKiloBytes = selectedFile.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than maximum limit");
      setIsSuccess(false);
      return;
    }



    setErrorMsg("");
    setIsSuccess(true);
  };

  useEffect(() => {
    validateSelectedFile()
  }, [selectedFile])

  return (
    <div className="FileuploadPicker-container">
      <div className="card">
        <div className="card-body">
          <input type="file" name="file" onChange={handleFileChange} />
          <DragDrop />
          <br />
          <br />
          <div className="space-between">
            <p className="info-message">Maximum file size: {inMB(MAX_FILE_SIZE)} MB</p>
          </div>
          <br />
          {isSuccess ? (
            <p className="success-message">Validation successful</p>
          ) : null}
          <p className="error-message">{errorMsg}</p>
        </div>
      </div>
    </div>
  );
}

export default FileuploadPicker;
