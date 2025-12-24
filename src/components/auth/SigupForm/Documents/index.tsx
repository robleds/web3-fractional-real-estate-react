/* eslint-disable react-hooks/exhaustive-deps */
import { StyledDocumentsSignupForm } from "./styles";
import { handleSubmit } from "./utils";
import { SignupFormProps } from "../../types";
import { Steps } from "../Steps";
import { Button } from "../../../general/Button";
import { MutableRefObject, useEffect, useState } from "react";
import { DocInput } from "./DocInput";
import { AccInput } from "./AccInput";
import { BankRefInput } from "./BankRefInput";
import V1Api from "../../../../services/V1Api";

const DocumentsSignupForm = (props: SignupFormProps) => {
  const { setStep, children } = props;
  const [mainDocument, setMainDocument] = useState();
  const [residence, setResidence] = useState();
  const [maritalStatus, setMaritalStatus] = useState();
  const refs = [mainDocument, residence, maritalStatus];
  const [bank, setBank] = useState("");
  const [type, setType] = useState("Conta Corrente");
  const [account, setAccount] = useState("");
  const [agency, setAgency] = useState("");

  useEffect(() => {
    const getBank = async () => {
      const bankInfo = (await V1Api.getUserData())?.user?.bankAccountInfo;
      if(bankInfo) {
        const { bank, branch, account, type } = bankInfo;
        setBank(bank);
        setType(type);
        setAgency(branch);
        setAccount(account);
      }
    };

    getBank();
  }, []);

  const handleDocumentUpload = (
    inputRef: MutableRefObject<HTMLInputElement>
  ) => {
    const docs = refs.map((ref: any) => ref?.current?.value);

    if (docs.includes(inputRef.current.value)) {
      alert("Você não pode enviar o mesmo documento mais de uma vez!");
      return false;
    }

    return true;
  };

  return (
    <StyledDocumentsSignupForm>
      {children}
      <form onSubmit={(event) => handleSubmit(event, refs, setStep, bank, type, account, agency)}>
        <h1 className="bold">Envio de documentos</h1>

        <DocInput
          handleDocumentUpload={handleDocumentUpload}
          title="RG ou CNH"
          setRef={setMainDocument}
          ref={mainDocument}
          name="main-document"
        >
          <span>Tire uma foto frente e verso</span>
          <span>do seu documento de identidade ou CNH.</span>
          <span>A imagem precisa estar legível.</span>
        </DocInput>

        <DocInput
          handleDocumentUpload={handleDocumentUpload}
          title="Comprovante de residência"
          setRef={setResidence}
          ref={residence}
          name="residence"
        >
          <span>Tire uma foto do seu</span>
          <span>comprovante de residência.</span>
          <span>A imagem precisa estar legível.</span>
        </DocInput>

        <DocInput
          handleDocumentUpload={handleDocumentUpload}
          title="Comprovante de estado civil"
          setRef={setMaritalStatus}
          ref={maritalStatus}
          name="marital-status"
        >
          <span>Tire uma foto do seu</span>
          <span>comprovante de estado civil.</span>
          <span>A imagem precisa estar legível.</span>
        </DocInput>

        <AccInput
          bank={bank}
          setBank={setBank}
          type={type}
          setType={setType}
          account={account}
          setAccount={setAccount}
          agency={agency}
          setAgency={setAgency}
          title="Conta para recebimento"
        >
          <span>
            A conta do cadastro deverá ser a mesma do titular informado acima.
          </span>
        </AccInput>

        <BankRefInput title="Referências bancárias">
          <span>Referências bancárias</span>
        </BankRefInput>

        <div className="buttons">
          <button
            className="dolater bold"
            type="button"
            onClick={() => setStep(3)}
          >
            Fazer depois
          </button>
          <Button type="submit" className="submit" height={65}>
            Avançar
          </Button>
        </div>
      </form>
    </StyledDocumentsSignupForm>
  );
};

export { DocumentsSignupForm };
