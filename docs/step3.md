# Step 3. Component 구성하기

## 이론

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

## 실습

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
