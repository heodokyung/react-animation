import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const overlayVariants: Variants = {
	start: { backgroundColor: 'rgba(0,0,0,0)' },
	end: { backgroundColor: 'rgba(0,0,0,0.6)', transition: { duration: 0.5 } },
	exit: { backgroundColor: 'rgba(0,0,0,0)', transition: { duration: 0.5 } },
	whileHover: { scale: 1.1 },
};
const boxVariants = {
	whileHover: { scale: 1.1 },
};

const Container = styled.div`
	width: 800px;
	text-align: center;
`;
const Wrapper = styled.div`
	background-color: #494949;
	border-radius: 30px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	overflow: hidden;
	display: grid;
	padding: 30px;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
`;

const Box = styled(motion.div)`
	height: 200px;
	background-color: white;
	cursor: pointer;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ModalBox = styled(motion.span)`
	width: 400px;
	height: 200px;
	background-color: red;
	cursor: pointer;
	border-radius: 10px;
`;

const Overlay = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Circle = styled(motion.div)`
	width: 100px;
	height: 100px;
	background-color: #a14646;
	border-radius: 100px;
	cursor: pointer;
`;

const BtnSwitch = styled.button`
	box-sizing: border-box;
	background-color: #fff;
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 10px 20px;
	margin-top: 10px;
`;

const AnimateSharedModal = () => {
	const [boxIndex, setBoxIndex] = useState<number | null>(null);
	const [circleIndex, setCircleIndex] = useState<number>(2);
	const [clickHandle, setClickHandle] = useState<boolean>(false);

	const handleFunc = () => {
		if (clickHandle === false) {
			setClickHandle(true);
			setCircleIndex(3);
		} else {
			setClickHandle(false);
			setCircleIndex(2);
		}
	};

	return (
		<Container>
			<Wrapper>
				{[1, 2, 3, 4].map((index: number) => (
					<Box
						onClick={() => setBoxIndex(index)}
						key={index}
						layoutId={String(index)}
						variants={boxVariants}
						whileHover='whileHover'
					>
						{index === circleIndex && <Circle layoutId='circle'></Circle>}
					</Box>
				))}
				<AnimatePresence>
					{boxIndex && (
						<Overlay
							onClick={() => setBoxIndex(null)}
							variants={overlayVariants}
							initial='start'
							animate='end'
							exit='exit'
						>
							<ModalBox layoutId={String(boxIndex)}></ModalBox>
						</Overlay>
					)}
				</AnimatePresence>
			</Wrapper>
			<BtnSwitch type='button' onClick={handleFunc}>
				Switch
			</BtnSwitch>
		</Container>
	);
};

export default AnimateSharedModal;
