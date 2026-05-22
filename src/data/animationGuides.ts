export type AnimationGuideId =
  | 'animation'
  | 'variants'
  | 'gestures'
  | 'drag'
  | 'drag-constraints'
  | 'motion-values'
  | 'scroll'
  | 'path'
  | 'modal'
  | 'slider'
  | 'animate-shared-layout'
  | 'animate-shared-modal';

export interface AnimationGuide {
  id: AnimationGuideId;
  title: string;
  category: 'Basic' | 'Interaction' | 'Layout' | 'SVG' | 'UI Pattern';
  level: '입문' | '중급';
  description: string;
  point: string;
  interaction: string;
}

export const animationGuides: AnimationGuide[] = [
  {
    id: 'animation',
    title: 'Animation',
    category: 'Basic',
    level: '입문',
    description: 'initial, animate, transition을 이용해 기본 모션을 만드는 예제입니다.',
    point: 'Framer Motion의 가장 기본 흐름을 확인할 수 있습니다.',
    interaction: '화면 진입 시 박스가 회전하며 나타납니다.',
  },
  {
    id: 'variants',
    title: 'Variants',
    category: 'Basic',
    level: '입문',
    description: '부모와 자식 요소의 variants를 연결해 순차 애니메이션을 적용합니다.',
    point: 'staggerChildren, delayChildren 구조를 보기 좋게 확인할 수 있습니다.',
    interaction: '네 개의 원이 순서대로 나타납니다.',
  },
  {
    id: 'gestures',
    title: 'Gestures',
    category: 'Interaction',
    level: '입문',
    description: 'hover, tap 같은 사용자 제스처에 반응하는 모션입니다.',
    point: 'whileHover와 whileTap을 간단히 비교할 수 있습니다.',
    interaction: '마우스를 올리거나 클릭해보세요.',
  },
  {
    id: 'drag',
    title: 'Drag',
    category: 'Interaction',
    level: '입문',
    description: 'drag 속성으로 요소를 직접 움직이는 예제입니다.',
    point: '드래그 중 모양과 색상이 바뀌는 상태를 확인할 수 있습니다.',
    interaction: '박스를 마우스로 드래그해보세요.',
  },
  {
    id: 'drag-constraints',
    title: 'DragConstraints',
    category: 'Interaction',
    level: '중급',
    description: 'ref로 지정한 부모 영역 안에서만 드래그되도록 제한합니다.',
    point: 'dragConstraints, dragElastic, dragSnapToOrigin 동작을 확인할 수 있습니다.',
    interaction: '분홍색 박스 안에서 흰색 박스를 움직여보세요.',
  },
  {
    id: 'motion-values',
    title: 'MotionValues',
    category: 'Interaction',
    level: '중급',
    description: 'useMotionValue와 useTransform으로 값 변화에 따른 모션을 만듭니다.',
    point: 'x 값에 따라 회전과 배경색이 함께 변합니다.',
    interaction: '좌우로 드래그해보세요.',
  },
  {
    id: 'scroll',
    title: 'Scroll',
    category: 'Interaction',
    level: '중급',
    description: '스크롤 진행률을 motion value로 변환해 요소에 반영합니다.',
    point: 'scrollYProgress와 useTransform의 관계를 확인할 수 있습니다.',
    interaction: '페이지를 아래로 스크롤해보세요.',
  },
  {
    id: 'path',
    title: 'Path',
    category: 'SVG',
    level: '중급',
    description: 'SVG pathLength와 fill 값을 이용한 드로잉 애니메이션입니다.',
    point: 'SVG path 애니메이션의 기본 구조를 확인할 수 있습니다.',
    interaction: 'SVG가 그려진 뒤 채워지는 과정을 확인하세요.',
  },
  {
    id: 'modal',
    title: 'Modal',
    category: 'UI Pattern',
    level: '입문',
    description: 'AnimatePresence를 사용해 모달의 진입/종료 애니메이션을 만듭니다.',
    point: '조건부 렌더링에서 exit 애니메이션을 처리하는 방식을 볼 수 있습니다.',
    interaction: 'Show/Hide 버튼을 눌러보세요.',
  },
  {
    id: 'slider',
    title: 'Slider',
    category: 'UI Pattern',
    level: '중급',
    description: '방향 상태를 custom 값으로 넘겨 슬라이드 전환 모션을 제어합니다.',
    point: 'next/prev 방향에 따라 exit 위치가 달라지는 구조입니다.',
    interaction: 'Prev/Next 버튼을 눌러보세요.',
  },
  {
    id: 'animate-shared-layout',
    title: 'AnimateSharedLayout',
    category: 'Layout',
    level: '중급',
    description: 'layoutId를 공유하는 요소 사이에서 자연스럽게 위치와 크기를 전환합니다.',
    point: '동일 layoutId를 가진 요소의 전환 효과를 확인할 수 있습니다.',
    interaction: '양쪽 박스를 번갈아 클릭해보세요.',
  },
  {
    id: 'animate-shared-modal',
    title: 'AnimateSharedModal',
    category: 'Layout',
    level: '중급',
    description: '카드에서 모달로 확장되는 shared layout 애니메이션입니다.',
    point: '카드-모달 전환과 내부 원 이동을 함께 확인할 수 있습니다.',
    interaction: '카드를 클릭하거나 Switch 버튼을 눌러보세요.',
  },
];

export const categories = ['전체', 'Basic', 'Interaction', 'Layout', 'SVG', 'UI Pattern'] as const;

export const getAnimationGuideById = (id: string | undefined) =>
  animationGuides.find((guide) => guide.id === id);
