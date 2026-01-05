0. 코드를 물어보면서 기본적인 개념을 확립한다.
    1. 그렇게 기본개념이 어느정도(30프로)정도 쌓이게 한다.
    2. 그리고 

### 1. JS & 객체 지향 핵심 (Class & Object)

**[클래스와 인스턴스: 붕어빵 비유]**

- **클래스 (Class) = 설계도**: 붕어빵 기계.
- **인스턴스 (Instance) = 실체**: 기계에서 찍혀 나온 따끈따끈한 붕어빵.
- **인스턴스 변수 (Instance Variable) = 객체의 변수**:
- 만들어진 붕어빵 안에 들어있는 팥(Value). (객체마다 다름)

- **인스턴스 메서드 (Instance Method) = 객체의 함수**:
- 만들어진 붕어빵이 하는 행동. (예: `붕어빵.식다()`, `붕어빵.먹히다()`)

- **[참고: 메서드의 두 가지 스타일 (자판기 vs 로봇)]**
- **자판기형 (Return 있음)**: 돈을 넣으면 음료수를 뱉어냄. (예: `int add() { return a+b; }`)
- **행동대장형 (Void)**: 시키면 일만 하고 결과물은 안 줌. (영수증 없음)

Java

public class Robot {
    // void: 난 일만 하고 아무것도 안 돌려줄 거야.
    public void clean() {
            System.out.println("위잉~ 청소 중...");
            System.out.println("청소 끝!");
            // return이 없음!
    }
}
// 사용: Robot bot = new Robot();
// bot.clean(); // 변수에 담을 수 없음. 그냥 실행되고 끝.


- **정적 메서드 (Static Method) = 기계의 기능 (핵심)**:
- **개념**: 설계도(class) 자체에 붙어 있는 기능. 붕어빵이 만들어지기 전에도 기계는 이 기능을 가지고 있음. (예: `기계.만들기()`)
- **코드 예시**: `axios.create()` -> 공장(`axios`)이 가진 `create` 버튼을 눌러서 실체(`api`)를 만듦.

**[객체 안의 객체: '부품' 개념]**

- **구조**: `api`(객체) 안에는 문자열, 함수뿐만 아니라 **또 다른 객체(`interceptors`)**도 들어있다.
* **용어**: 이때, 객체 안에 들어있는 또 다른 객체를 개념적으로 **"구성 요소(Component)"** 혹은 **"모듈/부품"**이라고 부른다.
- *비유*: `api`를 자동차로 본다면, `interceptors`는 자동차 안에 장착된 **네비게이션이나 하이패스 단말기(부품)**와 같다.


- **접근**: 우리는 객체의 필드, 함수, 그리고 **객체 안의 객체(부품)**에도 점(`.`)을 찍어 접근한다. (예: `api.interceptors.request`)
- **프로퍼티 vs 메서드**:
- 객체 안에 있는 **변수(필드)** = **"프로퍼티 (Property)"**
- 객체 안에 있는 **함수** = **"메서드 (Method)"**
- 객체 안의 객체도 결국 **"프로퍼티"**다. (내용물이 객체일 뿐)

---

### 2. JS 문법 vs Java 비교 (Syntax & Comparison)

**[기본 문법 차이]**

- ** = (등호)**: 혼자 있을 때 씁니다. 변수 선언 (`const box = { ... }`)
- ** : (콜론)**: 객체 안에 들어 있을 때 씁니다. 프로퍼티 정의 (`target: { ... }`)
- **const**: 자료형이 아니라 **변수를 만드는 방식(키워드)**.
- *자바 비유*: `final`이다. (한 번 값을 넣으면 못 바꿈)

- **export**: 수출(내보내기).
- *자바 비유*: `public`과 같은 개념.

**[객체 구조와 HashMap]**

- **Java**:
- 설계도(Class)가 엄격함. 미리 적어두지 않은 필드는 못 넣음 (**엄격한 공장장**).
- 보통 `Map<String, String>`처럼 제네릭을 써서 타입과 키/값을 엄격하게 관리함.

- **JavaScript**:
- 설계도(Class)가 유연함. 나중에 막 갖다 붙여도 됨 (**대충 사는 공장장**).
- **JS 객체 `{}` = 자바의 `HashMap**`: 그냥 **데이터를 담는 바구니(Object Literal)**다. 함수 없이 필드만 담아도 완벽한 객체다.
- **Config의 정체**: `config`는 그냥 변수명(구성, 설정)이고, 그 실체는 설정을 담은 **보따리(객체)**다.
--
### 3. 네트워크 & 인증/인가 (Network & Auth)

**[인증 vs 인가]**

- **인증 (Authentication)**: **"너 누구야?"**
- *행동*: 아이디/비번 치고 로그인.
- *결과*: **신분증(토큰)을 발급받음**.
- *상황*: 공항 입국 심사대에서 여권 보여줌.

- **인가 (Authorization)**: **"너 이거 할 수 있어?"**
- *행동*: 글쓰기 버튼 누르기, 관리자 페이지 접속.
- *과정*: "어? 너 일반 회원이네? 못 들어가(403)."
- *상황*: 여권은 있지만 VIP 라운지에는 못 들어감.


- **코드 적용**: `config.headers.Authorization`에 토큰을 넣는 건, **"나 이 구역에 들어갈 권한(인가) 있어"**라고 증명하려고 신분증을 목에 거는 행위.

**[Bearer]**

- 약속된 암호. **"이건 Bearer(소지자) 토큰이야"**라고 명찰을 달아주는 것.

---

### 4. Axios 구조 및 원리 (Axios Structure)

**[Axios 생성과 흐름]**

1. **라이브러리 (Library)**: 남들이 힘들게 짜놓은 도구함. `import axios` 하는 순간 내 작업장으로 가져옴.
2. **`axios.create()`**:
- 단순히 URL만 저장하는 게 아님.
- "야, 내가 가진 기능(get, post, interceptors) 전부 복사해서 **새 로봇(인스턴스)** 하나 만들어. 단, 기본 목적지(`baseURL`)는 이걸로 설정해."


3. **`api` 변수 (결과물)**:
- 설정된 `baseURL`(데이터) + 통신 기능 `get/post`(함수) + 검문소 `interceptors`(객체)가 꽉 채워진 **종합 세트**.

**[Interceptors 작동 원리]**

- **구조**: `api`(자동차) -> `interceptors`(하이패스 단말기) -> `request`(입구 처리기) -> `use`(사용 버튼).
- **코드 의미**: `api.interceptors.request.use(...)`
- 하이패스 단말기에 **내 신용카드 정보(토큰)를 등록**하는 과정. 그래야 톨게이트 지날 때 자동으로 결제(인증) 되니까.


