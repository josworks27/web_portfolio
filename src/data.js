export default {
  // Header
  // About Me

  // Work
  projectData: [
    {
      id: 0,
      title: '구독형 거주 서비스 Billy Zip',
      period: '2020.01.31 ~ 2020.02.25',
      description:
        'Billy Zip은 새로운 개념의 구독형 주거 서비스 제공하는 모바일 어플리케이션 프로젝트 입니다. 이사할 때마다 전세? 월세? 보증금? 계약은 어떻게...? 부동산 매물마다 너무 복잡하지 않으신가요? Billy Zip을 이용하면 부동산 또는 집주인과의 번거롭고, 복잡한 계약 관계없이 살고 싶은 곳이 있으면 예약 후 마음 편히 거주할 수 있는 서비스입니다.',
      type: 'Mobile Application',
      role: 'Full-Stack, Team Leader',
      feature: [
        'Typescript & Express로 REST API를 구축하여 하우스, 리뷰, 유저의 CRUD 구현',
        'JWT 토큰 인증 과정을 Express Middleware로 하는 인증체계 구축',
        'Twilio Programmable SMS API를 이용한 인증번호 문자 전송 및 인증확인 모듈 구축',
        'Socket.io를 이용해 유저 to 호스트, 유저 to 유저간 의사소통이 가능한 실시간 채팅기능 구현',
        'TypeORM의 Active Record 방식의 DB 제어와 자체 알고리즘으로 하우스 검색기능 구현',
      ],
      techStack: [
        { part: 'Common', stack: 'TypeScript, Node.js' },
        {
          part: 'Front-end',
          stack:
            'React Native(EXPO), React Hooks, React Navigation, React Native Elements, Axios, Google Maps API',
        },
        {
          part: 'Back-end',
          stack: 'Express.js, TypeORM, JWT, Twilio, Multer, Bcrypt, MySQL',
        },
        {
          part: 'Dev Tools',
          stack: 'Git, AWS(S3, EC2, RDS), Postman, TablePlus',
        },
      ],
      imgSrc: 'https://jo-portfolio.s3.ap-northeast-2.amazonaws.com/billyzip_logo.png',
      github: [
        {
          part: 'Client',
          url: 'https://github.com/josworks27/BillyZip_CLIENT',
        },
        { part: 'Server', url: 'https://github.com/josworks27/BillyZip_SERVER' },
      ],
    },
    {
      id: 1,
      title: '산책로 관리 서비스 Stroll',
      period: '2020.01.13 ~ 2020.01.23',
      description:
        'Stroll은 산책로를 추천 받고 추가도 할 수 있는 웹 기반 산책로 관리 서비스입니다. 본 서비스는 자신이 좋아하는 산책로를 다른 사람에게 공유하고 함께 만끽할 수 있도록 하는데 목적을 두고 있습니다.',
      type: 'Web Application',
      role: 'Back-end, Team Member',
      feature: [
        'Javascript & Express로 REST API 구현 및 HTTP에 적합한 라우터 구조 구축',
        'Sequelize를 이용하여 불필요한 코드를 최소화하고 DB 모델 간의 관계성 설정 및 DB Schema 구축',
        'JWT & LocalStorage로 자동로그인 기능을 구현하여 반복적인 로그인 과정 최소화',
        'AWS RDS와 EC2로 팀원 간의 테스트 환경 구축 및 클라우드 배포',
      ],
      techStack: [
        { part: 'Common', stack: 'JavaScript, Node.js' },
        {
          part: 'Front-end',
          stack: 'React, React-router-dom, Ant-design, Axios, Kakao Maps API',
        },
        {
          part: 'Back-end',
          stack: 'Express.js, Sequelize, JWT, Multer, Crypto, MySQL',
        },
        {
          part: 'Dev Tools',
          stack: 'Git, AWS(S3, EC2, RDS), Postman, TablePlus',
        },
      ],
      imgSrc: 'https://jo-portfolio.s3.ap-northeast-2.amazonaws.com/stroll_logo.png',
      github: [
        {
          part: 'Client',
          url: 'https://github.com/josworks27/STROLL_client',
        },
        { part: 'Server', url: 'https://github.com/josworks27/STROLL_server' },
      ],
    },
  ],

  // Contact
  contactEmail: 'josworks27@gmail.com',
  social: [
    {
      name: 'Github',
      url: 'https://github.com/josworks27',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/josworks27',
    },
    {
      name: 'Blog',
      url: 'https://velog.io/@josworks27',
    },
  ],
};
