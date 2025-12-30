---- js 교정기 ----
클래스 (Class) = 설계도: 붕어빵 기계.
인스턴스 (Instance) = 실체: 기계에서 찍혀 나온 따끈따끈한 붕어빵.
인스턴스 변수 (Instance Variable) = 객체의 변수: 
    - 만들어진 붕어빵 안에 들어있는 팥(Value). 
    - (어떤 붕어빵은 슈크림이 들어있을 수도 있죠. 객체마다 다름!)
인스턴스 메서드 (Instance Method) = 객체의 함수
    - 만들어진 붕어빵이 하는 행동. (예: 붕어빵.식다(), 붕어빵.먹히다())
정적 메서드 (Static Method) = 기계의 기능 (핵심)
    - 기계 자체에 달린 버튼. (예: 기계.만들기(), 기계.온도조절하기())
    - 붕어빵이 만들어지기 전에도 기계는 이 기능을 가지고 있습니다.

--- '부품'이란 무엇인가? (객체 안의 객체) ---
api (객체) 안에는 여러 **프로퍼티(Property)**가 있다.
그 프로퍼티 중에는 문자열도 있고, 함수도 있고, **또 다른 객체(interceptors)**도 있다.
이때, interceptors처럼 객체 안에 들어있는 또 다른 객체를 우리는 개념적으로 "구성 요소(Component)" 혹은 **"모듈/부품"**이라고 부릅니다.

= (등호): 변수에 값을 넣을 때 씁니다.
const box = { ... } (변수 선언)

: (콜론): 프로퍼티를 정의할 때(객체 안에서) 씁니다.
target: { ... } (객체 내부의 키:값)

한 줄 요약:
혼자 있으면 변수(=), 객체 안에 들어 있으면 **프로퍼티(:)**입니다.

java: 
    DTO/VO: private String name; 처럼 필드만 잔뜩 있는 객체.
    Util Class: Math.max()처럼 함수만 잔뜩 있는 객체.
    그리고 필드와 함수가 같이 있는 Class 또한 존재한다.
Java Script: JS의 객체는 훨씬 자유롭다.
    const data = {name: "철수", age: 20} = 데이터 바구니 - 필드만 존재
    const caculator = { sum: (a,b) => a + b } = 계산기 - 함수만 있음
    물론 둘 다 섞어도 된다. 담구 싶은 대로 담는 바구니 라고 생각하면 된다.
js와 java의 구조파악: 설계도 라는 개념은 똑같은데 차이점은 
    - java는 설계도 안에 안적힌 건 절대 못넣어(엄격한 공장장)
    - js는 설계도에 없어도 나중에 막 갖다 붙여도 돼! (유연한, 혹은 대충 사는 공장장)

    java는 설계도에 미리 String name이라고 적어야지 this를 쓸 수 있다.
    js는 설계도에 안 적었어도 생성자(cunstructor)에서 this.어쩌구 하고 값을 넣는 순간
    그때 바로 필드가 생성된다.

인증 인가의 개념:
    인증: 너 누구야?
        -행동: 아이디/ 비번 치고 로그인하는 것
        -결과: 신분증을 발급 받음.
        -상황: 공항 입국 심사대에서 여권 보여주는 것.
    인가: 너 이거 할 수 있어?
        -행동: 글쓰기 버튼을 누르거나, 관리자 페이지에 들어가는 것.
        -과정: 어? 너 일반 회원이네? 관리자 페이지는 못 들어가.(403)
        -상황: 여권은 있지만, vip라운지에는 못 들어가는 것.
    코드 적용: config.headers.authorization에 토큰을 넣는 건 나 이구역에 들어갈 권한(인가)이 있는 사라이야 라고 증명하려고 신분증을 목에 거는 행위

접근: 우리는 객체의 안의 필드에도 함수에도 객체안의 객체에도 접근을 한다
    ex. api.intercepters.request
    interceptors를 비유하자면 자동차의 부품 혹은 장치라고 부르는게 적절하다.
         그 부품이 하는 일이 검문소라는 기능이고