- **접근의 비밀**: `api`는 아빠(`axios`)의 유전자를 물려받았기 때문에, `api.interceptors`라고 점을 찍어서 그 장치에 접근 가능함.

**[Config와 Headers]**

- **Config**: 서버에 보낼 **편지 봉투(요청 보따리)**. URL, 메서드, 헤더 정보가 들어있음.
- **Headers**: 편지 봉투 겉면의 정보란. `config` 객체 안에 있는 **또 다른 작은 객체(프로퍼티)**.

**[백틱 (` `)]**

- 문자열과 변수 섞어 쓸 때(`+` 기호) 불편해서 사용.
- `${}`: 변수가 들어갈 구멍.

---

### 5. React 기초 & 파일별 분석 (React Fundamentals)

**[React 기초]**

- **React**: 데이터가 바뀔 때 화면을 자동으로 다시 그려주는 도구 (렌더링).
- **JSX**: JS 코드 안에서 HTML 태그처럼 생긴 걸 쓰고 싶어서 만든 문법.
- **Main.jsx**: 브라우저는 JSX를 못 읽음. 그래서 여기서 순수 JS로 변환해서 뿌려주는 **최종 조립 공장**.

**[파일별 핵심 역할]**

- **Main.jsx**:
- `BrowserRouter`: 주소 바뀌면 페이지 전체 새로고침 안 하고, 해당 화면 함수만 꺼내서 그려주는 감시 장치.
- `document.getElementById('root')`: `index.html` 설계도에서 `root`라는 도화지 구역을 찾아라.


- **App.jsx**:
- `<MainLayout>`: 백화점 공통 인테리어(복도, 화장실 등). 알맹이만 바뀌고 껍데기는 고정.
- `AuthRoute`: **핵심 로직**. 백엔드와 프론트엔드가 처음 만나는 **검문소**. 로그인 안 했으면 쫓아냄.


- **AuthRoute.jsx (경비실)**:
- `meQuery.isLoading`: 데이터 가져오는 중인가?
- `Maps`: 운전대. 주소를 강제로 바꿔서 이동시킴 (`/auth/login` 등으로).
- `location`: 내비게이션(GPS). 현재 내 위치 정보가 들어있음.
- `useEffect`: 감시 대상(`[pathname]`)이 변할 때마다 실행되는 녀석.

---

### 6. Java 심화: 익명 클래스, 람다 & 스트림 (Java Advanced)

**[익명 클래스 vs 람다식]**

- **익명 클래스 (Anonymous Class)**: **"일회용 컵"**
- 이름 짓기 귀찮아서 `new`와 동시에 `{}`를 열어 내용을 즉석에서 채워버린 객체.
- *단점*: 코드가 길고 파일은 안 만들어도 컴파일하면 임시 파일이 생김.

- **람다식 (Lambda)**: **"압축기"** (람다: 익명 함수를 뜻하는 수학 기호에서 유래)
- **원리 (추론과 생략)**: 어차피 인터페이스에 기능(함수)이 **딱 하나**뿐이라서, 컴퓨터가 무슨 함수인지 뻔히 안다.
- **결과**: `new`, 함수 이름, `return` 다 지우고 **`(재료) -> {결과}`** 알맹이만 남김.
- *조건*: **함수형 인터페이스(메서드가 1개인 놈)**만 사용 가능.

**[스트림 (Stream): 데이터 공장 자동화]**

- **개념**: 데이터를 하나하나 꺼내서(`for문`) 처리하는 게 아니라, **컨베이어 벨트** 위에 올려두고 공정별로 처리하는 방식.
- **3단계 공정**:
1. **생성**: 재료를 벨트에 올림 (`stream()`)
2. **가공**: 불량품 거르고, 포장지 바꿈 (`filter`, `map`) -> **여기서 람다식이 쓰임!**
3. **결과**: 최종 박스에 담음 (`collect`)

- **코드 해석 (파인만 기법)**:
```java
List<String> adultNames = users.stream() // 1. 컨베이어 벨트에 올린다.
    .filter(user -> user.getAge() >= 20) // 2. 필터(람다): 20세 미만은 탈락!
    .map(user -> user.getName())         // 3. 변신(람다): 사람 객체 -> 이름표(String)로 바꿈 - .map()은 들어온 재료를 다른 모양으로 바꿔서 내보내는 기계
    .collect(Collectors.toList());       // 4. 포장: 결과물을 리스트로 묶어서 배송.

    users 안을 들여다보면 이렇게 0번부터 순서대로 착착 쌓여 있습니다.
users (리스트) | 번호표 (Index) | 내용물 (User 객체) | | :--- | :--- | | 0번 칸 | { 이름: "철수", 나이: 25 } | | 1번 칸 | { 이름: "영희", 나이: 15 } | | 2번 칸 | { 이름: "맹구", 나이: 30 } |
특징:
순서가 있습니다. (넣은 순서대로 0, 1, 2...)
하나의 칸 안에는 이름과 나이가 묶인 User 덩어리 하나가 통째로 들어있습니다.

. 아까 그 stream() 코드랑 연결해볼까요?이제 이 users (사물함) 문을 열고 **stream() (컨베이어 벨트)**을 작동시키면 이렇게 움직입니다.users.stream():"자, 0번 칸부터 한 명씩 나와!"**0번(철수)**가 벨트 위로 올라감 $\rightarrow$ 20살 넘니? (O) $\rightarrow$ 이름표 떼! ("철수")**1번(영희)**가 벨트 위로 올라감 $\rightarrow$ 20살 넘니? (X) $\rightarrow$ 탈락! (집에 감)**2번(맹구)**가 벨트 위로 올라감 $\rightarrow$ 20살 넘니? (O) $\rightarrow$ 이름표 떼! ("맹구")

발생: 사용자가 /adults 접속 (실행 스위치 ON)
Controller: "요리사님, 성인 명단 주세요!" (memberService.getAdultUserNames() 호출)
Service: "창고지기님, 회원 다 꺼내주세요." (userRepository.findAll() 호출)
Repository: DB에서 데이터를 긁어와서 users라는 User 객체 리스트를 만듦.
Service (가공): users 리스트를 컨베이어 벨트(Stream)에 올리고, 필터링하고 이름만 뽑아서 String 리스트를 새로 만듦.
Return (1차): 이 String 리스트가 getAdultUserNames()의 결과값으로 Controller에게 돌아감.
Return (2차): Controller는 받은 resultNames를 그대로 밖으로 뱉음(return).
결과: 사용자 브라우저 화면에 ["철수", "맹구"]라고 이름이 딱 나타남.

### 7. Java 객체지향의 꽃: 인터페이스와 다형성 (Interface & Polymorphism)

**[인터페이스 (Interface): 교체 가능한 부품 규격]**

- **개념**: **"USB 포트"**와 같다.
- 삼성 마우스든, 로지텍 마우스든 **꽂는 구멍(USB)**만 맞으면 컴퓨터는 신경 안 쓴다.
- **목적**: 제조사(구현체)가 바뀌어도 컴퓨터 본체(Main)를 뜯어고치지 않기 위해 사용.

**implements (구현):**
- **사전적 의미**: 구현하다.
- **코드적 의미**: "나(Class)는 이 설계도(Interface)에 적힌 기능을 반드시 구현할 것을 맹세합니다." (서약서)
- 관습적으로 구현체 클래스 이름 뒤에 `Impl`을 붙인다. (예: `MemberServiceImpl`)

**[다형성 (Polymorphism): "Main은 고민하지 않는다"]**

**핵심 코드**:
```java
// [핵심] 자료형은 '규격(Mouse)'인데, 실체는 '삼성(Samsung)'이다.
Mouse myMouse = new SamsungMouse(); 
myMouse.click(); // 삼성 기술로 클릭됨

