
# 📄 1-Page 포트폴리오 웹사이트 기능 명세서

## 1. 공통 및 시스템 요구사항 (Common Specs)

* **반응형 웹 (Responsive Web):** Mobile, Tablet, PC 해상도 대응 (권장 Breakpoint: `768px`, `1024px`).
* **성능 최적화 (Performance):**
* 페이지 진입 시 초기 로딩 속도 개선을 위해 Hero 섹션 외의 모든 이미지는 **Lazy Loading** 처리.
* 스크롤 이벤트에는 반드시 `throttle` 또는 `Intersection Observer API`를 적용하여 렌더링 성능 저하(Jank) 방지.


* **애니메이션 (Animation):** 스크롤 진입 시 요소가 나타나는 애니메이션(Fade-up 등)은 CSS `transform`과 `opacity`만 사용하여 하드웨어 가속을 유도.

## 2. 화면별 기능 명세 (Section Details)

### 2.1. Header & GNB (Global Navigation Bar)

* **기본 UI:** 상단 고정(Sticky). 초기 로딩 시 투명 배경, 스크롤 다운 시 배경색 추가 및 하단 그림자(Drop-shadow) 적용.
* **Smooth Scroll:** 메뉴 클릭 시 해당 섹션으로 부드럽게 스크롤 이동 (`scroll-behavior: smooth` 또는 JS 활용).
* **Scroll Spy:** 사용자의 현재 스크롤 위치를 계산하여 GNB 메뉴의 해당 항목에 활성화(Active) 스타일 부여.
* **모바일 대응 (Edge Case):** 해상도 `768px` 이하에서는 햄버거 메뉴로 전환. 햄버거 메뉴 열림 상태에서 뒤의 배경 스크롤을 차단(Body Lock).

### 2.2. Hero Section (Intro)

* **기본 UI:** 화면에 꽉 차는 풀스크린 레이아웃 (`height: 100vh`).
* **타이포그래피 효과:** 메인 카피는 타이핑 효과(Typing effect) 또는 텍스트가 순차적으로 떠오르는 텍스트 리빌(Text Reveal) 애니메이션 적용.
* **CTA(Call to Action) 버튼:** '프로젝트 보기' 또는 '이력서 다운로드' 버튼 배치. 프로젝트 보기 클릭 시 Projects 섹션으로 이동.

### 2.3. About Me Section

* **기본 UI:** 좌측 프로필 이미지, 우측 소개 글 및 주요 연혁(Timeline) 배치 (모바일에서는 상하 배치).
* **경력 타임라인:** 스크롤 시 연도별 경력 사항이 좌/우 또는 하단에서 순차적으로 등장.

### 2.4. Skills Section

* **기본 UI:** 기술 스택 아이콘 및 숙련도(Progress Bar 또는 방사형 차트) 그리드 배치.
* **인터랙션:** 아이콘에 마우스 호버(Hover) 시 본래 브랜드 컬러로 전환되거나, 간단한 툴팁(Tooltip)으로 기술 숙련도 설명 표시.

### 2.5. Projects Section (Portfolio Core)

* **기본 UI:** 썸네일 기반의 그리드(Grid) 또는 메이슨리(Masonry) 레이아웃.
* **카테고리 필터링:** 전체 / 웹 / 모바일 / 기획 등 탭 클릭 시 리스트가 애니메이션과 함께 정렬(재배치)됨.
* **상세 모달 (Modal 팝업):**
* 썸네일 클릭 시 상세 페이지로 이동하지 않고 모달 팝업 오픈.
* **포함 요소:** 프로젝트 다중 이미지 슬라이더, 설명, 사용 기술, 배포 링크(URL) 및 GitHub 링크.
* **예외 처리 (Edge Case):** 모달 팝업이 띄워졌을 때 백그라운드 스크롤 방지. `ESC` 키보드 입력 시 또는 모달 외부 영역(Dimmed 영역) 클릭 시 모달 닫기 기능 필수 구현.



### 2.6. Contact & Footer

* **기본 UI:** 이메일, 전화번호, 소셜 미디어(LinkedIn, GitHub 등) 링크 아이콘.
* **클립보드 복사 기능:** 이메일 주소 클릭 시 클립보드에 자동 복사. 복사 완료 시 화면 하단에 2~3초간 "복사되었습니다"라는 토스트(Toast) 알림 제공.
* **문의 폼 (선택):** 백엔드 서버가 없는 경우 EmailJS 또는 Formspree API를 활용하여 정적 페이지에서도 이메일 발송이 가능하도록 연동.

---

**💡 시니어 기획자의 코멘트:**
해당 명세는 가장 표준적이면서도 실무에서 확장하기 좋은 구조로 작성되었습니다. 특히 포트폴리오 사이트에서는 이미지 최적화(WebP 포맷 사용 및 Lazy Loading)와 모달 창에서의 예외 처리(키보드 접근성 및 스크롤 방지)가 퀄리티를 결정짓습니다.

개발 시 이 명세를 바탕으로 컴포넌트 단위(예: Header, Hero, Section Title, Card, Modal)로 분리하여 작업하시면 향후 유지보수(React, Vue 등으로의 마이그레이션 포함)가 훨씬 용이할 것입니다. 추가로 세부 기획안(Wireframe)이나 디자인 시안이 필요하시면 말씀해 주세요.