self.addEventListener('install', (e) => {
  console.log('서비스 워커 설치됨');
});

self.addEventListener('fetch', (e) => {
  // 앱이 작동하도록 요청을 가로채는 척만 합니다.
});