# React Animation Guide

React와 framer-motion으로 만든 애니메이션 예제 정리 프로젝트입니다. 기본 애니메이션, variants, gesture, drag, motion value, scroll, SVG path, modal, slider, shared layout 예제를 한눈에 볼 수 있도록 정리했습니다.

- 배포 URL: https://heodokyung.github.io/react-animation/
- 배포 방식: GitHub Actions + GitHub Pages
- 주요 목적: framer-motion 핵심 기능을 빠르게 확인할 수 있는 포트폴리오/학습용 데모

## 주요 기능

- 애니메이션 예제 카드 목록
- 예제명/설명 기반 검색
- 카테고리 필터
- 상세 페이지별 인터랙션 데모
- GitHub Pages 새로고침 대응을 위한 HashRouter 적용
- GitHub Actions 기반 자동 배포

## 예제 목록

| 구분 | 예제 | 설명 |
| --- | --- | --- |
| Basic | Animation | initial, animate, transition 기본 예제 |
| Basic | Variants | 부모/자식 variants와 staggerChildren 예제 |
| Interaction | Gestures | hover, tap 제스처 예제 |
| Interaction | Drag | drag와 whileDrag 예제 |
| Interaction | DragConstraints | 제한 영역 안에서 드래그하는 예제 |
| Interaction | MotionValues | useMotionValue, useTransform 예제 |
| Interaction | Scroll | scrollYProgress 기반 모션 예제 |
| SVG | Path | SVG pathLength 애니메이션 예제 |
| UI Pattern | Modal | AnimatePresence 기반 모달 예제 |
| UI Pattern | Slider | 방향 전환 슬라이더 예제 |
| Layout | AnimateSharedLayout | layoutId 기반 요소 전환 예제 |
| Layout | AnimateSharedModal | 카드에서 모달로 확장되는 shared layout 예제 |

## 기술 스택

- React 17
- TypeScript
- React Router DOM 6
- styled-components
- styled-reset
- framer-motion
- Create React App
- GitHub Actions
- GitHub Pages

## 프로젝트 구조

```txt
src/
├─ components/             # framer-motion 예제 컴포넌트
├─ data/
│  └─ animationGuides.ts   # 예제 목록/설명/카테고리 데이터
├─ routes/
│  ├─ Home.tsx             # 예제 목록, 검색, 필터
│  └─ Details.tsx          # 예제 상세/데모 실행 화면
├─ App.tsx
├─ GlobalStyle.ts
└─ Router.tsx
```

## 로컬 실행

```bash
npm install
npm start
```

## 타입 검사

```bash
npx tsc --noEmit
```

## 빌드

```bash
npm run build
```

GitHub Pages 배포용 빌드는 아래 명령과 동일합니다.

```bash
npm run build:pages
```

## 배포 방식

이 프로젝트는 `gh-pages` 패키지로 브랜치에 직접 배포하지 않습니다. `main` 브랜치에 push하면 GitHub Actions가 실행되고, `build` 폴더를 GitHub Pages artifact로 업로드한 뒤 배포합니다.

배포 workflow 파일:

```txt
.github/workflows/deploy.yml
```

GitHub 저장소 설정에서 아래 항목을 확인하세요.

```txt
Settings → Pages → Build and deployment → Source: GitHub Actions
```

환경 보호 규칙을 사용하는 경우에는 아래도 확인하세요.

```txt
Settings → Environments → github-pages → Deployment branches and tags → main 허용
```

## 배포 후 확인 포인트

- 메인 화면에서 예제 카드가 보이는지
- 검색과 카테고리 필터가 동작하는지
- 각 예제 카드 클릭 시 상세 페이지로 이동하는지
- 상세 페이지에서 새로고침해도 홈으로 튕기거나 404가 나지 않는지
- 모바일에서 카드 목록이 1열로 자연스럽게 보이는지

## 수정 메모

- 기존 `location.state` 의존 상세 페이지를 제거하고 URL 파라미터 기반 상세 페이지로 변경했습니다.
- GitHub Pages 라우팅 안정성을 위해 `HashRouter`를 적용했습니다.
- 예제 목록 데이터를 `src/data/animationGuides.ts`로 분리해 유지보수성을 높였습니다.
- 홈 화면을 검색/필터 가능한 카드 그리드로 정리했습니다.
