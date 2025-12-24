import { BsQuestionCircle, BsCheckCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { AccInputProps } from "../types";
import { StyledAccInput } from "./styles";
import { useEffect, useState } from "react";
import { banks } from "./data";

const AccInput = (props: AccInputProps) => {
  const {
    title,
    children,
    bank,
    setBank,
    type,
    setType,
    account,
    setAccount,
    agency,
    setAgency,
  } = props;
  // const [banks, setBanks] = useState([] as any);
  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if(!!bank && !!type && !!account && !!agency) return setValid(true);
    return setValid(false);
  }, [bank, account, agency, type]);

  // useEffect(() => {
  //   axios
  //     .get("https://brasilapi.com.br/api/banks/v1")
  //     .then((res) => {
  //       setBanks(res.data);
  //       setBank(res.data[0]);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <StyledAccInput onClick={() => setOpen(!open)} open={open}>
      <summary onClick={(e) => e.preventDefault()}>
        <div>
          <h3>{title}</h3>
          <BsQuestionCircle size={15} color="#39B8FF" />
        </div>
        <div>
          <span className={`indicator${valid ? " active" : ""}`}>
            {valid && <BsCheckCircleFill color="#64B514" size={15} />}
          </span>
          <IoIosArrowDown className={`arrow${open ? " open" : ""}`} />
        </div>
      </summary>
      <div className="content">
        <p>{children}</p>
        <div onClick={(e) => e.stopPropagation()} className="inputs">
          <fieldset className="bank-info">
            <div className="input type-input">
              <label htmlFor="acctype">Tipo:</label>
              <AiFillCaretDown color="#00000099" size={10} />
              <select
                name="acctype"
                id="acctype"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Conta Corrente</option>
                <option>Conta Poupança</option>
                <option>Conta Salário</option>
              </select>
            </div>
            <div className="input">
              <label htmlFor="bank">Banco:</label>
              <AiFillCaretDown color="#00000099" size={10} />
              <select
                name="bank"
                id="bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              >
                {banks.map(
                  (bank: any, idx: any) =>
                    bank.code && (
                      <option key={idx}>
                        {("000" + bank.code).slice(
                          bank.code?.toString().length,
                          bank.code?.toString().length + 3
                        )}{" "}
                        - {bank.name}
                      </option>
                    )
                )}
              </select>
            </div>
          </fieldset>
          <fieldset className="acc-info">
            <div className="input">
              <label htmlFor="agency">Agência</label>
              <input
                id="agency"
                name="agency"
                type="text"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="account">Conta</label>
              <input
                id="account"
                name="account"
                type="text"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
      </div>
    </StyledAccInput>
  );
};

export { AccInput };