// 나중에 로지텍으로 부품 교체
myMouse = new LogitechMouse();
myMouse.click(); // 로지텍 기술로 클릭됨 (변수 myMouse는 건드릴 필요 없음!)


**왜 이렇게 쓰는가? (Why):**

- **Main(사장님)**은 알바생 이름이 철수인지 영희인지 몰라도 된다.
- 그저 **"바코드 찍을 줄 알지?(Interface 기능)"**만 확인하면 바로 일을 시킬 수 있다.
- 이것이 나중에 배울 **Spring의 DI(의존성 주입)**가 가능한 근본적인 이유다.

**[메서드와 리턴 타입의 비밀]**

- **인터페이스가 "강제"하는 것**:
    - **메서드 이름**: `click()` (이름 통일)
    - **리턴 타입**: `void` (결과물 형식 통일)
- **결과**: 구현체(Impl)가 내부적으로 어떤 복잡한 지지고 볶는 로직을 짜든, 겉에서 볼 때는 **"똑같은 버튼"**으로 보인다.

**[추가 팁: Stream의 마지막 퍼즐]**

- 기존 6번 스트림 설명에 덧붙이는 개념
- **.collect() vs .forEach()**:
    - `collect()`: 완성된 붕어빵을 박스에 예쁘게 포장해서 사장님(변수)에게 바침. (Return O)
    - `forEach()`: 붕어빵이 나오는 족족 손님 입에 넣어버림 (출력, DB저장). 남는 게 없음. (Return X, void)


### 8. Spring Boot 생태계와 안전장치 (Spring Ecosystem & Safety)

**[예외 처리 (Exception): 공장 비상 매뉴얼]**

- **구조 (Try-Catch-Finally)**
    - **Try**: "일단 위험한 작업(파일 열기, DB 접속) 시도해봐."
    - **Catch**: "불(에러) 났어? 소화기 뿌려!" (프로그램 셧다운 방지)
    - **Finally**: "성공하든 실패하든, 퇴근할 때 전원(Resource)은 끄고 가." (메모리 누수 방지, `close()`)

- **두 가지 에러 종류 (면접 단골)**
    - **Unchecked (Runtime Exception)**: 실행 버튼 눌러야 터지는 폭탄.
        - **원인**: 개발자 실수 (예: `NullPointerException` - 빈 깡통 열기).
        - **대처**: 코드를 고쳐야 함.
    - **Checked (Compile Exception)**: 빨간 줄 그어지는 에러.
        - **원인**: 외부 환경 문제 (파일 없음, DB 연결 끊김).
        - **대처**: 자바가 **"야, 이거 위험하니까 try-catch 안 쓰면 실행 안 시켜줘!"**라고 강제함.

**[Throw & Global Handling: 책임 전가 시스템]**

- **Throw**: "이 에러, 내가 처리 안 해. 나를 부른 놈한테 던질 거야!"
- **Global Exception Handler**:
    - 각 기능(로그인, 회원가입)에서 자잘하게 에러를 잡지 않고, `throw`로 다 던져버림.
    - **전역 처리기(청소부 클래스)**가 공중에서 에러를 낚아채서 한 번에 깔끔하게 처리함.
    - **목적**: 비즈니스 로직(핵심 기능)을 깔끔하게 유지하기 위함.

**[JPA & Jackson: 자동화 로봇과 통역사]**

- **Jackson (통역사)**: JSON $\leftrightarrow$ Java
    - **JSON**: 인터넷 택배용 주문서(텍스트). (`"{ name: 철수 }"`)
    - **Java Object**: 주방에서 요리하는 실체(메모리). (`User` 객체)
    - **역할**: 종이(JSON)를 보고 실제 요리(Java)를 만들어내거나, 그 반대를 수행.
- **JPA (창고지기 로봇)**: Java $\leftrightarrow$ DB
    - 개발자가 `save(user)`만 하면, 로봇이 알아서 SQL을 짜서 DB에 넣음.
    - **매개체 (@Entity)**: 클래스에 붙은 스티커가 DB 테이블과 연결되는 지도(Map) 역할.
- **NoArgs Constructor (빈 깡통 생성자)의 비밀**
    - Jackson과 JPA는 일단 **빈 깡통(`new User()`)**을 먼저 만듦. (필수!)
    - 데이터(JSON, DB)를 보고 깡통 안을 채워 넣음 (Reflection 마법).

**[개발 도구 삼형제: Maven, Annotation, Lombok]**

- **Maven/Gradle (사서)**: 인터넷 도서관에서 라이브러리를 다운로드해 주는 역할.
- **Annotation (@) (주문서/스티커)**:
    - **"이거 이렇게 처리해 주세요"**라고 도구에게 명령하는 메모지.
    - **오해 금지**: `@`을 쓴다고 자동 import 되는 게 아님. IDE가 보고 도와주는 것.
- **Lombok (유령 작가)**:
    - 컴파일 시 `@Data`, `@Builder` 등을 보고 Getter, Setter 코드를 몰래 작성함.
    - **주의**: 생성자 조건에 따라 `@AllArgsConstructor` 등이 따로 필요할 수 있음.


### 1. Spring 핵심 엔진: DI & IoC (완벽 정리본)

**[IoC (제어의 역전): "운전석을 넘기다"]**
- **기존 방식 (Legacy)**: 개발자가 필요할 때마다 `new`를 써서 객체를 직접 생성하고 관리함. (내가 직접 운전)
- **Spring 방식 (IoC)**: 객체의 생성과 소멸, 관리를 **스프링 컨테이너**에게 전적으로 위임함. (자율주행 모드)
- **핵심**: "객체를 **내가(Developer)** 만들지 않고, **남(Spring)**이 만들어준다."

