# Step 7. 패키지로 구성하기

## 이론

- [ ] monorepo에 대해 정리하기 (각각 5문장 요약)
   - [ ] lerna
   - [ ] yarn workspace
   - [ ] npm workspace
   - [ ] pnpm
   - [ ] nx
   - [ ] Turborepo
- [ ] bundler에 대해 정리하기 (각각 5문장 요약)
   - [ ] vite
   - [ ] rollup
   - [ ] parcel
   - [ ] webpack

## 실습

### 필수 요구사항

- [ ] 모노레포로 프로젝트를 수정한다.
- [ ] 핵심적인 개념을 core package로 분리한다.
- [ ] app package에서 core package를 불러와서 사용하는 방식으로 리팩토링을 진행한다.

### 선택 요구사항

- [ ] core의 각각의 코어 함수에는 테스트 코드를 추가하여 관리한다.
   - 가능하다면, 커버리지 100% 달성하기
- [ ] 패키지를 npm registry에 배포하기
   - [ ] 일단 배포하기
   - [ ] github actions로 배포 자동화하기
      - commit 로그를 보고 배포하는 등
   - [ ] 배포한 패키지를 app 패키지에 가져와서 사용하기
- [ ] cli 만들고 배포하기
   - [ ] cli 만들기
   - [ ] cli 배포하기
   - [ ] cli로 프로젝트 구성해보기

   ```bash
   # 이러한 흐름으로 진행할 수 있게 cli 만들고 배포하기
   $ npm install -g junil-spa-framework
   $ junil-spa-framework init sample-app
   $ cd sample-app
   $ npm install
   $ npm run dev
   ```
   

