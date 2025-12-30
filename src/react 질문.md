생성과 관리를 개발자가 아닌 스프링에 넘긴다는 개념이 뭐야
객체의 생성은 필드가 존재할거고 기능이 있는 어떤 객체를 생성해야 해당 기능과 필드를 사용 할 수 있는데 그걸 스프링?(이 개념부터 가져가야 할 듯) 한테 넘긴다? 그럼 
스프링이 내가 필요한 필드가 뭔지 알고 어떤 기능이 필요한지 뭔지 알고 스프링이 알앗거 만들어준다는 거임? 그냥 알아서 경우의 수의 필요한 변수들을 모두 만들어놓고 내가 요청하면 주는건가
어쨋든 ioc가 객체를 내가 안만들고 남이 만들어주는건 알겠어

스프링 컨테이너에 대해서 보자면 내가 아까 말한 ioc개념의 추측이 스프링 컨테이너 개념인가?
근데 다양한 경우의 수의 객체들을 미리 만들어서 메모리에 띄워놓는다라고 얘기를 했는데 해당 객체는 빈깡통생성자를 얘기하는거야? 그리고 아까도 궁금한게 내가 어떤 필드의 어떤 기능이 필요한지 알고 미리 생성을 하는거야 당연히 객체를 생성할 만한 클래스가 적으면 괜찮은데 클래스가 많으면 메모리차지가 너무 많아지잖아 (그리고 메모리 개념도 살짝만 알려줘)
빈이라는 개념은 어쨋든 스프링 컨테이너에 다양한 객체들이 존재할건데 해당 객체들을 관리하는 직원이라는 말이지? @으로 필요한 클래스의 객체를 가져온다고 하면 bean이라는 놈이 컨테이너에서 가져와서 사서 같은 역활은 수행하는 직원이구나 

di 의존성주입
음 ioc가 스프링에게 객체요청을 하는데  예를 들어 controller라는 사장님을 요청을 하면 
@autowired라는 클래스의 객체가 순차적으로 필요로 하니까 bean이 controller라는 객체을 가져오는 동시에 autowired라는 객체도 같이 가져온다는 말이네

public class UserController {
    // 내가 직접 new 해서 만듦 (귀찮음, 수정 어려움)
    private UserService userService = new SamsungUserService(); 
    
    public void doWork() {
        userService.login();
    }
}
해당 클래스를 보자면 userController는 기능을 수행하는 클래스로 보여 userService안에  기능인 login()이라는 기능을 가지고 있을거고 그래서 객체를 controller라는 클래스 안에서 userservice객체를 생성하고 해당 기능수행 함수를 만들어주는거잖아
보통 이렇게 기능수행을 하는 클래스를 생성하는데
의존성주입이라는 개념을 장착을 하면 
@Controller // 1. 나 스프링 직원(Bean)이야!
public class UserController {

    @Autowired // 2. 여기에 맞는 직원(Bean) 하나 배달해줘! (주입)
    private UserService userService; 
    
    // new 키워드가 아예 사라짐!
    
    public void doWork() {
        userService.login(); // 그냥 쓰면 됨.
    }
}
    해당 부분까지는 기존의 코드랑 똑같은데 왜 @controller가 필요한지 의문
    @aurowried를 통해서 bean이 controller에 맞는 맞는 객체가 만들어져서 
    userService라는 객체를 생성하 할 수 있는거네
    그 뒤에는 dowirk()라는 기능을 만들어서 뭐 메인에서 실행 할 수 있겠지

        근데 생각을 해보면 왜 사용을 할까라는 의문이 드는데 한번 추측해볼게 
        autowried를 사용하면 controller라는 클래스에서 필요한 객체들을 생성해주니까 굳이 계속해서 다양한 new를 할 필요가 없어서 그런가
        
------------------------------------------

스프링부트
내가 짠 설계도라는건 그럼 인터페이스를 얘기하는건가? 해당 인터페이스의 기능을 보고 이런 객체가 필요하겠구나라는 추측? @Controller가 그 기능을 하는거고
컨테이너 창고에 넣는다고? 컨테이너창고에 있는 객체들을 가져오는게 아니고 나의 클래스를 보고?
점점 개념이 산으로 가는 것 같은데 일단 이부분부터 바로 잡고 가야겠다 일단 칸은 많이 사용안하고 싶으니까 꼭 필요한 설명만 간략히 ㄱㄱ