**[Container & Bean: "창고와 정직원"]**
- **Spring Container (창고)**: 객체들을 미리 만들어서 보관하고 관리하는 공간.
- **Bean (물건/정직원)**: 컨테이너가 관리하는 객체 그 자체.
- **등록 과정 (Registration)**:
    - 스프링은 아무 클래스나 관리하지 않음.
    - **설계도(Class)** 위에 `@Controller`, `@Service` 같은 **스티커(어노테이션)**가 붙어 있어야만 "어? 내 식구네?" 하고 객체로 만들어 창고에 넣음.

**[DI (의존성 주입): "배달 시스템"]**
- **개념**: 창고에 있는 객체(Bean)를 필요한 곳에 가져와서 **꽂아주는(Injection)** 행위.
- **@Autowired (주문서)**: "여기에 맞는 Bean을 창고에서 꺼내와!"라는 신호.
- **장점**:
    - **결합도 감소**: `new SamsungMouse()`처럼 코드를 고정하지 않아도 됨.
    - **유연성**: 나중에 설정을 통해 `Logitech`으로 바꿔도, 사용하는 쪽 코드는 수정할 필요 없음.

**[Singleton (싱글톤): "메모리 절약의 비밀"]**
- **나의 오해**: "미리 다 만들어두면 메모리 터지는 거 아냐?"
- **진실 (효율성)**:
    - 유저가 100명 온다고 객체를 100개 만드는 게 아님 (`new`의 문제점).
    - 스프링은 설계도(Class)를 보고 **딱 1개의 객체만 생성**해서 창고에 둠.
    - 100명의 유저가 **그 1개의 객체를 공유해서 사용함**. (공용 사무실 개념)

**[빈 충돌 문제 (Conflict): "둘 다 있으면 누굴 줘?"]**
- **상황**: `Mouse` 인터페이스를 구현한 `Samsung`(빈 등록 O)과 `Logitech`(빈 등록 O)이 둘 다 있다면?
- **에러**: 스프링이 "누굴 배달할지 모르겠어!" 하고 멈춤.
- **해결책**:
    1. **스티커 떼기**: 쓸 놈한테만 `@Component` 붙이고, 안 쓸 놈은 떼버린다. (가장 단순)
    2. **@Primary**: 둘 다 등록하되, 우선순위가 높은 놈한테 **"내가 대장이야"** 스티커를 붙여준다.

    ### 13. Spring Layered Architecture (계층형 구조의 흐름)

**[전체 흐름: 철저한 분업화 시스템]**
* **핵심**: 서버가 커지면 혼자 다 못한다. **창구(Controller), 주방(Service), 창고(Repository)**로 역할을 확실하게 나눈다.

**1. Controller (웹 계층) - `@Controller`**
* **역할**: **"주문 받아요!"** (Client 요청 수신 & 응답)
* **기능**:
    * 외부에서 온 `JSON` 데이터를 자바가 이해하는 객체(`DTO`)로 변환한다. (Jackson 통역사 활약)
    * **절대 직접 요리(로직)하지 않는다.** "이거 처리해줘"라고 **Service**에게 토스한다.
* **★ My Insight (내 깨달음)**:
    * Controller는 **Service의 내부 사정을 알 필요가 없다.**
    * 그저 "주문서 넘겼으니 결과만 줘"라는 식으로 일만 시킨다.

**2. Service (비즈니스 계층) - `@Service`**
* **역할**: **"요리 시작합니다!"** (핵심 로직 & 트랜잭션)
* **기능**:
    * 실질적인 계산, 검증(`if`, `for`)을 수행한다.
    * 재료(데이터)가 필요하면 **Repository**를 호출한다.
* **★ My Insight (인터페이스와 다형성의 재발견)**:
    * Controller는 `MemberService`라는 **인터페이스(규격)**만 보고 주문을 넣는다.
    * 실제로 돌아가는 게 `SamsungService`인지 `LogitechService`인지(구현체)는 신경 쓰지 않는다.
    * **"Main은 삼성을 몰라도 된다"**는 다형성 원리가 여기서 **"Controller는 ServiceImpl을 몰라도 된다"**로 적용된다.

**3. Repository (퍼시스턴스 계층) - `@Repository`**
* **역할**: **"재료 꺼내올게요!"** (DB 접근)
* **기능**:
    * JPA를 통해 DB에 쿼리를 날려 데이터(`Entity`)를 가져오거나 저장(`save`)한다.
* **★ My Insight (Entity와 빈 깡통)**:
    * **연결 고리**: 자바가 DB 테이블을 어떻게 알까? -> **`@Entity`**라는 스티커가 **지도(Map)** 역할을 한다.
    * **빈 깡통의 이유**: DB에서 가져온 데이터를 담으려면 일단 객체를 만들어야 한다. 그래서 JPA는 **`new User()`(파라미터 없는 생성자)**를 먼저 실행하고 데이터를 채워 넣는다. (그래서 NoArgs가 필수다!)

**4. 연결의 마법: DI (의존성 주입)**
* **흐름의 완성**:
    * 이 3개의 계층(Controller, Service, Repository)은 서로 `new`로 만들지 않는다.
    * **스프링(공장장)**이 미리 만들어둔 부품(Bean)을 **`@Autowired`**로 꽂아주기 때문에, 우리는 선언만 하면 레고처럼 조립되어 돌아간다.


@RestController // "나 창구 직원(Web)이야"
@RequestMapping("/api/members") //공통 주소 묶기: 해당 기능이 있어서 /join앞에 api/members/ 가 없는거임
public class MemberController {

    @Autowired // "스프링아, 요리사(Service) 좀 배정해줘"
    private MemberService memberService;

    @PostMapping("/join") // POST 요청 오면 실행 /join 주소로 데이터를 싣고 온(POST) 손님만 이 함수를 실행시켜라
    public String receivejoin(@RequestBody MemberDto memberDto) {
        // 1. 손님 데이터(DTO) 받음   // 2. 바로 Service에게 넘김 (직접 일 안 함)
        memberService.join(memberDto);
        return "회원가입 성공!";
    }
}

@Service // "나 핵심 로직 담당(Business)이야"
public class MemberService {

    @Autowired // "스프링아, 창고지기(Repository) 좀 붙여줘"
    private MemberRepository memberRepository;

    public void join(MemberDto dto) {
        // 1. 비즈니스 로직: 중복 회원 검사  // (가명: 이미 있는 사람이면 에러 냄)
        // 2. 문제 없으면 Entity(DB 저장용 객체)로 변환
        Member member = new Member(dto.getName(), dto.getEmail());
        // 3. Repository에게 저장 시킴
        memberRepository.save(member);
    }
}

@Repository // "나 DB 담당이야"
// JpaRepository를 상속받으면 save(), findById() 같은 기능을 공짜로 줌
public interface MemberRepository extends JpaRepository<Member, Long> {
    // 아무 코드가 없어도 'save' 기능이 작동함 (JPA의 마법)
}

