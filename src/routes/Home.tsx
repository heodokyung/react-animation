import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { animationGuides, categories } from '../data/animationGuides';

const Page = styled.main`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 56px 0;

  @media (max-width: 640px) {
    width: min(100% - 28px, 1120px);
    padding: 32px 0;
  }
`;

const Hero = styled.section`
  padding: 32px;
  border: 1px solid #dfe3e8;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(31, 41, 51, 0.06);
`;

const Eyebrow = styled.p`
  margin: 0 0 10px;
  color: #64748b;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  color: #111827;
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1.08;
`;

const Description = styled.p`
  max-width: 720px;
  margin: 16px 0 0;
  color: #52606d;
  font-size: 17px;
  line-height: 1.75;
`;

const Summary = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

const SummaryItem = styled.li`
  padding: 8px 12px;
  border: 1px solid #dfe3e8;
  border-radius: 999px;
  background: #f8fafc;
  color: #334155;
  font-size: 13px;
  font-weight: 800;
`;

const Toolbar = styled.section`
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 12px;
  margin: 22px 0;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  min-height: 48px;
  padding: 0 16px;
  border: 1px solid #cfd6dd;
  border-radius: 14px;
  background: #ffffff;
  color: #111827;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }
`;

const CategorySelect = styled.select`
  min-height: 48px;
  padding: 0 14px;
  border: 1px solid #cfd6dd;
  border-radius: 14px;
  background: #ffffff;
  color: #111827;
  outline: none;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  display: flex;
  min-height: 220px;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px;
  border: 1px solid #dfe3e8;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(31, 41, 51, 0.05);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #bfdbfe;
    box-shadow: 0 16px 32px rgba(31, 41, 51, 0.08);
  }
`;

const CardHeader = styled.div``;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 9px;
  border-radius: 999px;
  background: #eef2ff;
  color: #3730a3;
  font-size: 12px;
  font-weight: 800;
`;

const LevelBadge = styled(Badge)`
  background: #f1f5f9;
  color: #475569;
`;

const CardTitle = styled.h2`
  margin: 0;
  color: #111827;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.04em;
`;

const CardDesc = styled.p`
  margin: 12px 0 0;
  color: #52606d;
  font-size: 15px;
  line-height: 1.65;
`;

const CardFooter = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 22px;
  color: #2563eb;
  font-size: 14px;
  font-weight: 900;
`;

const Empty = styled.div`
  padding: 32px;
  border: 1px dashed #cbd5e1;
  border-radius: 18px;
  background: #ffffff;
  color: #64748b;
  text-align: center;
`;

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('전체');

  const filteredGuides = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    return animationGuides.filter((guide) => {
      const matchesCategory = category === '전체' || guide.category === category;
      const matchesKeyword =
        !normalizedKeyword ||
        [guide.title, guide.description, guide.point, guide.interaction]
          .join(' ')
          .toLowerCase()
          .includes(normalizedKeyword);

      return matchesCategory && matchesKeyword;
    });
  }, [category, keyword]);

  return (
    <Page>
      <Hero>
        <Eyebrow>Framer Motion Guide</Eyebrow>
        <Title>React 애니메이션 예제 정리</Title>
        <Description>
          framer-motion의 기본 애니메이션, 드래그, 제스처, 스크롤, SVG, 모달, 슬라이더 예제를
          한눈에 볼 수 있도록 정리한 데모 프로젝트입니다.
        </Description>
        <Summary aria-label="프로젝트 요약">
          <SummaryItem>총 {animationGuides.length}개 예제</SummaryItem>
          <SummaryItem>검색/분류 지원</SummaryItem>
          <SummaryItem>GitHub Pages 배포</SummaryItem>
          <SummaryItem>상세 새로고침 대응</SummaryItem>
        </Summary>
      </Hero>

      <Toolbar aria-label="애니메이션 예제 필터">
        <SearchInput
          type="search"
          value={keyword}
          placeholder="예: drag, modal, scroll"
          aria-label="애니메이션 예제 검색"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <CategorySelect
          value={category}
          aria-label="카테고리 선택"
          onChange={(event) => setCategory(event.target.value as (typeof categories)[number])}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </CategorySelect>
      </Toolbar>

      {filteredGuides.length > 0 ? (
        <Grid>
          {filteredGuides.map((guide, index) => (
            <li key={guide.id}>
              <Card to={`/animation/${guide.id}`}>
                <CardHeader>
                  <Meta>
                    <Badge>{guide.category}</Badge>
                    <LevelBadge>{guide.level}</LevelBadge>
                  </Meta>
                  <CardTitle>
                    {String(index + 1).padStart(2, '0')}. {guide.title}
                  </CardTitle>
                  <CardDesc>{guide.description}</CardDesc>
                </CardHeader>
                <CardFooter>예제 보기 →</CardFooter>
              </Card>
            </li>
          ))}
        </Grid>
      ) : (
        <Empty>검색 조건에 맞는 예제가 없습니다.</Empty>
      )}
    </Page>
  );
};

export default Home;