설계도는 클래스를 얘기하는거고 
스프링부트라는개념을 살짝 알려줘 쉽게 스프링이랑
추측이 아니라 그럼 스티커를 보고 객체를 만들어준다는 거잖아 그럼 이전에 설명해줬던 controller라는 객체를 생성하면 필연적으로 service객체가 필요하겠구나 라는 생각을 해서 내가 @autowired를 기입해서 service객체를 가져오는거네? 

@controller라는건 그럼 각 클래스위에 @controller를 내가 다는거고 컨테이너에 controller라는 스티커를 사용하면 usercontroller의 객체를 생성할 수 있게 주입하는 과정을 스티커로 만든거네 근데 @autowired는 내가 만든 스티커가 아니고 내가 만든 스티커의 필요한 스티커들을 객체로 만들어주는거네 //이것도 짧게 알려줘

--------------------------

스프링: 스티커를 인식해서 객체로 관리해주는 엔진 
컨테이너에 @를 사용하면 등록하는 과정이 필요로하며          
@aurowired라는 스티커를 사용해서 필요한 객체를 불러오는 배달시스템
ic.등록과 사용많이 있는데 @을 사용하여 등록하고 @autowrired라는 스티커를 가지고 배달받는다.

-- 정리 --
컨테이너에 넣는 행위 = ioc(제어의 역전) or 빈 등록
의존성주입(di): 컨테이너에 있는 걸 가져와서 내 코드에 꽂아주는 행위 그 자체

di를 사용하는 목적: 로직에 집중하게 해주는 것.

스프링부트: 필수 스티커들이 이미 제자리에 다 붙어있는 완성품


---------------------
싱글톤개념이 
원래라면 유저가 들어올때마다 객체를 생성해야 하는게 맞지만 싱글톤방식을 사용하면 
한번에 여러유저를 관리 한다는 말이네 그럼 이게 di라는개념 아니야? 컨테이너에 있는 객체생성 코드를 만들어서 객체를 만들어준다는 거니까

그래서 빈등록이라고 하는거구나 @controller을 사용해서 controller를 등록하잖아 해당 controller를 빈이라고 말하고 빈등록이라고 얘기를 하는거구나 

 어쨋든 Mouse라는 인터페이스를 가지고 mouse를 만들라고 하는데 만약 new를 붙인다고 하면
 나중에 해당 기능을 가진  mouse를 일일이 전부 교체를 해야 하지만 만약 di를 한다고 하면 @controller로 스티커를 등록하고 computer라는 클래스는 삼성과 로지텍의 객체가 필요하다고 판단이 되어 autowired스티커를 붙여서 객체를 생성한 후 
 mouse를 선언? private Mouse mouse하면 mouse가 생성이 되는거지? 해당 autowired에서는 
 보통은 그냥 필드선언으로  선언만하는 기능인데 di를 했으니 
 근데 너가 스프링 설정에서 이제부터 mouse는 logitech이야 라고 등록하는건 어디서 해주느거임? 아 그냥 스프링이 빈을 등록하는 엔진이니까 삼성 객체를 @이름을정해서 등록하면 되는거네 
 내가 살짝 의문인건 @samsung이 있을거고 @logitec이 있을건데 어떻게 computer라는 클래스를 생성할때 @auto스티커만 붙이면 내가 logi의 객체를 만들지 samsung이라는 객체를 만들지 전혀 모르는데 mouse선언만해도 맞춰서 객체를 만들어주니까 
 아니면 그냥 samsung을 원하면 @스티커를 삼성에만 달고 logi에는 안다는건가?
-----------------------------------------------------------------------

지금까지의 내용들을 정리해주는데 내가 궁금해해서 깨달았던것들 그리고 나의 파인만기법을 활용한 지금가지의 과정을 토대로 정리본을 만들어주면 될 것 같아 

 --------------------------------------

 스프링이란 ioc(빈 등록)을 해주는 엔진이고 컨테이너에 @를 사용해서 등록하는 과정이 필요로 
 하는데 그 과정을 ioc라고 하고 해당 빈을 들고오는 걸 di 의존성주입이라고 한다. 
 지금까지 배달 과정인 di를 배웟으니 배달받은 직원들이 어떻게 협업해서 일을 처리하는지를 볼 차례이다. 이구조를 계층형구조라고 부르고 백엔드 개발의 국룰
 스프링은 역할을 딱 3명에게 분담시킨다.

아 그니까 컨테이너에서 빈을 받아오는 di(autowired)를 해서 해당 클래스에서 받아오는데  그럼 보통 @autowired를 하면  controller, service, repository 이 세클래스객체가 만들어지는거야? 