### 14. DTO & Entity: 왜 데이터를 포장해서 옮기는가? (Mapper & Jackson)

**[핵심 비유: 식재료(Entity) vs 요리(DTO)]**
- **Entity (식재료/원물)**: DB 테이블과 1:1로 매핑되는 **가장 중요한 원본**. 창고(DB)에 저장될 날것의 상태.
- **DTO (요리/도시락)**: 데이터를 옮기기 위한 **일회용 포장 박스**.
- **Mapper (조리/변환)**: 재료(Entity)를 요리(DTO)로 바꾸거나, 포장(DTO)을 뜯어 재료(Entity)로 만드는 **자바 변환 로직**.

**1. Entity (DB의 거울) - `@Entity`**
- **정의**: DB 테이블의 구조를 그대로 본뜬 자바 클래스.
- **기능**: **Repository(JPA)**가 이 녀석을 통해 DB에 쿼리를 날린다.
- **☆ My Insight (접근 금지)**:
    - Entity는 **DB 그 자체**다. 화면(Front)에서 뭘 더 보여달라고 해서 여기에 필드를 추가하면 DB가 망가진다.
    - 그래서 **Entity는 절대 Service와 Repository(주방 내부) 밖으로 나가지 않는다.**

**2. DTO (Data Transfer Object) - 배달 박스**
- **정의**: 계층 간(Controller <-> Service) 데이터 교환을 위한 껍데기 객체.
- **역할**:
    - **Input (저장)**: 외부에서 온 재료를 담아오는 박스.
    - **Output (조회)**: 완성된 요리를 담아 나가는 박스.
- **☆ My Insight (편리함)**:
    - `MemberJoinDto`를 따로 만드는 이유는, 그 안에 **`toEntity()` 같은 변환 기능을 넣어두면**, Service에서 `dto.toEntity()` 한 줄로 바로 저장 준비를 끝낼 수 있기 때문이다.

**3. Mapper & Jackson (변환의 마법들)**

**(1) Jackson 라이브러리 (@RequestBody의 정체)**
- **질문**: "코드에 `new Dto()`가 없는데, 어떻게 값이 채워져 있지?"
- **정답**: 스프링의 **Jackson**이 **JSON 데이터를 낚아채서** DTO를 **자동 생성(`new`)**하고 값을 채워(`set`) 넣어준다.
- **코드**: `public String join(@RequestBody MemberJoinDto dto)` -> 이 한 줄에서 마법이 일어남.

**(2) Mapper (XML 아님!)**
- **오해**: "Mapper가 MyBatis의 XML 파일인가?" -> **(X)**. 그건 DB 연결용 옛날 방식.
- **진실**: 우리가 말하는 Mapper는 **Entity ↔ DTO를 변환하는 자바 메서드**(`toEntity`)를 뜻함.

**(3) Repository (JPA)**
- **위치**: **DB ↔ Entity** 사이의 1차 관문.
- **역할**: JPA를 사용해 SQL을 날리고, DB 데이터를 Entity 객체로 가져온다.

---

**[전체 데이터 흐름도: 회원가입 (Input)]**

```text
[Client (React)]
      │ (JSON 데이터 전송: {"id":"minseok", ...})
      ▼
[Controller]
      │ ★ Jackson(@RequestBody)이 낚아채서 [DTO] 생성 및 주입
      │ "주문서(DTO) 왔으니 처리해줘"
      ▼
[Service]
      │ ★ Mapper(toEntity) 가동: [DTO] 포장 뜯어서 [Entity]로 변환
      │ "재료 손질 끝, 냉장고에 넣어"
      ▼
[Repository]
      │ ★ JPA 가동: [Entity]를 보고 SQL(INSERT) 생성
      ▼
[DB (MySQL)] : 저장 완료

// [1. DTO] 화면에서 받아온 요청 데이터 (가볍다)
@Getter
public class MemberJoinDto {
    private String username;
    private String email;
    // 비밀번호는 받지만, DB 저장 후엔 다시 보여주면 안 됨
    private String password; 
    
    // Mapper 메서드: DTO를 Entity로 바꾸는 기능 (주방으로 들고 갈 때)
    public Member toEntity() {
        return Member.builder()
                .username(this.username)
                .email(this.email)
                .password(this.password) // 실제론 암호화해야 함
                .build();
    }
}

// [2. Entity] DB 원본 (무겁다, 중요함)
원본정의가 아니고 데이터가 여기에 있을거다.
@Entity
@Getter
@NoArgsConstructor // 빈 깡통 필수
public class Member {
    @Id @GeneratedValue
    private Long id;
    private String username;
    private String email;
    private String password;
    
    // ... 생성자(Builder) 생략 ...
    -> 해당부분 알려줘
}

// [3. Service] 실제 변환이 일어나는 곳
@Service
public class MemberService {
    
    public void join(MemberJoinDto dto) { -> 앞에 memberjoindto가 왜 있음
        // ★ 여기서 변환 발생! (포장 뜯어서 내용물만 그릇에 담음)
        // DTO(포장지) -> Entity(재료)
        Member member = dto.toEntity(); 
        
        // 요리 시작 (DB 저장)
        memberRepository.save(member);
    }
}

@RestController
public class MemberController {

    @Autowired
    private MemberService memberService;

    // Client가 보낸 JSON: { "username": "minseok", "email": "ms@naver.com" }
    @PostMapping("/join")
    public String join(@RequestBody MemberJoinDto dto) { 
        // ▲ 1. 스프링(Jackson)이 JSON을 보고 'dto'를 생성해서 여기에 꽂아줌.
        //      개발자는 그냥 쓰기만 하면 됨.
        
        System.out.println(dto.getUsername()); // "minseok" 출력됨
        
        memberService.join(dto); // 2. 서비스로 토스
        return "ok";
    }
}


### 📂 [Step 2-1] JPA 연관관계 (1:N) 개념 정리

**1. 핵심 요약 (DB vs Java)**
* **DB의 진실**: 자식 테이블(`Post`)만이 부모의 ID(`user_id`)를 **외래키(FK)**로 가질 수 있다. 부모(`User`)는 자식에 대한 정보가 전혀 없다.
* **Java의 설정**:
    * **Post (주인)**: 실제 FK를 관리함. 저장/수정 담당. (`@ManyToOne`)
    * **User (거울)**: DB에 영향 없음. 조회(CCTV) 담당. (`mappedBy`)

**2. 설계도 (Entity 코드)**

**(1) Post.java (N, 자식, 진짜 주인)**
* `@ManyToOne`: FK 기능을 켜는 엔진 (필수).
* `@JoinColumn(name="user_id")`: FK 이름표 붙이기.
* `private User user`: 객체를 통째로 연결 (저장 및 조회 편의성).

```java
@Entity
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 글 번호 (PK)
    
    private String title;
    private String content;

    // [핵심] 1. FK 기능 ON / 2. 컬럼명 user_id 지정
    @ManyToOne 
    @JoinColumn(name = "user_id") 
    private User user; 

    // [Setter] 글 쓸 때 작성자(객체)를 저장하기 위해 필수
    public void setUser(User user) {
        this.user = user;
    }

    // [Getter] 글 조회할 때 작성자 정보(이름 등)를 꺼내기 위해 필수
    public User getUser() {
        return user;
    }
}

