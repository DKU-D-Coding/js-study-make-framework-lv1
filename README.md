# D-Cording - React 심화 스터디

## 학습 방향

### 1) 야생학습

- 야생 학습은 대부분 협력적이다 (학교 학습은 대부분 개별적이다)
- 야생 학습은 대부분 비순차적이다 (학교 학습은 대부분 공부 순서가 정해져 있다)
- 야생 학습은 대부분 자료에 한정이 없다 (학교 학습은 대부분 교과서, 교재, 시험 범위 등이 정해져 있다)
- 야생 학습은 대부분 명확한 평가가 없다 (학교 학습은 대부분 시험이라는 명확한 평가 기준이 있다)
- 야생 학습은 대부분 정답이 없다 (학교 학습은 무엇이 정답이라고 하는 것이 명확하다)
- 야생 학습은 대부분 목표가 불분명하고 바뀌기도 한다 (학교 학습은 대부분 합격, 자격증 같은 목표가 분명하다)

### 2) 지속 성장

- **학습 자체에 대해** 고민하기
- 기술을 학습하기 이전에 **기술이 왜 필요한지** 고민하기
- 학습할 필요가 있는지 고민하기
- 깊게 학습하기

### 3) 함께 성장 + 페어프로그래밍

- 지식은 어떻게든 슥듭할 수 있다 → 혼자서도 가능하다
- 사회에 나가면 같이 성장해야한다 → 혼자서는 불가능하다
    - 같이 고민하고
    - 같이 공부하고
    - 같이 성장하자
- 같이 성장하기 위한 도구 → 페어프로그래밍 or 페어잡

### 4) 스터디가 끝났을 때

- 스터디 후에 나의 모습을 그려보자

## Step 1. 프레임워크에 대한 이해

### 이론

- [ ]  브라우저, HTTP Protocal, HTML 등의 연관성에 대해 조사하기 (5문장 요약)
- [ ]  DOM(Document Object Model) 조사하기 (3문장 요약)
- [ ]  BOM(Browser Object Model) 조사하기 (3문장 요약)
- [ ]  CSS(Cascading Style Sheet) 조사하기 (3문장 요약)
- [ ]  Javascript 조사하기 (3문장 요약)
- [ ]  ECMAScript 조사하기 (3문장 요약)
- [ ]  Javascript Framework가 등장한 배경에 대해 조사하기 (5문장 요약)
- [ ]  Vue와 React의 장단점에 대해 비교하기 (5가지)

### 실습

- [ ]  Vue로 TodoList 만들기
    - [ ]  Vue CLI로 프로젝트 구성
    - [ ]  TodoList 만들기
        - [ ]  목록
        - [ ]  추가
        - [ ]  수정
        - [ ]  삭제
        - [ ]  토글
- [ ]  React로 TodoList 만들기
    - [ ]  CRA(Create React App)로 프로젝트 구성
    - [ ]  TodoList 만들기
        - [ ]  목록
        - [ ]  추가
        - [ ]  수정
        - [ ]  삭제
        - [ ]  토글

## Step 2. Vanilla Javascript로 무작정 TodoList 만들기

어떻게 만들든 상관 없고 일단 무작정 만들어보기

### 이론

- [ ]  Javascript Array Method에 대해 조사하고 간단한 예제 코드 추가하기
    - [ ]  Array.prototype.map()
    - [ ]  Array.prototype.filter()
    - [ ]  Array.prototype.reduce()
    - [ ]  Array.prototype.forEach()
    - [ ]  Array.prototype.some()
    - [ ]  Array.prototype.every()
    - [ ]  Array.prototype.find()
    - [ ]  Array.prototype.findIndex()
    - [ ]  Array.prototype.includes()
    - [ ]  Array.prototype.push()
    - [ ]  Array.prototype.splice()
    - [ ]  Array.prototype.slice()
    - [ ]  Array.prototype.shift()
    - [ ]  Array.prototype.unshift()
    - [ ]  Array.prototype.concat()
    - [ ]  Array.prototype.join()
    - [ ]  Array.prototype.reverse()
    - [ ]  Array.prototype.sort()
    - [ ]  Array.prototype.flat()
    - [ ]  Array.prototype.flatMap()
    - [ ]  Array.prototype.fill()
    - [ ]  Array.prototype.pop()
    - [ ]  Array.prototype.indexOf()
    - [ ]  Array.prototype.from()
