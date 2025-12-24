import type { NextPage } from 'next';
import { NavBar } from '../../components/general/NavBar';
import { Footer } from '../../components/general/Footer';
import { BannerOportunity } from '../../components/oportunidade/bannerOportunidade';
import { OportunityDetail } from '../../components/oportunidade/oportunityDetail';
import { SidebarInveste } from '../../components/oportunidade/sidebarInveste';
import { Wrapper } from "../../components/general/Wrapper";
import { StyledPage } from '../../styles/pages';
import { useRouter } from 'next/router';
import AssetsApi from '../../services/AssetsApi';

const Oportunidade: NextPage = (props: any) => {
	const { assets } = props;
	const router = useRouter();
	const { opid } = router.query;
	const opportunity = assets.find((op: any) => op.recordId === opid);

	return (
		<>
			<NavBar navigation login />

			<StyledPage>
				<BannerOportunity opportunity={opportunity} />
				<div className="page-content-oportunity">
					<Wrapper horizontal align={'flex-start'}>
						<OportunityDetail opportunity={opportunity} />
						<SidebarInveste opportunity={opportunity} />
					</Wrapper>
				</div>
			</StyledPage>

			<Footer />
		</>
	)
}

export async function getStaticPaths() {
  const assets = await AssetsApi.getAssets();

  const paths = assets.map((asset: any) => ({
    params: { opid: asset.recordId },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  const assets = await AssetsApi.getAssets();

  return {
    props: {
      assets,
    },
  }
}

export default Oportunidade;