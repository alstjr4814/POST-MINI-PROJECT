function OpenApiModal() {
    return <></>
}

export default OpenApiModal;


// 1. 규격서 (Interface): "마우스라면 클릭 기능은 무조건 있어야 해!" (껍데기)
interface Mouse {
    void click(); // 내용은 없음(Abstract). 그냥 약속임.
}

// 2. 부품 A (삼성)
class SamsungMouse implements Mouse {
    public void click() { System.out.println("삼성 기술로 딸깍!"); }
}

// 3. 부품 B (로지텍)
class LogitechMouse implements Mouse {
    public void click() { System.out.println("로지텍 감성으로 철컥!"); }
}

// 4. 사용자 (Main)
Mouse myMouse = new SamsungMouse(); // 삼성 거 쓰다가
myMouse.click();

myMouse = new LogitechMouse(); // 로지텍으로 부품만 싹 갈아 끼움!
myMouse.click(); // 코드는 그대로인데 작동 방식이 바뀜 (다형성)