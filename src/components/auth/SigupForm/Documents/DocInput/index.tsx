import { BsQuestionCircle, BsCheckCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { DocInputProps } from "../types";
import { StyledDocInput } from "./styles";
import { MdOutlineDeleteOutline, MdOutlineError } from "react-icons/md";
import {
  MouseEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { uploadFile } from "../utils";
import V1Api from "../../../../../services/V1Api";

const DocInput = (props: DocInputProps) => {
  const { title, name, ref, setRef, children, handleDocumentUpload } = props;
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(true);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const categories = {
    'main-document': 'photoId',
    'residence': 'proofOfResidence',
    'marital-status': 'maritalStatus',
  } as any;

  useEffect(() => {
    const getDoc = async () => {
      const docs = (await V1Api.getUserDocs()).docs;
      const doc = docs.find((doc: any) => doc.category.includes(categories[name]));
      const docName = doc ? `${categories[name]}.pdf` : "";
      console.log(docs);

      setFileName(docName);
    };

    getDoc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const input = inputRef.current?.files;
    input?.length && setFileName(input[0].name || "" as any);
  }, [inputRef.current?.files]);

  const handleDeleteFile = (event: MouseEvent) => {
    event.stopPropagation();
    inputRef.current.value = "";
    setFileName("");
    setRef(undefined);
  };

  const handleChange = async () => {
    if(handleDocumentUpload(inputRef)) {
      const files = inputRef?.current?.files as any;
      const file =  files[0] || undefined;
      const validity = await uploadFile(file, categories[name]);
      validity ? setValid(true) : setValid(false);
      return setRef(inputRef);
    }

    inputRef.current.value = "";
  };

  return (
    <StyledDocInput onClick={() => setOpen(!open)} open={open}>
      <summary onClick={(e) => e.preventDefault()}>
        <div>
          <h3>{title}</h3>
          <BsQuestionCircle className="question" size={15} color="#39B8FF" />
        </div>
        <div>
          <label
            htmlFor={name}
            className={`bold${!!fileName ? " disabledLabel" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            Enviar documento
          </label>
          <span className={`indicator${fileName ? " active" : ""}`}>
            {!fileName ? null : (valid ? <BsCheckCircleFill color="#64B514" size={15} /> : <MdOutlineError color="#ED4337" size={15} />)}
          </span>
          <IoIosArrowDown size={16} className={`arrow${open ? " open" : ""}`} />
        </div>
      </summary>
      <div className="content">
        <p>{children}</p>
        {fileName && (
          <div>
            <span>{fileName}</span>
            <MdOutlineDeleteOutline
              size={16}
              color="#EA2A2F"
              onClick={handleDeleteFile}
            />
          </div>
        )}
      </div>
      <input
        type="file"
        id={name}
        ref={inputRef}
        onClick={(e) => e.stopPropagation()}
        onChange={handleChange}
      />
    </StyledDocInput>
  );
};

export { DocInput };
