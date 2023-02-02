# Step 6. Router 직접 만들기

## 이론

각각 5문장 요약

- [ ] History API
- [ ] Hash bang

## 실습

### 필수 요구사항

- [ ] History API를 이용하여 Router를 구현하기

  ```tsx
  const router = new HistoryRouter();

  router.push("/posts?page=1");

  const { path, queryString } = router;

  console.log(path); // '/posts'
  console.log(queryString); // { page: "1" }
  ```

- [ ] Hash bang을 이용하여 Router를 구현하기

  ```tsx
  const router = new HashBangRouter();

  // /#!/posts?page=1
  router.push("/posts?page=1");

  const { path, queryString } = router;

  console.log(path); // '/posts'
  console.log(queryString); // { page: "1" }
  ```

- [ ] History API와 Hash Bang을 둘 다 사용 가능한 Router 구현하기

  ```tsx
  const router1 = new Router();
  const router2 = new Router({ history: false }); // hash bang 사용

  router1.push("/posts?page=1");
  router2.push("/posts?page=1"); // 주소: /#!/posts?page=1
  ```

- [ ] baseUrl

  ```tsx
  const router = new Router({
    baseUrl: "/base",
  });

  router.push("/test"); // 주소: /base/test
  ```

- [ ] observe

  ```tsx
  const router = new Router();
  router.observe(() => console.log("페이지 주소가 변경되었습니다."));

  router.push("/test1");
  router.push("/test2");
  ```

- [ ] push interface 다양화

  ```tsx
  const router = new Router();

  router.push("/test?key=value");
  router.push({ path: "/test", queryString: { key: "value" } });
  router.push({ path: "/test2" });

  // 주소: /test2?key2=value2
  router.push({ queryString: { key2: "value2" } });

  //주소: /test2?key2=value2&key3=value3
  router.push({ queryString: { ...router.queryString, key3: "value3" } });
  ```

- [ ] 어플리케이션에 적용

### 선택 요구사항

- [ ] 테스트코드 작성
