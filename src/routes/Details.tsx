import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Animation from '../components/Animation';
import Variants from '../components/Variants';
import Gestures from '../components/Gestures';
import Drag from '../components/Drag';
import DragConstraints from '../components/DragConstraints';
import MotionValues from '../components/MotionValues';
import Scroll from '../components/Scroll';
import Path from '../components/Path';
import Modal from '../components/Modal';
import Slider from '../components/Slider';
import AnimateSharedLayout from '../components/AnimateSharedLayout';
import AnimateSharedModal from '../components/AnimateSharedModal';

interface IState {
	pageTitle: string;
	pageDesc?: string;
}

const Wrapper = styled.article`
	width: 1000px;
	margin: 0px auto;
	box-sizing: border-box;
	height: 100vh;
	overflow: hidden;
`;
const Content = styled.article`
	width: 1000px;
	height: 89vh;
	margin: 30px auto 0;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
`;
const Title = styled.h1`
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: bold;
	font-size: 32px;
	border-bottom: 2px solid #fff;
	margin-bottom: 20px;
	height: 9vh;
	box-sizing: border-box;
	a {
		display: inline-block;
		width: auto;
		padding: 10px 20px;
		background-color: #fff;
		border-radius: 4px;
		color: #222;
		text-align: center;
		height: 32px;
		line-height: 32px;
		font-size: 18px;
	}
`;

const Desc = styled.p`
	color: #fff;
	font-size: 16px;
`;

const Details = () => {
	const location = useLocation();
	const state = location.state as IState;
	const { pageTitle, pageDesc } = state;

	return (
		<Wrapper>
			<Title>
				{pageTitle}
				<Link to={process.env.PUBLIC_URL}>목록</Link>
			</Title>
			<Desc>{pageDesc}</Desc>
			<Content>
				{pageTitle === 'Animation' && <Animation />}
				{pageTitle === 'Variants' && <Variants />}
				{pageTitle === 'Gestures' && <Gestures />}
				{pageTitle === 'Drag' && <Drag />}
				{pageTitle === 'DragConstraints' && <DragConstraints />}
				{pageTitle === 'MotionValues' && <MotionValues />}
				{pageTitle === 'Scroll' && <Scroll />}
				{pageTitle === 'Path' && <Path />}
				{pageTitle === 'Modal' && <Modal />}
				{pageTitle === 'Slider' && <Slider />}
				{pageTitle === 'AnimateSharedModal' && <AnimateSharedModal />}
				{pageTitle === 'AnimateSharedLayout' && <AnimateSharedLayout />}
			</Content>
		</Wrapper>
	);
};

export default Details;