- [ ]  ECMAScript와 Javascript의 차이점에 대해 조사하기 (5문장 요약)
- [ ]  Javascript의 프로토타입에 대해 조사하기 (5문장 요약)
- [ ]  Javascript의 클로저에 대해 조사하기 (5문장 요약)
- [ ]  Javascript의 this에 대해 조사하기 (5문장 요약)
- [ ]  Javascript의 이벤트에 대해 조사하기 (5문장 요약)
    - [ ]  이벤트 위임
    - [ ]  이벤트 버블링
    - [ ]  이벤트 캡처링

### 실습

- [ ]  목록
- [ ]  추가
- [ ]  수정
- [ ]  삭제
- [ ]  토글

## Step 3. Component 구성하기

### 이론

- [ ]  ES5의 Class와 ES6의 Class의 차이점에 대해 조사하기 (5가지)
- [ ]  ES6의 Class만이 가지고 있는 특징과 장점에 대해 조사하기 (3가지)
- [ ]  객체지향 5대원칙에 대해 조사하기 (각각 5문장 요약)
    - [ ]  SRP(Single Responsibility Principle)
    - [ ]  OCP(Open-Closed Principle)
    - [ ]  LSP(Liskov Substitution Principle)
    - [ ]  ISP(Interface Segregation Principle)
    - [ ]  DIP(Dependency Inversion Principle)
- [ ]  다형성, 캡슐화, 추상화, 상속, 인터페이스 등에 대해 조사하기 (각각 5문장 요약)
    - [ ]  다형성
    - [ ]  캡슐화
    - [ ]  추상화
    - [ ]  상속
    - [ ]  인터페이스
- [ ]  MVC Pattern, MVVM Pattern 등에 대해 조사하기 (각각 5문장 요약)
    - [ ]  MVC
    - [ ]  MVVM
- [ ]  ESModule에 대해 조사하기 (5문장 요약)

### 실습

- [ ]  Component Class 만들기
    - [ ]  Vue와 React class를 참고하여 자유롭게 구성해보기
    - [ ]  DOM 사용 최소화화기
        - [ ]  State(혹은 data)가 변할 때 만 렌더링이 되도록 구성

           ```jsx
           const $app = document.querySelector('#app');
           
           let state = {
             items: ['item1', 'item2', 'item3', 'item4']
           }
           
           const render = () => {
             const { items } = state;
             $app.innerHTML = `
               <ul>
                 ${items.map(item => `<li>${item}</li>`).join('')}
               </ul>
               <button id="append">추가</button>
             `;
             document.querySelector('#append').addEventListener('click', () => {
               setState({ items: [ ...items, `item${items.length + 1}` ] })
             })
           }
           
           const setState = (newState) => {
             state = { ...state, ...newState };
             render();
           }
           
           render();
           ```

- [ ]  Browser Module 방식으로 파일을 분리하기
- [ ]  Component를 이용하여 TodoList 리팩토링
    - [ ]  목록
    - [ ]  추가
    - [ ]  수정
    - [ ]  삭제
    - [ ]  토글

## Step4. 옵저버 패턴 학습

### 이론

- [ ]  Observer Pattern에 대해 조사하기 (10문장)
    - [ ]  구독자, 구독, 발행 등의 키워드를 이용하여 표현해보기
- [ ]  Javascript Object API 조사하기
    - [ ]  Object.defineProperty
    - [ ]  Object.defineProperties
- [ ]  Javascript Proxy API 조사하기

### 실습

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