라이브러리 개념: 남들이 미리 힘들게 짜놓은 코드 모음집(도구함) 이다.
    ex. axios는 누군가가 야 통신 코드는 내가 기깔나게 짜놨으니까 너네는 가져다 쓰기만 해
    - 우리는 import axios하는 순간 그 도구함을 내 작업장으로 가져온 겁니다.

export: 수출 내보내기로 js의 public과 같은 개념
const: 자료형이 아니라 변수를 만든느 방식(키워드)이다. ; 자바비유: final이다. 이 변수는 한 번 값을 넣으면 못 바꾼다.

config: 구성, 설정, 환경설정을 뜻 한다.
객체 {} 의 구조: 자바의 객체는 보통 메서드와 필드가 같이 있다.
    - 하지만 js객체 {}은 자바의 Map(HashMap)과 더 비슷하다.
        - java에서의 Map(HashMap): 
            HashMap<String, String> config = new HashMap<>();
            config.put("baseURL", "http://localhost:8080");
        해당형식으로 태그안에는 키와 값으로 이루어져 있다.
        - js식 hashMap은 그냥 객체를 뜻 한다. 
            const config = {
                baseURL: "http://localhost:8080" };
- 해당 구조를 js에서는 object Literal이라고 부르는데 사실상 자바의 map과 똑같이쓰인다.
- 그냥 데이터를 담는 바구니이다. 함수없이 필드만 담아도 완벽한 객체이다.




    hashmap 개념: *<>제네릭 안에 다른 타입이 가능하다*
    MAP: 지도(interface)라는 개념 (규칙)
    HashMap: 지도를 실제로 만든 책(Class)이다. (실체)
    보통 Map<...> 변수 = new HashMap<>(); = 
        껍데기는 Map규칙 알맹이는 hashmap기술사용
    - <>제네릭 안에 다른 타입 가능하다 <key 자료형, value 자료형> 순서
    - 기준: 앞에게 무조건 Key(찾을 때 쓰는 단어), 뒤에게 무조건 Value(나오는 뜻이다.
            

    

()개념: api.get은 버튼 그 자체이고, api.get()은 버튼을 꾹 눌러서 발사 하는 행동이다.

정적(Static) vs 동적(Instance) 메서드: 
    - 정적메서드(Static): 설계도(class) 자체에 붙어 있는 기능 이라는 말.
        ic. class이름이 axios이고 create()가 그 클래스 안의 기능일 경우 create가 정적메서드
    - 동적메서드(Instance Method): 만들어진 실체가 가진 기능.
        - 공장이 달리는 게 아니라, 공장이 만들어준 내 차가 달리는 것
        ic. 정적메서드인 자동차공장.create()을 사용하여 car가 생성이이 되면 car라는 실체의 기능 car.get()을 하면 공장에서 만든 실체가 달려버리는 기능 = 동적메서드

axios.config의 api = axios.create({baseURL: "http://localhost:8080",}):
    - 해당 매개변수로 url이 든 객체를 주면 어떤게 return되는가에 대해
    - "모든 기능이 다 들어있는 axios 인스턴스(복제본)을 돌려준다.
    - axios.create 함수는 단순히 url 문자열을 저장만 하는게 아니다.
    - 야 내가 가진 기능(get, post, delate, interceptors)을 전부 복사해서 새 로봇(객체)을 하나 만들어 근데 그 로봇의 기본목적지(baseURL)가 설정된 상태로 조립해.
    - 그래서 리턴된 api변수 안에는: 
        -설정된 baseURL(데이터), 통신기능 get(), post()(함수), 검문소 기능 interceptors(객체) 이 모든게 꽉 채워진 세트가 들어있다.
    - api라는 자동차 안의 구조는 api(자동차); get(함수: 달리기); 
        interceptors(객체: 하이패스 단말기)    
            request(요금소 들어갈 때 처리)
            response(요금소 나올 떄 처리)
        우리가 api.interceptors.request.use()을 코딩하는 건 하이패드 단말기에 내 신용카드 정보를 등록하는 과정이다 그래야 톨게이트를 지날 때 자동으로 결제(인증)이 되니까 

    
api.interceptors.request.use( () => {}); 
중 api.으로 접근를 할 수 있는 비밀: 
    api에 axios를 넣었으니 api는 기본적으로 axios 원본의 유전자를 물려 받은 새로운 자식객체가 태어난다. ic. api라는 변수는 아빠인 axios한테 물려받은 interceptors라는 장치가 들어있다. 그래서 api.interceptors라고 찍어서 
    해당 장치에 접근한다.

접근의 비밀:
    .이름() = 뒤에 괄호가 있으면 무조건 함수
    .이름 = 뒤에 괄호가 없으면 무조건 변수(필드,객체)
config의 정체:
    config는 요청 보따리 (객체) 안에는 url, 메서드(get, post) 그리고 headers같은 정보가 있다.
그래서 config는 유저정보라기보다는 서버에 보낼 편지 봉투라고 생각해야 

const config = {
    method: 'get',
    url: '/posts',
    headers: {  // 여기가 headers 객체!
        Authorization: "", // 여기에 토큰을 넣을 예정
        ContentType: "application/json"
    }
}

그래서 api 변수의 실제 모습 (상상도) 를 보자면 ->
    const api = {
        defaults: { baseURL: "http://localhost:8080" }, // 아까 넣은 설정값
        get: function() { ... },  // 물려받은 통신 기능
        post: function() { ... }, // 물려받은 통신 기능
        interceptors: {           // 물려받은 검문소 장치!
            request: { use: ... },
            response: { use: ... }
        }};

백틱(`): ""라는 문자열 변수와 섞을때 + 기호를 써야하는 불편해서 사용 
    - ex. ("Bearer " + accessToken) ->`Bearer ${accessToken}`
    - ${}가 변수가 들어갈 구멍이다.
    -`Bearer ${accessToken}` = bearer라는 글자 뒤에 accesstoken 변수에 든 
        값을 붙여라.

bearer: 약속된 암호 = Bearer 토큰이야"라고 명찰을 달아주는 겁니다.

headers의 정체: config 객쳉 안에 있는 또 다른 작은 객체(변수)이다

님의 질문: "interceptors도 객체고... 결국 부품에 접근하기 위해 .을 쓰는 거네? axios 고유 필드도 있고 부품 필드도 있고?"

api.interceptors : api 의 interceptors 부품.

const axiosInstance = {
    // [1] 고유 필드 (Property)
    defaults: { baseURL: "http://..." }, 

    // [2] 부품 객체 (Property인데 내용물이 객체)
    interceptors: { 
        request: { use: function(){} }, // 부품 안의 기능(메서드)
        response: { use: function(){} }
    },

    // [3] 고유 기능 (Method)
    get: function(url) { ... },
    post: function(url) { ... }
}

    - defaults는 axios가 가진 고유 필드입니다.
    - interceptors는 axios 안에 장착된 **부품(객체)**입니다.
    - request는 그 부품 안의 세부 부품이고,
    - use는 그 세부 부품이 가진 **기능(함수)**입니다.

** 객체 안에 있는 **변수(필드)**를 JS에서는 **"프로퍼티 (Property)"**라고 부릅니다.
객체 안에 있는 함수를 JS에서는 **"메서드 (Method)"**라고 부릅니다. **

--- 객체안의 객체
const box = {         // box는 '변수' 내요물이 변수, 객체
  name: "상자",       // name은 '프로퍼티'
  item: {             // item도 '프로퍼티' (근데 내용물이 객체)
    color: "red"      // color는 item 객체 안의 '프로퍼티'
  }
}
    box는 변수다: 맞습니다. 객체라는 큰 덩어리를 담고 있는 그릇(이름표)입니다.
    그 안에는 Key: Value가 있다: 맞습니다. 이걸 자바스크립트에서는 **프로퍼티(Property)**라고 부릅니다.
    Value가 또 다른 객체일 수 있다: 맞습니다. 그래서 **"객체 안의 객체"**라는 말이 성립합니다


리엑트: 렌더링을 위한 코드 ic. 데이터가 바뀔 때 화면을 자동으로 다시 그려주는 도구
    -react는 spa방식이라 index.html 하나 뿐 이다. 

js: 브라우저를 움직이게 하는 근육(연산, 데이터처리) 역할이다.
jsx: js코드 안에서 html태그 처럼 생긴 걸 쓰고 싶다 해서 만든 리엑트 정용 문법.

main.jsx: 브라우저는 원래 jsx를 못 읽는다. 그래서 main에서 브라우저가 이해 할 수 있는 순수한 js로 변환하여 뿌려주는 최종 조립 공장 역할.

html: HTML 태그는 **"이 부분은 제목이야", "여기는 그림이 들어갈 자리야"**라고 브라우저에게 알려주는 설계도와 같다.

---mian.jsx---
browser: 크롬, 사파리, 네이버 와 같은 프로그램을 말한다. 
browserRouter: 주소창이 .../login으로 바뀌면, 해당 페이지 전체를 새로고침하는 게 아니라 주소 바뀌었네? 그럼 내가 가진 함수 덩어리들 중에서 로그인 화면 함수를 꺼내서 도화지에 그려야지라고 판단하고 감시하는 장치.

document: 브라우저가 읽어들인 index.html(설계도 전체)문서 해당 html안의 큰 도화지(div)의 id를 root로 설정 
    - document.getElementById('root')는 설계도 전체에서 id가 root인 구역 즉 도화지를 찾아라 라는 코드 -

grobal(앱전체): 백화점 모든 매장의 바닥재나 조명을 통일하는 것 처럼 어느 페이지를 가든 똑같은 디자인 스킨을 입히는 것 이다.

main에서 queryClient와 같은 구조를 가진 이유는 계층 구조를 만들어 데이터조회하는 기본옵션 중의 재시도 횟수 라고 명확히 정의 해주기 위해서이다.

<main /> 형식은 사실 functon main() {...}이라는 함수를 실행하라는 뜻이다. 
    - 그리고 props는 해당 태그 안에 = {} 형태로 표시 되어 있고 매개변수이다.
    - ex. <QueryClientProvider client={queryClient}> 중에서 
    client는 매개변수 이름이고, {}은 설정값(인자)이다.

cf. 데이터는 해당 데이터센터가 지어지고 난 뒤, 나중에 aixios나 fetch라는 통신 도구를 
    통해 서버에서 가져와서 저장하게 된다.


---app.jsx---
App.jsx: 내부인테리어 와 출입 통제 시스템을 당당.
    <MainLayout>은 백화점 공통 인테리어 (복도, 화장실, 엘리베이터 등)이다.
        - 왜 해당 태그로 감싸져 있냐면 로그인페이지나 홈화면이든 상관없이 항상 똑같이 보여야 하며 요소를 한 번만 정의해두고 돌려쓰기 위함.
        - ic. mainlayout이 고정 된 채로 어떤 페이지로 이동하던 알맹이만 바뀌는 형식

{/* <Loading /> */}: 백엔드에서 데이터를 가져올 때 로딩화면을 보여주기 위함

AuthRoute(핵심 로직): 사용자가 주소를 입력하고 들어올때 로그인했는지 감시하는 경비원 
    -login을 했다면 home으로 출입 안했다면 login.jsx로 쫒아냄.
    - **AuthRoute.jsx 파일 안에 백엔드와 프론트엔드가 처음으로 만나는 검문소가 등장한다.**


---AuthRoute.jsx (경비실)---
import는 언제, 왜 할까?: 함수(login,home같은 화면을 그리는 함수)사용하기 위해서
    - 기능사용: useEffect같이 리엑트가 제공하는 특별한 기능을 위해
    - 외부 파일 연결: jpg(이미지), 스타일(css), 설정값(js)을 현재 파일에서 사용하기 위해
    * 비유: java에서 다른 패키지의 클래스 쓸 때 import하는 것과 같은 개념 *

meQuery.isLoding: 지금 데이터를 가져오는 중인가?라는 질문에 대한 상태( t/f)
meQuery.data: 가져오다가 사고가 났는가? 라는 질문에 대한 상태 (t/f)

const { isLoading, data } = meQuery; 해당 구조를 사용하는것에 대하여
    - 원래같으면   const isLoading = meQuery.isLoading; // 1번 꺼내기
                const data = meQuery.data;           // 2번 꺼내기
            이렇게 mequery라는 객체가 있고 그안의 상태를 사용하기 위해서 일일이 선언하는 걸 한줄로 줄인거야.

        
            