(2) User.java (1, 부모, 조회용 거울)
mappedBy: "나는 주인이 아님. 저쪽 user 필드가 진짜임." (CCTV 모드).
List<Post>: getPosts() 호출 시 JPA가 DB에서 찾아와 채워줌 (지연 로딩).
new ArrayList<>(): null 방지용 안전장치.

@Entity
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 유저 번호 (PK)
    
    private String username;

    // [핵심] DB 컬럼 안 생김. 단순 조회(CCTV)용.
    @OneToMany(mappedBy = "user") 
    private List<Post> posts = new ArrayList<>();

    // [Getter] 내 글 목록(CCTV 화면)을 보기 위해 필수
    public List<Post> getPosts() {
        return posts;
    }
}

3. 작동 원리 (Service 로직)
상황: 로그인한 유저(currentUser)가 글을 작성하고 저장함.
@Service
public class PostService {
    @Autowired private PostRepository postRepository;

    public void writePost(User currentUser, String title, String content) {
        // 1. 빈 깡통 생성
        Post post = new Post(); 
        post.setTitle(title);
        post.setContent(content);

        // 2. [관계 설정] 유저 객체를 통째로 넣음 (Java 메모리 연결)
        post.setUser(currentUser); 

        // 3. [DB 저장] JPA가 currentUser의 ID를 추출 -> user_id(FK)에 기입
        // INSERT INTO Post (title, content, user_id) VALUES (..., ..., 1);
        postRepository.save(post); 
    }
}

### 📂 [Step 2-1] JPA 연관관계 - 나의 질문과 해결 (오답노트)

**Q1. Post 테이블에 `user_id` 컬럼 하나만 추가하면 되는데, 왜 `@ManyToOne`, `@JoinColumn`, `User user` 3개나 써야 해?**
* **A. 역할이 전부 다르기 때문이다. (3단 콤보)**
    1.  **`private User user;`**: 단순히 ID 숫자만 쓰는 게 아니라, `post.getUser().getName()`처럼 **점(.) 찍어서 객체 정보를 편하게 쓰려고** 등록함.
    2.  **`@ManyToOne`**: **"이건 단순 데이터가 아니라 FK(외래키) 관계야!"**라고 JPA에게 알리는 **엔진(필수 스티커)**. 이게 없으면 에러 남.
    3.  **`@JoinColumn(name="user_id")`**: FK의 **이름표**를 붙이는 것. (기능은 없음, 이름 짓기용).

**Q2. `mappedBy = "user"`는 도대체 뭐야? (CCTV 비유)**
* **오해**: "이걸 쓰면 User 테이블에 컬럼이 생기나? FK 기능을 켜는 건가?"
* **정답**:
    * **User 테이블에는 아무 변화 없음.** (DB 컬럼 안 생김).
    * **역할**: **"나는 DB에 저장 안 해. 그냥 저쪽(Post)을 쳐다보는 CCTV(조회)야."**
    * 이게 있어야 `user.getPosts()`를 할 때 JPA가 Post 테이블을 뒤져서 가져온다.

**Q3. `posts` 리스트에 `add` 하는 코드가 없는데, 어떻게 리스트가 채워져?**
* **오해**: "저장할 때 `posts.add(post)`를 해줘야 나중에 조회되는 거 아냐?"
* **정답**:
    * 저장할 땐 `User` 쪽 리스트 신경 쓸 필요 없음. (`Post`만 잘 저장하면 됨).
    * **조회할 때(`getPosts`)**, JPA가 알아서 DB(`SELECT * FROM Post WHERE user_id = ?`)를 조회해서 **그때 리스트를 채워서 가져다줌.** (지연 로딩).

**Q4. 코드 예시에서 `findById(1L)`은 뭐야? 왜 1번이야?**
* **수정**: 학습용 예시(1L)가 헷갈림을 유발했음.
* **실무**: 실제로는 **로그인한 유저(`currentUser`)** 정보를 컨트롤러에서 받아서 넣는다.
    ```java
    // 1L (X) -> currentUser (O)
    // 로그인한 유저 객체를 그대로 넣어주면, JPA가 알아서 ID를 추출해 DB에 1을 박음.
    post.setUser(currentUser); 
    ```

**Q5. Post 클래스 안에 `new User()`를 해야 필드를 쓸 수 있는 거 아냐?**
* **오해**: `private User user;` 만 있으면 빈 껍데기 아냐?
* **정답**:
    * **Entity 파일**은 **설계도**다. 설계도 안에서 `new`를 하지 않는다.
    * 실제 객체 생성(`new`)과 조립(`setUser`)은 **Service(공장)**에서 실행할 때 한다.

**Q6. `getUser()`랑 `getPosts()`는 서로 연관된 거야?**
* **정답**: **아니다. 완전 별개다.**
    * `post.getUser()`: 글 입장에서 "이거 누가 썼어?" 확인용.
    * `user.getPosts()`: 유저 입장에서 "내 글 다 가져와" 확인용.
    * 서로 필요에 의해 만든 것일 뿐, 하나가 없다고 다른 하나가 안 돌아가는 건 아님.
    * 
    
# [SQL] JOIN 기초: 데이터를 합쳐서 가져오는 법

데이터베이스에서 서로 다른 테이블(예: 고객 명단, 주문 내역)을 **공통된 정보(Key)**를 기준으로 합쳐서 하나의 표로 만드는 기술.

---

## 1. INNER JOIN (교집합)
> **"양쪽 모두에 데이터가 있는 '알짜배기'만 보여줘!"**

* **개념:** 두 테이블의 연결고리(Key)가 **서로 매칭되는 행(Row)만** 남긴다.
* **결과:** 주문한 적 없는 고객이나, 비회원 주문은 결과에서 **제외(삭제)**된다.

