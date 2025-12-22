import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Global } from '@emotion/react';
import { global } from './styles/global';

const queryClient = new QueryClient({ // 1. 큰 상자(객체) 생성
    defaultOptions: {                  // 2. 상자 안의 '기본설정' 칸
        queries: {                      // 3. 조회 기능에 대한 설정 
            retry: 0,                    // 4. 재시도 횟수는 0번 
        }
    }
});

const root = document.getElementById('root');    // root: 설계도 전체에서 id가 root인 구역을 찾아서 root변수에 넣어라 
createRoot(root).render(                         //root 도화지를 그리겠다.
    <QueryClientProvider client={queryClient}>  
        <BrowserRouter>     
            <Global styles={global} />
            <App />
        </BrowserRouter>
    </QueryClientProvider>
)


// createRoot(root).render(
//     <QueryClientProvider client={queryClient}>   {/* 1층: 데이터 관리 시스템 설치 */}
//         <BrowserRouter>                            {/* 2층: 페이지 이동 시스템 설치 */}
//             <Global styles={global} />            {/* 3층: 전체 디자인 입히기 */}
//             <App />                               {/* 4층: 실제 우리 앱 내용물 */}
//         </BrowserRouter>
//     </QueryClientProvider>
// )