import styled from "styled-components";

const StyledOportunityDetail = styled.div`
	@media(min-width:768px){
		width: calc(100% - 381px);
		box-sizing: border-box;
		padding:50px 20px 0;
	}
	@media(min-width:1220px){
		padding:50px 20px 0 0;
	}
	.default-text {
		font-family: 'PT Serif',serif;
		font-size: 16px;
		line-height: 21px;
		color: #727272;
	}
	.page {
		&-title {
			font-family: 'PT Serif',serif;
			font-weight: bold;
			font-size: 22px;
			line-height: 29px;
			color: #242424;
			padding-bottom:10px;
		}
		&-description {
			font-family: 'PT Serif',serif;
			font-size: 16px;
			line-height: 21px;
			color: #727272;
			text-align:left;
		}
	}
	.sale {
		&-status {
			padding-top:50px;
		}
		&-number {
			display:block;
			font-family: 'PT Serif',serif;
			font-weight: bold;
			font-size: 35px;
			line-height: 46px;
			color: #39B8FF;
			text-align:right;
			margin-top: -25px;
		}
		&-group {
			display:flex;
			justify-content:space-between;
		}
		&-list {
			@media(min-width:1024px){
				display:flex;
			}
		}
		&-item {
			font-family: 'PT Serif',serif;
			font-size: 14px;
			line-height: 19px;
			color: #727272;
			@media(min-width:1024px){
				padding-left:20px;
			}
			@media(min-width:1100px){
				padding-left:37px;
			}
			&:before {
				content:'';
				display:inline-block;
				width:12px;
				height:12px;
				background-color:#c4c4c4;
				margin-right:10px;
			}
			&:first-child{
				@media(min-width:768px){
					padding-left:0;
				}
				&:before {
					background-color:#39B8FF;
				}
			}
			&:nth-child(2){
				&:before {
					background-color:#2B70A8;
				}
			}
		}
		&d {
			font-family: 'PT Serif',serif;
			font-size: 14px;
			line-height: 19px;
			text-align: right;
			color: #242424;
		}
		&-detail {
			display:flex;
			justify-content: space-between;
			flex-direction: column-reverse;
			padding-top:50px;
			@media(min-width:1150px){
				flex-direction: row;
			}
			&__infos {
				max-width:180px;
				&-container {
					position:relative;
					&:hover {
						.sale-detail__tooltip {
							opacity:1;
							visibility:visible;
						}
					}
				}
			}
			&__title {
				font-family: 'PT Serif',serif;
				font-size: 16px;
				line-height: 21px;
				color: #727272;
			}
			&__value {
				display:inline-block;
				font-family: 'PT Serif',serif;
				font-weight: bold;
				font-size: 32px;
				line-height: 42px;
				color: #64B514;
				border-bottom:5px solid #f2f2f2;
				padding:10px 5px 13px 0;
				margin-bottom:20px;
			}
			&__tooltip {
				opacity:0;
				visibility:hidden;
				position:absolute;
				left:46%;
				top:93px;
				width:100%;
				background-color:#727272;
				padding:13px;
				transition:.3s;
				@media(min-width:500px){
					left:111%;
					top:3px;
				}
				&:before {
					content:'';
					width: 0;
					height: 0;
					border-left: 9px solid transparent;
					border-bottom: 12px solid #727272;
					border-right: 9px solid transparent;
					position:absolute;
					left:18px;
					top:-10px;
					@media(min-width:500px){
						border-top: 9px solid transparent;
						border-right: 12px solid #727272;
						border-bottom: 9px solid transparent;
						position:absolute;
						left:-20px;
						top:25px;
					}
				}
				p {
					font-family: 'PT Serif',serif;
					font-size: 11px;
					line-height: 15px;
					color: #FFF;
				}
			}
			&__description {
				font-family: 'PT Serif',serif;
				font-size: 13px;
				line-height: 17px;
				color: #727272;
				padding-right:20px;
			}
			&__numbers {
				display:flex;
				flex-direction: column;
				@media(min-width:500px){
					flex-direction: row;
				}
				@media(min-width:768px){
					flex-direction: column;
				}
				@media(min-width:1024px){
					flex-direction: row;
				}
				&-col {
					@media(min-width:500px){
						padding:0 40px 0 0;
					}
					@media(min-width:768px){
						padding:0;
					}
					@media(min-width:1024px){
						padding:0 40px 0 0;
					}
					@media(min-width:1150px){
						padding:0 25px;
					}
				}
				&-values {
					display:block;
					font-family: 'PT Serif',serif;
					font-size: 16px;
					line-height: 21px;
					color: #727272;
					padding-bottom:45px;
					strong {
						display:block;
						font-size: 22px;
						font-weight: bold;
						line-height: 29px;
						color: #242424;
						padding-top:3px;
					}
				}
			}
		}
	}
	.range {
		&-group {
			position:relative;
			margin-top:15px;
		}
		&-item {
			position:absolute;
			top:0;
			left:0;
			width:100%;
			display:block;
			height:10px;
			border-radius:10px;
			background-color:#c4c4c4;
			&:first-child {
				background-color:#39B8FF;
				z-index:2;
			}
			&:nth-child(2) {
				background-color:#2B70A8;
				z-index:1;
			}
		}
	}

	.invest-detail {
		padding-top:75px;
		.page-title {
			padding-bottom:30px;
		}
		&__video {
			position:relative;
			height:0;
			padding-top:56.25%;
			margin-bottom:40px;
			iframe {
				position:absolute;
				top:0;
				left:0;
				width:100%;
				height:100%;
			}
		}
	}
	.images-grid {
		display:flex;
		justify-content:space-between;
		width: 100%;
    	margin: 40px 0 80px;
		flex-wrap: wrap;
		&__item {
			width: calc((100% / 2) - 5px);
			aspect-ratio: 1;
			cursor: zoom-in;
			margin-bottom:10px;
			@media(min-width:500px){
				width: calc((100% / 4) - 20px);
				margin-bottom:0;
			}
			@media(min-width:768px){
				width: calc((100% / 2) - 5px);
				margin-bottom:10px;
			}@media(min-width:1024px){
				width: calc((100% / 4) - 20px);
				margin-bottom:0;
			}
			img {
				display:block;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.emphasis {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9999;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0,0,0,.73);
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: zoom-out;
			img {
				width: 80%;
				height: auto;
				cursor: default;
			}
		}
	}
	.invest-address {
		@media(min-width:500px){
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		}
		@media(min-width:768px){
			display: block;
		}
		@media(min-width:1024px){
			display: flex;
		}
		&__info {
			@media(min-width:500px){
				width:50%;
				padding-right: 30px;
			}
			@media(min-width:768px){
				width:100%;
				padding-right:0;
			}
			@media(min-width:1024px){
				width:50%;
				padding-right: 30px;
			}
		}
		&__map {
			margin-top:25px;
			@media(min-width:500px){
				width:50%;
				margin-top:0;
			}
			@media(min-width:768px){
				width:100%;
				margin-top:25px;
			}
			@media(min-width:1024px){
				width:50%;
				margin-top:0;
			}
			iframe {
				display:block;
				width:100%;
			}
		}
	}
	.invest-faq {
		padding:90px 0;
		&__item {
			font-family: 'PT Serif',serif;
			font-size: 16px;
			line-height: 21px;
			color: #727272;
			padding-bottom:30px;
			strong {
				display:block;
				font-weight: bold;
				color: #242424;
				padding-bottom:5px;
			}
		}
	}
	.sidebar-mobile {
		@media(min-width:768px){
			display:none;
		}
		.sidebar {
			display:block;
		}
	}
`;

export { StyledOportunityDetail };