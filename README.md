# Balance Lives

발란스리브즈(BALANCELIVES)의 앱·게임 개발 스튜디오 웹사이트.

- 도메인: https://balancelives.site
- 문의: contact@balancelives.site
- 대표 전화: 010-3116-3507 / +82-10-3116-3507
- 주소: 서울특별시 송파구 송파대로 111 (05837)
- 영문 주소: 111 Songpa-daero, Songpa-gu, Seoul, KR 05837

순수 HTML/CSS/JS이며 설치나 빌드가 필요 없습니다. GitHub Pages가 main 브랜치의 루트(/)를 게시합니다. CNAME 파일은 유지해야 합니다.

## 파일 구성

- index.html: 국문 스튜디오 소개, 영문 About, 개발 중인 게임 및 연락처
- assets/site.css, assets/main.js: 스타일 및 메뉴·이메일 복사 기능
- assets/*.png: 기존 로고 기반 아이콘과 1200×630 공유 이미지
- privacy/index.html, terms/index.html: 웹사이트 개인정보처리방침과 이용약관 (국문/영문)
- robots.txt, sitemap.xml, 404.html: 검색 안내 및 오류 페이지

## 게임 정보 업데이트

두 게임의 출시 시기는 아직 미정입니다. 확정 시 각 카드의 release-info를 수정하세요. 스크린샷은 `assets/games/my-pocket-terrarium-1.png` 또는 `assets/games/janggi-1.png`를 추가하면 자동으로 표시됩니다. HTML 수정 없이 파일만 올리면 됩니다. 세로 9:19.5 (권장 900×1950px) 화면을 사용하며 lazy loading이 적용됩니다. 다른 비율은 원본을 자르지 않고 프레임 안에 맞춥니다. 파일이 없거나 로드에 실패하면 준비 중 안내가 유지됩니다. 화면 내용을 구체적으로 설명하려면 index.html의 해당 `img`에 있는 `alt`를 수정하세요. store-links의 상태 문구를 실제 App Store/Google Play 링크로 교체하세요. 준비되지 않은 링크는 표시하지 않습니다.

## 로컬 확인

루트에서 `python -m http.server 8000`을 실행한 뒤 http://localhost:8000 으로 접속하세요. 하위 경로와 /assets/ 경로 확인을 위해 HTTP 서버를 사용합니다.

정책의 범위는 현재 스튜디오 웹사이트와 문의 처리입니다. 앱별 데이터 처리나 서비스 조건은 각 앱의 실제 기능에 맞추어 출시 전에 작성해야 합니다. 개인정보 처리 방식이 바뀌면 정책과 시행일도 갱신하세요.
