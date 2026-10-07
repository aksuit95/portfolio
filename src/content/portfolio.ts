export const site = {
  title: "최민기 포트폴리오 | Equity Fund Manager",
  description:
    "TMT 섹터 리서치 및 IPO 전문 에쿼티 펀드 매니저 최민기의 포트폴리오.",
  name: "최민기",
  role: "Equity Fund Manager",
} as const;

export const navigation = [
  { href: "#about", label: "소개" },
  { href: "#skills", label: "역량" },
  { href: "#projects", label: "성과" },
  { href: "#contact", label: "연락" },
] as const;

export const hero = {
  title: "시장의 흐름을 읽고 가치를 창출합니다.",
  subtitle:
    "TMT 섹터 리서치 및 IPO 전문 에쿼티 펀드 매니저 최민기입니다.",
  cta: "주요 성과 보기",
} as const;

export const about = {
  name: "최민기",
  role: "Equity Fund Manager",
  summary:
    "기술, 미디어, 통신(TMT) 산업에 대한 깊은 이해를 바탕으로 성공적인 IPO 펀딩과 에쿼티 펀드 운용을 이끌어왔습니다. 데이터 기반의 분석과 인사이트로 최적의 투자 포트폴리오를 구축합니다.",
  timeline: [
    {
      organization: "유진자산운용",
      detail: "주식형 펀드 운용 및 TMT 섹터 리서치",
    },
    {
      organization: "아트만자산운용",
      detail: "IPO 펀드 운용 및 기업 가치 평가",
    },
  ],
} as const;

export const skills = [
  {
    name: "Fund Management",
    detail: "주식형 펀드 운용, 포트폴리오 리밸런싱",
  },
  {
    name: "Research & Analysis",
    detail: "TMT(Tech, Media, Telecom) 섹터 심층 분석, 재무제표 분석",
  },
  {
    name: "IPO Strategy",
    detail: "공모주 펀드 운용, 수요예측 및 밸류에이션 모델링",
  },
  {
    name: "Game Theory (전략)",
    detail: "GTO(Game Theory Optimal) 기반의 확률적 리스크 관리 및 의사결정",
  },
] as const;

export type Project = {
  id: string;
  title: string;
  role: string;
  summary: string;
};

export const projects: readonly Project[] = [
  {
    id: "tmt-ipo",
    title: "성공적인 TMT 섹터 IPO 펀딩 주도",
    role: "메인 운용역",
    summary:
      "주요 테크 기업 IPO 수요예측 참여 및 펀드 편입을 통한 초과 수익 달성.",
  },
  {
    id: "equity-remodel",
    title: "중장기 에쿼티 펀드 포트폴리오 리모델링",
    role: "리서치 및 섹터 애널리스트",
    summary:
      "미디어/통신 산업 트렌드 변화에 맞춘 선제적 포트폴리오 조정으로 벤치마크 대비 우수한 성과 기록.",
  },
];

/**
 * 괄호 안 문구를 실제 값으로 바꾸면 복사와 링크가 그 값을 사용합니다.
 * LinkedIn은 http 또는 https로 시작할 때만 링크로 연결됩니다.
 */
export const contact = {
  email: "(이메일 주소 입력)",
  phone: "(전화번호 입력)",
  linkedin: "(링크드인 URL 입력)",
} as const;

export function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}