그리고 내가 알아서 넘어가니까 이제 뭐 넘어가자 그딴말 하지마
 아 그니까 일단 처음에 방향을 잡는거에 따라서 autowired를 선언했을때 어떤 객체를 받을지가 정해지는거네 그니까 처음에 controller유형의 클래스를 만들면 그 클래스에 맞게 autrowired가 실행돼서 service그리고 또 auto스티커를 붙이면 repository의 객체를 컨테이너에서 가져오고 

 @RestController
public class UserController {
    @Autowired
    private UserService userService; // 주방장(Service)을 주입받음

    @PostMapping("/login")
    public String login(String id) {
        // "요리사님, 이 ID로 로그인 처리 해주세요." (토스)
        return userService.doLogin(id); 
    }
}
주문 받기: 손님(React)이 보낸 요청(URL, 파라미터)을 받습니다.
서빙 하기: 요리가 완성되면 손님에게 가져다줍니다 (JSON 응답).
주의: 절대 요리(로직)를 직접 하지 않습니다. 주문만 받아서 주방(Service)에 넘깁니다.

해당 부분부터 보자면 restcontroller로 해당 클래스를 ioc해두고 auto로 UserService 객체 생성 이후 @postmapping 이부분은 잘 모르겠다. 
추측: 일단 react에서 파라미터부분을 받아오는 것 같음 react가 화면이 즉각적으로 바뀌는걸 캐치하는 프로그램? 이라고 배웠으니 아마 화면이 즉각적으로 바뀌는 이벤트가 발생할텐데 그부분은 바로 id로그인 칸이겠지 해당 칸을 감지하여 리엑트는 id를 저장하고 그 id를 이제 백엔드로 넘겨줄텐데 그게 바로 public String login(String id)의 파라미터 부분이겠네
근데 해당 코드를 그냥 작성한다고 리엑트에서 받아오는게 아닌 어떤 매개채가 필요로 할텐데 그게 바로 @postMapping("/login") 부분이 아닐까! 
post뜻이 게시하다, 등록하다라는 뜻이잖아 그니까 등록한login칸의 텍스트를 매핑 즉 삽입한다는 어노테이션 스티커 기능인거네? 이건 스프링 기능인거야?(그렇다면 ioc말고도 이런 리엑트에서 가져오는 기능들 등 여러가지가 있는건가?) 어쨋든 받아와서 파라미터로 받으면 return 돌려주잖아 어디로? userService 객체로! 그 객체가 어떻게 생성이 됐냐? 당연히 
private UserService userservice를 한다음에 위에다가 @autowired를 달면 객체를 가져와서 해당 객체의 필드와 기능을 사용 할 수 있겠지!
그래서 userService.doLogin을 사용 할 수 있고 해당 부분에 파라미터로 받은 id를 넘겨줘서 
로그인이 맞는지 해당 객체의 기능에서 확인을 할 수 있는거고 그래서 자바가 객체지향프로그램이라는거고!

@postmapping이 스프링 기능이면 스프링웹이란게 이주소로 즉 login이라는 주소에 오는건 단 아이디나 비밀번호일거니까 해당주소에서 오는 post데이터를 받아서 스프링웹이 해당 코드로 받아오게 하는게  postmapping이라는 기능이고 이 기능은 스프링웹이라는 알맹이를 가지고있다는건가 

userService에다가 일을 시킨다라는 의미는 어쨋든 서비스객체를 가져왔으니까 dologin이라는 기능을 사용 할 수 있는거잖아 그래서 dologli에다가 id를 매개변수로 받으면(이렇게 매개변수로 무언가 받는다는 의미가 바인딩인가 이럴떄도 써도 되나?) return값인 ㅇㅇ 로근인 해도됨, ㄴㄴ로그인하지말고 홈화면으로 돌려보내 등등이 보내지겠노

----------------------------
2. Service (셰프 / 요리사) 👨‍🍳
어노테이션: @Service
위치: 주방 (중간).

역할: "비즈니스 로직" (핵심 업무) 수행.
"회원가입? 그럼 중복 아이디인지 확인하고, 비밀번호 암호화하고, 등급 설정해."
진짜 지지고 볶는 복잡한 일은 여기서 다 합니다.
재료가 필요하면 창고지기(Repository)에게 시킵니다.

3. Repository (창고지기 / 재료 담당) 📦
어노테이션: @Repository
위치: 식자재 창고 (맨 뒷단).

역할: DB(냉장고)와 대화하는 유일한 녀석.
"김철수 회원 정보 가져와", "이 글 저장해(save)".
고민 따위 안 합니다. 그냥 시키는 대로 넣고 꺼냅니다. (JPA가 여기서 쓰임)


