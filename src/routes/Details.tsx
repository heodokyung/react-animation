import { Link, Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import AnimateSharedLayout from '../components/AnimateSharedLayout';
import AnimateSharedModal from '../components/AnimateSharedModal';
import Animation from '../components/Animation';
import Drag from '../components/Drag';
import DragConstraints from '../components/DragConstraints';
import Gestures from '../components/Gestures';
import Modal from '../components/Modal';
import MotionValues from '../components/MotionValues';
import Path from '../components/Path';
import Scroll from '../components/Scroll';
import Slider from '../components/Slider';
import Variants from '../components/Variants';
import { AnimationGuideId, getAnimationGuideById } from '../data/animationGuides';

const demoMap: Record<AnimationGuideId, JSX.Element> = {
  animation: <Animation />,
  variants: <Variants />,
  gestures: <Gestures />,
  drag: <Drag />,
  'drag-constraints': <DragConstraints />,
  'motion-values': <MotionValues />,
  scroll: <Scroll />,
  path: <Path />,
  modal: <Modal />,
  slider: <Slider />,
  'animate-shared-layout': <AnimateSharedLayout />,
  'animate-shared-modal': <AnimateSharedModal />,
};

const Page = styled.main`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 40px 0 56px;

  @media (max-width: 640px) {
    width: min(100% - 28px, 1120px);
    padding: 28px 0 40px;
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 14px;
  border: 1px solid #cfd6dd;
  border-radius: 12px;
  background: #ffffff;
  color: #334155;
  font-size: 14px;
  font-weight: 900;
  transition: background 0.18s ease, border-color 0.18s ease;

  &:hover {
    border-color: #bfdbfe;
    background: #eff6ff;
  }
`;

const TitleGroup = styled.div`
  min-width: 0;
`;

const Eyebrow = styled.p`
  margin: 0 0 8px;
  color: #64748b;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  color: #111827;
  font-size: clamp(30px, 5vw, 48px);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1.08;
`;

const Description = styled.p`
  max-width: 760px;
  margin: 14px 0 0;
  color: #52606d;
  font-size: 16px;
  line-height: 1.72;
`;

const Layout = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 18px;
  margin-top: 22px;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

const DemoPanel = styled.article`
  min-height: 560px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 34px;
  border: 1px solid #dfe3e8;
  border-radius: 24px;
  background: #2f343b;
  box-shadow: 0 12px 28px rgba(31, 41, 51, 0.08);

  @media (max-width: 640px) {
    min-height: 430px;
    padding: 22px;
  }
`;

const InfoPanel = styled.aside`
  align-self: start;
  padding: 24px;
  border: 1px solid #dfe3e8;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(31, 41, 51, 0.06);
`;

const InfoTitle = styled.h2`
  margin: 0 0 14px;
  color: #111827;
  font-size: 20px;
  font-weight: 900;
`;

const InfoList = styled.dl`
  display: grid;
  gap: 16px;
  margin: 0;

  dt {
    margin-bottom: 4px;
    color: #64748b;
    font-size: 13px;
    font-weight: 900;
  }

  dd {
    margin: 0;
    color: #334155;
    font-size: 15px;
    line-height: 1.65;
  }
`;

const BadgeGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #eef2ff;
  color: #3730a3;
  font-size: 12px;
  font-weight: 900;
`;

const Details = () => {
  const { id } = useParams();
  const guide = getAnimationGuideById(id);

  if (!guide) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page>
      <TopBar>
        <TitleGroup>
          <Eyebrow>{guide.category} · {guide.level}</Eyebrow>
          <Title>{guide.title}</Title>
          <Description>{guide.description}</Description>
        </TitleGroup>
        <BackLink to="/">← 목록으로</BackLink>
      </TopBar>

      <Layout>
        <DemoPanel aria-label={`${guide.title} 애니메이션 예제`}>
          {demoMap[guide.id]}
        </DemoPanel>

        <InfoPanel>
          <InfoTitle>예제 포인트</InfoTitle>
          <InfoList>
            <div>
              <dt>핵심 개념</dt>
              <dd>{guide.point}</dd>
            </div>
            <div>
              <dt>직접 해보기</dt>
              <dd>{guide.interaction}</dd>
            </div>
          </InfoList>
          <BadgeGroup>
            <Badge>{guide.category}</Badge>
            <Badge>{guide.level}</Badge>
            <Badge>framer-motion</Badge>
          </BadgeGroup>
        </InfoPanel>
      </Layout>
    </Page>
  );
};

export default Details;
