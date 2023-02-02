# Step 4. 옵저버 패턴 학습

## 이론

- [ ] Observer Pattern에 대해 조사하기 (10문장)
  - [ ] 구독자, 구독, 발행 등의 키워드를 이용하여 표현해보기
- [ ] Javascript Object API 조사하기
  - [ ] Object.defineProperty
  - [ ] Object.defineProperties
- [ ] Javascript Proxy API 조사하기

## 실습

### 필수 요구사항

- [ ] observable 구현
- [ ] observe 구현

```jsx
const state = observable({
  a: 1,
  b: 2,
});

observe(() => console.log(`state.a + state.b = ${state.a + state.b}`)); // 3

state.a = 10; // 할당하는 순간 state.a + state.b = 12 출력
state.b = 20; // 할당하는 순간 state.a + state.b = 30 출력
```

https://user-images.githubusercontent.com/18749057/210731971-15a960b2-51b7-48cd-9f59-7e78f8860bde.mov

- [ ] 배치 기능 적용

  ```jsx
  const state = observable({
    a: 1,
    b: 2,
  });

  observe(() => console.log(`state.a + state.b = ${state.a + state.b}`)); // 3

  state.a = 10;
  state.b = 20;
  state.a = 100;
  state.b = 200; // 이 때만 observe에 등록한 함수 실행

  requestAnimationFrame(() => {
    state.b = 300; // 이 때에도 실행되어야 함
  });
  ```

  - [ ] observable의 값이 변경될 때, 마지막으로 변경된 값에 대해서만 observe를 실행하기
  - [ ] requestAnimationFrame의 경우, 내부의 코드가 비동기적으로 1frame 뒤에 실행됨 → 이 때도 observe에 있는 것을 실행

### 선택 요구사항

- [ ] 테스트 도구 조사
  - [ ] jest
  - [ ] vitest
  - [ ] nodejs test runner
  - [ ] cypress
  - [ ] playwrite
  - [ ] puppeteer
- [ ] observable, observe에 대한 단위 테스트 작성
