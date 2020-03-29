import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div className="About-top">
      <h1>About Me</h1>
      <div className="About-content">
        <div className="About-left">
          <p>안녕하세요.</p>
          <p>
            <span>
              웹을 통해 도시에서의 삶을 바꿔 나가고 싶은 주니어 웹
              개발자
            </span>
            <span> 조성철 </span>
            <span>이라고 합니다.</span>
          </p>
          <p>
            <span>개발자로서 저의 철학은 </span>
            <span>
              「유저의 관점에서 웹을 바라보며, 자신의 아이디어를 구현할 수 있는
              개발자가 되자」
            </span>
            <span> 입니다. </span>
            {/* <span>
              이를 위해, 개발 공부를 게을리하지 않고 있으며 자기주도적으로
              새로운 기술을 배우고 있습니다.
            </span> */}
            <br />
          </p>
          <p>
            저의 장점으로는 동료와의 원활한 커뮤니케이션과 새로운 기술에 대한
            러닝커브가 짧다는 점을 말씀드릴 수 있습니다.
          </p>
          <p>
            프론트엔드와 백엔드 모두 흥미를 느끼고 있으며, 도시 내 공공 데이터를 이용한 웹 서비스 구현에 관심이 많습니다.
          </p>
        </div>
        <div className="About-right">img</div>
      </div>
    </div>
  );
}

export default About;
