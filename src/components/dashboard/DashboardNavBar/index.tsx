import { FiBell } from "react-icons/fi";
import { BsGear, BsPerson } from "react-icons/bs";
import { AiFillCaretUp } from "react-icons/ai";
import { NavBar } from "../../general/NavBar";
import { MenuIcons } from "./MenuIcons";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const DashboardNavBar = () => {
  const [showAccMenu, setShowAccMenu] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("@brix/token");
    localStorage.removeItem("@brix/email");
    localStorage.removeItem("@brix/user");
    router.push("/");
  };

  return (
    <NavBar bgColor="#525252" height={65}>
      <ul className={`buttons-nav dashboard`}>
        <li>
          <a
            onClick={() => {
              localStorage.setItem("@brix/step", "0");
              router.push("/cadastro");
            }}
          >
            Meus dados
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              localStorage.setItem("@brix/step", "2");
              router.push("/cadastro");
            }}
          >
            Meus documentos
          </a>
        </li>
        <li>
          <a onClick={() => router.push("/alterar-senha")}>
            Alterar senha
          </a>
        </li>
        {/* <li>
						<Link href="/conteudos">
							<a>Conteúdos</a>
						</Link>
					</li> */}
      </ul>
      <a className={`button-login dashboard`} onClick={handleLogout}>
        Sair
      </a>
      <MenuIcons>
        <button>
          <FiBell size={20} color="white" />
        </button>
        <button>
          <BsGear size={20} color="white" />
        </button>
        <button>
          <BsPerson
            onClick={() => setShowAccMenu(!showAccMenu)}
            size={20}
            color="white"
          />
        </button>
        <div className={`acc-menu${showAccMenu ? " show" : ""}`}>
          <AiFillCaretUp color="#F2F2F2" size={20} />
          <button
            onClick={() => {
              localStorage.setItem("@brix/step", "0");
              router.push("/cadastro");
            }}
          >
            Meus dados
          </button>

          <button
            onClick={() => {
              localStorage.setItem("@brix/step", "2");
              router.push("/cadastro");
            }}
          >
            Meus documentos
          </button>

          <button onClick={() => router.push("/alterar-senha")}>
            Alterar senha
          </button>

          <button onClick={handleLogout}>Sair</button>
        </div>
      </MenuIcons>
    </NavBar>
  );
};

export { DashboardNavBar };
