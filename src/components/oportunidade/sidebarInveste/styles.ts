import styled from "styled-components";

const StyledSidebarInveste = styled.div`
	width:100%;
	padding:30px 0 0 0;
	@media(min-width:768px){
		padding:60px 20px 0 0;
		width:auto;
	}
	@media(min-width:1220px){
		padding:60px 0 0 0;
	}
  	.sidebar {
		display:none;
		@media(min-width:768px){
			display:block;
			width:381px;
		}
		&-top {
			background-color:#f2f2f2;
		}
		&-bottom {
			margin-top:27px;
			background-color: rgba(248, 145, 6, 0.1);
			border-radius: 8px;
			padding:40px 35px;
			text-align:center;
		}
  	}
	.price-box {
		background-color:#020627;
		border-radius:0 0 84px 0;
		padding:22px 15px;
		@media(min-width:450px){
			padding:22px 35px;
		}
		&__title {
			display:block;
			font-family: 'PT Serif',serif;
			font-size: 16px;
			line-height: 21px;
			color: #FFF;
			&-min {
				display:block;
				font-family: 'PT Serif',serif;
				font-size: 11px;
				line-height: 15px;
				color: #FFF;
				padding-bottom:3px;
			}
		}
		&__number {
			display:block;
			font-family: 'PT Serif',serif;
			font-weight: bold;
			font-size: 28px;
			line-height: 37px;
			color: #F8BC49;
			padding:3px 0 25px 0;
			&-min {
				display:block;
				font-family: 'PT Serif',serif;
				font-weight: bold;
				font-size: 16px;
				line-height: 21px;
				color: #F8BC49;
			}
		}
	}
	.qtd-box {
		padding:40px 15px 35px;
		@media(min-width:450px){
			padding:40px 35px 35px;
		}
		&__title {
			display:block;
			font-family: 'PT Serif',serif;
			font-size: 16px;
			line-height: 21px;
			color: #727272;
			padding-bottom:5px;
		}
		&__counter {
			display:flex;
			justify-content: space-between;
    		align-items: center;
		}
		&__input {
			font-family: 'PT Serif',serif;
			font-weight: bold;
			font-size: 25px;
			line-height: 33px;
			color: #242424;
			width:calc(100% - 118px);
			background-color: #FFF;
			border: 2px solid #39B8FF;
			box-sizing: border-box;
			border-radius: 3px;
			padding:7px 14px;
		}
		&__button {
			position:relative;
			background-color: #39B8FF;
			box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.25);
			border-radius: 3px;
			border:0;
			width:55px;
			height:50px;
			transition:.2s;
			&:before,
			&:after {
				content:'';
				width:2px;
				height:14px;
				background-color:#fff;
				position:absolute;
			}
			&.plus {
				&:before {
					transform:rotate(35deg)translate(-8px,-4px);
				}
				&:after {
					transform:rotate(-35deg)translate(7px,-4px);
				}
			}
			&.minus {
				&:before {
					transform:rotate(-35deg)translate(1px,-9px);
				}
				&:after {
					transform:rotate(35deg)translate(-2px,-8px);
				}
			}
			&:hover {
				opacity:.8;
			}
			&:active {
				transform:scale(1.07);
			}
		}
	}
	.invest-perc {
		display:flex;
		justify-content: space-between;
		align-items: center;
		padding:0 15px 30px;
		@media(min-width:450px){
			padding:0 35px 30px;
		}
		&__text {
			display:block;
			font-family: 'PT Serif',serif;
			font-size: 14px;
			line-height: 19px;
			color: #727272;
		}
		&__value {
			font-family: 'PT Serif',serif;
			font-weight: bold;
			font-size: 18px;
			line-height: 24px;
			color: #2B70A8;
		}
	}
	.invest-total {
		display:flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px dashed #727272;
		padding:22px 0 70px;
		margin:0 15px;
		@media(min-width:450px){
			padding:0 20px 70px;
		}
		&__text {
			font-family: 'PT Serif',serif;
			font-weight: bold;
			font-size: 12px;
			line-height: 16px;
			color: #242424;
		}
		&__value {
			font-family: 'PT Serif',serif;
			font-weight: bold;
			font-size: 20px;
			line-height: 26px;
			color: #39680B;
		}
	}
	.bt-investir {
		display:block;
		width:calc(100% - 81px);
		margin:0 auto;
		padding:20px 0 23px;
		background: #64B514;
		border-radius: 4px;
		font-family: 'PT Serif',serif;
		font-weight: bold;
		font-size: 18px;
		line-height: 24px;
		text-align: center;
		color: #FFF;
		box-shadow: inset 0 -2px 0 #39680B;
		filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
		border:0;
		transition:.2s;
		&:hover {
			opacity:.8;
		}
	}
	.text {
		font-family: 'PT Serif',serif;
		font-size: 12px;
		line-height: 16px;
		text-align: center;
		color: #000;
		padding:27px 38px 60px;
	}
	.specialist-link {
		display:flex;
		justify-content: center;
		align-items: center;
		padding-bottom:46px;
		button {
			font-family: 'PT Serif',serif;
			font-weight: bold;
			font-size: 16px;
			line-height: 21px;
			text-decoration-line: underline;
			color: #242424;
			border:0;
			padding:0 0 0 10px;
		}
	}
	.securit-text {
		img {}
		p {
			font-family: 'PT Serif',serif;
			font-size: 13px;
			line-height: 17px;
			text-align: center;
			color: #727272;
			padding-top:26px;
		}
	}
`;

export { StyledSidebarInveste };