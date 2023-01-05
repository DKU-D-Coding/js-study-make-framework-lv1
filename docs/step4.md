# Step4. 옵저버 패턴 학습

## 이론

- [ ]  Observer Pattern에 대해 조사하기 (10문장)
    - [ ]  구독자, 구독, 발행 등의 키워드를 이용하여 표현해보기
- [ ]  Javascript Object API 조사하기
    - [ ]  Object.defineProperty
    - [ ]  Object.defineProperties
- [ ]  Javascript Proxy API 조사하기

## 실습

- [ ]  observable 구현
- [ ]  observe 구현

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