지금 service 클래스를 보고 있는데 아까 말한 userService부분의 기능 중에 doLogin이라는 기능이 있을텐데 이부분은 id를 매개변수로 받아오면 판단하는 부분일거다 했던 그 부분이네

 일단 창고지기가 필요한 경우 repository를 받아오니까 일단 repository부터 보자
 해당 file은 클래스가 아니고 interface네 
 그리고 extends랑 implements 차이랑 개념 알려줘 짧게 

  implements를 지금 아는 상식선에서 말해보자면 구현하다는 의미로 implements 뒤에 오는 인터페이스는 구현을 하지 않은 실행버튼만 있는 함수인거야 그래서 implements를 달아서 
 새로운 구현 함수를 만드는거지 그러면 그 함수에서 구현을 시작하면 돼 implements는 그냥 껍데기 인거지 껍데기는 같은데 내용물은 다른 것들을 우리가 아까 뭐라했는지 기억이 안나네
 
 일단 extends를 내 상식선에서 이해하자면 확장이라는 단어이며 부모클래스에서 재정의(override)을하거나 기능을 추가할 때 사용하는 문법이야 
그래서 jpa...라는 리스트?(저거 리스트 아님? <User가 키값이고, Long이 벨류?>인 리스트이름이 jpa...이고)를 확장하는 UserRepository 기능을 만들거야 
db에서 찾아오는 sql이란 쿼리를 얘기하는건가? 
해당부분을 추축하고 service를 넘어가는건 위험하니가 일단 여기까지 기존요청사항에 따른 판단을 해봐

// 1. Controller (웨이터)
@RestController
public class UserController {
    @Autowired
    private UserService userService; // 주방장(Service)을 주입받음

    @PostMapping("/login")
    public String login(String id) {
        // "요리사님, 이 ID로 로그인 처리 해주세요." (토스)
        return userService.doLogin(id); 
    }
}

// 2. Service (요리사)
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository; // 창고지기(Repository)를 주입받음

    public String doLogin(String id) {
        // "창고지기야, 이 ID 가진 사람 있는지 찾아와." (재료 요청)
        User user = userRepository.findByUserId(id);
        
        // 요리(로직): 비밀번호 맞는지 검사, 없으면 에러 띄우기 등
        if (user == null) return "실패";
        return "성공";
    }
}

// 3. Repository (창고지기)
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // DB에서 찾아오는 SQL을 대신 짜줌 (JPA)
    User findByUserId(String id); 
}

그럼 <> 해당부분은 제네릭이라는건데 보통 <t>을 사용해서 데이터타입을 미리 정하지 않고 보통 객체생성할때 어떤 타입으로 정할지 자유도를 주기 위해서 사용하잖아
근데 <>해당부분에 t을 안넣고 User, Long을 넣는다? 그럼 그냥 ()부분에다가 미리 매개변수를 지정하는게 맞지 않나?
근데 일단 jpaRepository가 뭔지를 알아야 할 것 같음 
일단 db에서 User테이블을 가져오는 Long타입의 pk숫자다 라는건데 User라는 테이블에 다양한 컬럼이 있을텐데 어떻게 long이 주민번호인줄알고? prime key라서 그런가 <>해당 제네릭을 사용하면 무조건 pk를 가져오는건가? 아니면 그냥 데베에서 pk만 가져올 수 있는건가
어쨋든 user테이블에서 pk컬럼을 확장할거야 이름은 userRepository
아 시발 밑에 코드 이제 봤네 
user findbyUserid( String id )라서 user테이블의 id를 가져온거네 

User findByUserId(String id); 해당부분이 SELECT * FROM User WHERE id = ...이렇게 변화해서 어쨋든 jpa를 확장한거니까 jpa는 번역하는 해당부분의 번역을 할 수 있는거지 그래서 db에서 jpa를 통해서 User테이블의 long타입의 id를 가져올 수 있는거야 //짧게 ㄱㄱ

으흠 그럼 일단 내가 이해한대로 설명을 해볼게

jpa는 번역기이고 <>제네릭안은 User테이블의 long타입을 확장할거다 inter이니까 기능으로 나중에 다른 클래스에서 userRep를 사용하면 해당 기능을 사용할 수 있고 findby는 extends라는 코드만 사용하면 사용 할 수 있는데 해당 기능은 findbyUserid 즉 id를 찾아오는거야 그래서 자료형이 User이고 매개변수로 id를 받는거지 그래서 해당 코드를 작성하면 jpa를 통해 그리고 extends의 기능 findby를 통해 jpa가 User테이블에서 여러 컬럼 중 long타입의 id라는 컬럼을 가져오는거지