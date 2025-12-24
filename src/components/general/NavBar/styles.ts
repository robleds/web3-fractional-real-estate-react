import styled from 'styled-components';

type NavProps = {
	bgColor?: string;
	height?: number;
};

const StyledNav = styled.nav<NavProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	z-index: 8000;
	top: 0;
	width: 100%;
	height: ${props => props.height || 60}px;
	color: white;
	background-color: ${props => props.bgColor || "#020627"};

	button {
		background-color: transparent;
		border: none;
	}

	.buttons-nav {
		display: flex;
		flex-flow: column nowrap;
		position:fixed;
		max-width: 480px;
		width:260px;
		font-size: 13px;
		background-color: ${props => props.bgColor || "#020627"};
		left: 0;
		top: 60px;
		padding-top: 50px;
		padding-bottom: 20px;
		transition:.3s;
		transform: translateX(-100%);
		height: calc(100vh - 60px);
		@media(min-width:1024px){
			flex-flow: row nowrap;
			position:relative;
			top:0;
			justify-content: space-between;
			align-items: center;
			padding:0;
			width: 60%;
			height:auto;
			transform: translateX(0);
		}
		li {
			a {
				display:block;
				padding:13px 0 13px 15px;
				@media(min-width:1024px){
					display:inline;
					padding:0;
				}
			}
		}
	}

	.button-login {
		position: absolute;
		top: 69px;
		left: 75px;
		background-color: ${props => props.bgColor || "#020627"};
		text-align: center;
		line-height: 27px;
		justify-content: center;
		align-items: center;
		width: 120px;
		height: 30px;
		color: white;
		border: 2px solid white;
		border-radius: 4px;
		font-weight: 700;
		font-size: 11px;
		cursor:pointer;
		transform: translateX(-190%);
		transition:.3s;
		@media(min-width:1024px){
			display: flex;
			position:relative;
			top:0;
			left:0;
			border: 1px solid white;
			transform: translateX(0);
		}
		@media(min-width:1200px) {
			margin: 0 0 0 20%;
		}
	}
	.hidden {
		display: none;
	}


	.social-media {
		margin: auto 0 0;
		> ul {
			display: flex;
		}
		@media(min-width:1024px){
			display: none;
		}
		@media(min-width:768px){
			margin:0;
		}
	}




	.sidebarMenuInner{
		margin:0;
		padding:0;
		border-top: 1px solid rgba(255, 255, 255, 0.10);
	}
	input[type="checkbox"]:checked ~ .buttons-nav {
		transform: translateX(0);
	}
	input[type="checkbox"]:checked ~ .button-login {
		transform: translateX(0);
	}
	input[type=checkbox] {
		transition: all 0.3s;
		box-sizing: border-box;
		display: none;
	}
	.sidebarIconToggle {
		transition: all 0.3s;
		box-sizing: border-box;
		cursor: pointer;
		position: absolute;
		z-index: 99;
		height: 30px;
		width: 32px;
		right:10px;
		top:13px;
		background-color: #fff;
    	padding: 7px 6px 4px 6px;
    	border-radius: 4px;
		@media(min-width:1024px){
			display: none;
		}
	}
	.spinner {
		transition: all 0.3s;
		box-sizing: border-box;
		position: absolute;
		height: 3px;
		width: 100%;
		background-color: black;
	}
	.horizontal {
		transition: all 0.3s;
		box-sizing: border-box;
		position: relative;
		float: left;
		margin-top: 3px;
	}
	.diagonal.part-1 {
		position: relative;
		transition: all 0.3s;
		box-sizing: border-box;
		float: left;
	}
	.diagonal.part-2 {
		transition: all 0.3s;
		box-sizing: border-box;
		position: relative;
		float: left;
		margin-top: 3px;
	}
	input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
		transition: all 0.3s;
		box-sizing: border-box;
		opacity: 0;
	}
	input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
		transition: all 0.3s;
		box-sizing: border-box;
		transform: rotate(135deg);
		margin-top: 7px;
	}
	input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
		transition: all 0.3s;
		box-sizing: border-box;
		transform: rotate(-135deg);
		margin-top: -9px;
	}

	@media (min-width: 1024px) {
		.dashboard {
			display: none;
		}
	}
`;

export { StyledNav };