```sql
SELECT Customers.이름, Orders.상품명
FROM Customers
INNER JOIN Orders
ON Customers.ID = Orders.고객ID;


2. LEFT JOIN (왼쪽 기준 전체)
"주문 안 했어도, 우리 고객 명단은 전부 다 보여줘!"

개념: **왼쪽 테이블(FROM)**의 모든 행(Row)을 유지한 채, 오른쪽 테이블(JOIN)을 갖다 붙인다.

결과: 짝이 없는 경우(주문 안 한 고객) 오른쪽 정보는 **빈칸(NULL)**으로 표시된다. 행(Row)이 줄어들지 않는다.

SELECT Customers.이름, Orders.상품명
FROM Customers
LEFT JOIN Orders
ON Customers.ID = Orders.고객ID;

3. 쿼리 구조 완벽 해부 (핵심 로직)
가장 헷갈리는 '행(Row)'과 '열(Column)'의 역할 구분.

명령어,역할,설명 (User Logic)
FROM / JOIN,행(Row) 결정,"""누구를 운동장에 입장시킬까?"" (INNER: 커플만 입장 / LEFT: 전교생 다 입장)"
ON,기준(Key) 확인,"""어떤 기준으로 짝을 지어줄까?"" (ID가 같으면 같은 사람이다!)"
SELECT,열(Column) 선택,"""입장한 사람들 정보 중 뭐만 보여줄까?"" (이름이랑 상품명만 보여줘!)"

3줄 요약
INNER JOIN: 양쪽 다 있는 놈만 남긴다. (교집합)
LEFT JOIN: 왼쪽 놈은 다 살리고, 없으면 빈칸(NULL)으로 채운다. (전체 현황)
핵심: JOIN은 **줄(Row)**을 세우는 것이고, SELECT는 보여줄 **칸(Column)**을 고르는 것이다.

# [React Query] 개념 정리

## 1. useQuery (데이터 조회)
* **역할:** 서버에서 데이터를 가져와서 화면에 보여줌. (GET 요청)
* **특징:**
    * `isLoading`, `isError`, `data`를 자동으로 관리해줌.
    * **캐싱(Caching):** 데이터를 잠깐 기억해뒀다가, 똑같은 요청이 오면 서버 안 괴롭히고 기억한 걸 보여줌 (속도 UP).
* **예시:** 냉장고 재료 목록 불러오기.

## 2. useMutation (데이터 변경)
* **역할:** 서버의 데이터를 추가, 수정, 삭제함. (POST, PUT, DELETE 요청)
* **특징:**
    * 자동으로 실행되지 않고, 버튼 클릭 등 **이벤트가 있을 때** `.mutate()` 함수로 실행함.
* **예시:** 재료 추가하기, 유통기한 수정하기, 재료 삭제하기.

## 3. 필승 콤보 (invalidateQueries)
* **상황:** `useMutation`으로 데이터를 바꿨는데, 화면 목록(`useQuery`)이 그대로일 때.
* **해결:** "데이터 상했다! 다시 가져와!"라고 명령하는 것.
* **흐름:** 재료 추가(Mutation) 성공 -> `queryClient.invalidateQueries('재료목록')` -> 목록 다시 조회(Query) -> 화면 자동 갱신.

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

export default function FridgeApp() {
  const [foodName, setFoodName] = useState(''); // 입력창 글씨 저장
  const queryClient = useQueryClient(); // 1. 쿼리 관리자(비서) 소환

  // ====================================================
  // 2. 조회 (useQuery): 냉장고 문 열고 재료 확인
  // ====================================================
  const { data: ingredients, isLoading } = useQuery({
    queryKey: ['myFridge'], // 이 데이터의 고유 이름표 (중요!)
    queryFn: async () => {
      const response = await axios.get('/api/foods'); // 서버에 요청
      return response.data;
    },
  });

  // ====================================================
  // 3. 추가 (useMutation): 재료 넣기 + 콤보 기술
  // ====================================================
  const addMutation = useMutation({
    mutationFn: async (newFood) => {
      return await axios.post('/api/foods', { name: newFood }); // 서버에 전송
    },
    // 🔥 여기가 핵심! (성공 후 자동 갱신)
    onSuccess: () => {
      console.log('재료 추가 성공!');
      // "myFridge"라는 이름표를 가진 데이터를 폐기하고 다시 가져와!
      queryClient.invalidateQueries(['myFridge']); 
      setFoodName(''); // 입력창 비우기
    },
  });

  // ====================================================
  // 4. 화면 그리기 (JSX)
  // ====================================================
  if (isLoading) return <div>로딩 중... (냉장고 문 여는 중)</div>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">내 냉장고 🧊</h1>

      {/* 입력창과 버튼 */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          className="border p-2 rounded"
          placeholder="재료 입력 (예: 삼겹살)"
        />
        <button
          // 버튼 누르면 mutation 발사!
          onClick={() => addMutation.mutate(foodName)} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          냉장고에 넣기
        </button>
      </div>

      {/* 재료 목록 보여주기 */}
      <ul className="space-y-2">
        {ingredients?.map((item) => (
          <li key={item.id} className="bg-gray-100 p-3 rounded shadow">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

# 🚀 React & 데이터 통신 핵심 요약 노트

## 1. 전체 그림 (아키텍처)
**"누가 접시고, 누가 음식이고, 누가 배달부인가?"**

* **React (JSX):** **'접시와 식탁' (UI)**. 화면을 그려놓고 음식이 오길 기다림.
* **Axios:** **'택배 기사'**. 서버까지 가서 데이터를 받아오는 역할. (화면은 안 가져옴, 오직 데이터만!)
* **useQuery:** **'홀 매니저'**. 택배 기사가 올 때까지 "조리 중(Loading)" 팻말을 들고 서 있다가, 도착하면 접시에 담아줌.
* **API Server:** **'카운터 직원'**. React가 직접 창고(DB)에 못 들어가게 막고, 주문을 대신 받아서 처리함.
* **DB:** **'식자재 창고'**. 진짜 데이터가 저장된 곳.

> **흐름:** React(주문) → Axios(배달출발) → Server(주문접수) → DB(꺼내옴) → Server → Axios(배달완료) → React(화면갱신)

---

## 2. JavaScript 필수 문법 (코드 읽기용)

### A. Import / Export (수입/수출)
* **`import ... from 'react'`**: `node_modules`라는 거대한 부품 창고 폴더에서 가져오는 것.
* **`export default`**: "이 파일의 대표 선수". 가져올 때 이름 맘대로 변경 가능 (`import MyFridge from ...`).
* **`export`**: 일반 선수. 가져올 때 `{}` 필수, 이름 변경 불가 (`import { useState } from ...`).

### B. 구조 분해 할당 (Destructuring)
객체나 배열이라는 '박스'를 뜯어서 내용물만 변수에 담는 기술.

* **배열:** `const [값, 변경함수] = useState(초기값);` (순서가 중요)
* **객체:** `const { data, isLoading } = useQuery(...);` (이름이 중요)
    * **이름 바꾸기:** `const { data: ingredients } = ...` (data를 ingredients라는 별명으로 부르겠다!)

### C. Async / Await (비동기)
* **`async`**: "나 좀 오래 걸리는 작업(비동기) 할 거야." (함수 앞에 붙임)
* **`await`**: "야, 데이터 올 때까지 다음 줄로 넘어가지 말고 **기다려!**" (axios 앞에 붙임)

---

## 3. React Query (서버 데이터 관리자)

### A. useQuery (조회 / Read)
> **"서버야, 데이터 내놔."** (자동 실행)

* **역할:** 컴포넌트(화면)가 켜지면 자동으로 서버에서 데이터를 가져옴.
* **핵심:** `isLoading`(로딩중), `data`(내용물), `isError`(에러) 3가지 상태를 알아서 관리해줌.
* **QueryKey:** `['myFridge']` 처럼 데이터에 붙이는 **고유한 이름표(ID)**.

### B. useMutation (변경 / Write)
> **"서버야, 데이터 바꿔."** (수동 실행)

* **역할:** 데이터 추가, 수정, 삭제 요청.
* **특징:** 자동으로 실행 안 됨. 버튼 클릭 등 이벤트가 있을 때 `.mutate()`로 방아쇠를 당겨야 함.

### C. 필승 콤보 (invalidateQueries)
> **"데이터 상했다! 다시 가져와!"**

1.  `useMutation`으로 재료 추가 성공 (`onSuccess`).
2.  `queryClient.invalidateQueries(['myFridge'])` 실행.
3.  `useQuery`가 "어? 내 이름표 불렀네?" 하고 서버에서 **최신 목록 다시 가져옴.**
4.  **결과:** 새로고침 없이 화면이 스르륵 바뀜.

---

## 4. 라이브러리 정체

* **Axios:** HTTP 통신 전문 배달부. (fetch보다 똑똑함)
* **Tanstack Query (React Query):** 서버 상태 관리 비서. (로딩, 에러, 캐싱 처리)
* **Tailwind CSS:** 클래스 이름(`p-4`, `flex`)으로 디자인하는 도구.

---

## 💡 사장님을 위한 3줄 요약
1.  **Axios**로 서버에 주문 넣고,
2.  **React Query**로 배달 현황(로딩/도착) 관리하고,
3.  도착한 데이터를 **React(JSX)**로 예쁘게 보여준다.

# 백엔드 DB 기술 및 핵심 개념 정리

## 1. 기초 용어 정의

### JDBC (Java Database Connectivity)
* **정의:** 자바 프로그램이 데이터베이스와 연결되어 데이터를 주고받기 위한 **표준 API (최소한의 규칙)**.
* **역할:** 모든 DB 접근 기술(MyBatis, JPA 등)의 **엔진** 역할 (내부에서 실제 통신 담당).
* **특징:**
    * 가장 기초적(Raw)인 기술.
    * 직접 사용하면 연결/해제/예외처리 등 반복 코드(Boilerplate)가 매우 길고 복잡함.
    * *비유: 라이터와 땔감으로 직접 불을 피워서 요리하는 단계.*

### API (Application Programming Interface)
* **정의:** 프로그램들이 서로 소통하기 위해 정해둔 **약속된 명령어 세트(메뉴판)**.
* **의미:** 내부 동작 원리를 몰라도, 정해진 명령어(버튼)를 입력하면 결과가 나온다는 **소통 창구**.
* *비유: 자판기 버튼 (내부 기계 원리는 몰라도 '콜라' 버튼을 누르면 콜라가 나옴).*

---

## 2. MyBatis (SQL Mapper)

### 핵심 개념
* **정의:** JDBC의 복잡한 코드를 숨기고, 개발자가 **SQL 작성에만 집중**하게 도와주는 프레임워크.
* **오해와 진실:**
    * (X) MyBatis가 XML 안의 쿼리를 대신 작성해준다? -> **아니요.**
    * (O) **개발자가 XML에 직접 짠 쿼리**를 실행하고, 그 결과를 **자바 객체에 자동으로 매핑(연결)**해준다.

### 주요 역할
1.  **SQL 분리:** 자바 코드와 SQL(XML)을 분리하여 관리 (유지보수 용이).
2.  **자동 매핑:** DB 결과(Table 데이터)를 자바 객체(Entity/DTO)에 자동으로 넣어줌 (`set` 메서드 반복 작업 제거).
3.  **동적 쿼리:** `<if>`, `<foreach>` 등을 사용해 상황에 따른 쿼리 조립 지원.

---

## 3. JPA (ORM) vs MyBatis 비교

| 구분 | JPA (ORM) | MyBatis (SQL Mapper) |
| :--- | :--- | :--- |
| **지향점** | 객체지향 중심 (Java Object) | SQL 중심 (Query) |
| **쿼리 작성** | 자동 생성 (메서드 이름 규칙 등 활용) | **개발자가 직접 작성 (XML)** |
| **장점** | 생산성 높음, 간단한 CRUD에 최적 | 복잡한 쿼리/통계/튜닝에 최적, 세밀한 제어 가능 |
| **단점** | 복잡한 통계/동적 쿼리는 오히려 어려움 | 단순 반복 쿼리도 일일이 다 짜야 함 (귀찮음) |
| **국내 현실** | 스타트업, 서비스 기업(네카라쿠배) 선호 | **SI, 금융, 공공기관, 대기업(레거시) 압도적 사용** |

### 강사님의 현실 조언 (요약)
* JPA가 편하긴 하지만, **DB 개념(SQL)을 모르면 결국 한계**에 부딪힘 (N+1 문제, 성능 저하 등).
* 현업(특히 SI)에서는 복잡한 쿼리를 직접 짜야 하는 경우가 많아 **MyBatis 사용 비중이 높음**.
* 따라서 **"SQL 작성 능력"**을 키우기 위해 MyBatis 학습은 필수.

---

## 4. 데이터 흐름과 매퍼(Mapper)의 위치

데이터가 DB에서 화면까지 나갈 때, 보통 두 번의 변환(Mapping) 과정을 거침.

**[구조 흐름도]**
`DB` ↔ **(1. SQL Mapper)** ↔ `Entity` ↔ **(2. Object Mapper)** ↔ `DTO` ↔ `Client(화면)`

### 1. SQL Mapper (예: MyBatis)
* **위치:** DB ↔ Entity (자바 객체)
* **역할:** DB의 테이블 데이터(Row)를 자바의 **Entity 객체**로 변환.
* **작동:** XML에 적힌 SQL을 실행하여 데이터를 퍼옴.

### 2. Object Mapper (예: ModelMapper, MapStruct, 또는 수동 변환)
* **위치:** Entity ↔ DTO (데이터 전송 객체)
* **역할:** DB용 객체(Entity)를 화면 전달용 객체(DTO)로 변환.
* **이유:**
    * DB 테이블 구조를 외부에 그대로 노출하지 않기 위해.
    * 화면에 필요한 데이터만 골라서 가공하기 위해.
    * 순환 참조 등 기술적 문제 방지.