import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div className="About-top">
      <h1>About Me</h1>
      <div className="About-content">
        <div className="About-left">
          <p>
            <span>
              반갑습니다.
              <br />
              웹을 통해 도시에서의 삶의 질을 향상시키는 것이 목표인 주니어 웹
              개발자
            </span>
            <span> 조성철 </span>
            <span>이라고 합니다.</span>
          </p>
          <p>
            <span>개발자로서 저의 철학은 </span>
            <span>
              「유저의 관점에서 웹을 바라보며, 자신의 아이디어를 구현할 줄 아는
              개발자가 되자」
            </span>
            <span> 입니다. </span>
            <span>
              이를 위해, 개발 공부를 게을리하지 않고 있으며 자기주도적으로
              새로운 기술을 배우는 것을 즐기고 있습니다.
            </span>
            <br />
          </p>
          <p>
            저의 장점으로는 동료와의 원활한 커뮤니케이션과 새로운 기술에 대한
            러닝커브가 짧다는 점을 말씀드릴 수 있습니다.
          </p>
        </div>
        <div className="About-right">img</div>
      </div>
    </div>
  );
}

export default About;
