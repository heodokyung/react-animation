import { Link } from 'react-router-dom';
import styled from 'styled-components';
const attTitle = [
	{
		pageTitle: 'Animation',
	},
	{
		pageTitle: 'Variants',
	},
	{
		pageTitle: 'Gestures',
		pageDesc: '마우스를 올려보세요!! 박스가 회전합니다😀',
	},
	{
		pageTitle: 'Drag',
		pageDesc: '박스를 마우스로 드래그 해보세요!!!😊',
	},
	{
		pageTitle: 'DragConstraints',
		pageDesc: '범위가 정해진 곳에서만 드래그가 가능합니다.😉',
	},
	{
		pageTitle: 'MotionValues',
		pageDesc: '좌,우로 드래그 해보세요!! 방향에 따라 모션이 달라져요.👍',
	},
	{
		pageTitle: 'Scroll',
	},
	{
		pageTitle: 'Path',
		pageDesc: 'SVG Path 애니메이션입니다.😄',
	},
	{
		pageTitle: 'Modal',
	},
	{
		pageTitle: 'Slider',
	},
	{
		pageTitle: 'AnimateSharedLayout',
	},
	{
		pageTitle: 'AnimateSharedModal',
	},
];

const Wrapper = styled.article`
	width: 1000px;
	margin: 30px auto 0;
`;

const Title = styled.h1`
	color: #fff;
	font-weight: bold;
	font-size: 24px;
`;

const ItmeList = styled.ul`
	margin-top: 30px;
	li + li {
		margin-top: 10px;
	}
`;
const Home = () => {
	return (
		<Wrapper>
			<Title>에니매이션 상세보기 : 클릭하면 상세페이지로 이동합니다.</Title>
			<ItmeList>
				{attTitle.map((item, i) => (
					<li key={item.pageTitle}>
						<Link
							to={`${process.env.PUBLIC_URL}/details/`}
							state={{
								pageTitle: item.pageTitle,
								pageDesc: item.pageDesc,
							}}
						>
							{i + 1} : {item.pageTitle} &rarr;
						</Link>
					</li>
				))}
			</ItmeList>
		</Wrapper>
	);
};

export default Home;
