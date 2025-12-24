import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import { StyledNav } from "./styles";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { Wrapper } from "../Wrapper";
import { NavBarProps } from "./types";

const NavBar = (props: NavBarProps) => {
  const { navigation, login, children, bgColor, height, center } = props;

  return (
    <StyledNav bgColor={bgColor} height={height} className="navbar">
      <Wrapper horizontal justify={center ? "center" : "space-between"}>
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="Brix Logo"
              width={116}
              height={30}
              layout="fixed"
            />
          </a>
        </Link>
        <input
          type="checkbox"
          className="openSidebarMenu"
          id="openSidebarMenu"
        />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>
        <ul className={`buttons-nav${!navigation ? " hidden" : ""}`}>
          <li>
            <Link href="/quem-somos">
              <a>Quem somos</a>
            </Link>
          </li>
          <li>
            <Link href="/como-funciona">
              <a>Como funciona</a>
            </Link>
          </li>
          <li>
            <Link href="/perguntas-frequentes">
              <a>Perguntas frequentes</a>
            </Link>
          </li>
          {/* <li>
						<Link href="/conteudos">
							<a>Conteúdos</a>
						</Link>
					</li> */}
          <li className="social-media">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <FaFacebookF size={20} color="#DFB47A" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <AiFillInstagram size={20} color="#DFB47A" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaLinkedinIn size={20} color="#DFB47A" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaTwitter size={20} color="#DFB47A" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <Link href="/login">
          <a className={`button-login${!login ? " hidden" : ""}`}>
            Fazer login
          </a>
        </Link>
        {children}
      </Wrapper>
    </StyledNav>
  );
};

export { NavBar };
