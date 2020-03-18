import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div>
      <h1>
        <Fade bottom cascade>
          About Me
        </Fade>
      </h1>
      <Slide right cascade>
        <div>
          <div>반갑습니다. 주니어 웹 개발자로서 새로운 길을 만들어 가고 있는 조성철이라고 합니다.</div>
          <div>
            지속적으로 성장가능한 개발자는 「유저의 관점에서 웹을 바라보며,
            자신의 기획을 구현해 내는 개발자」 라고 생각합니다.
          </div>
          <div>
            자기주도적으로 새로운 기술을 배우는걸 좋아하여 러닝커브가 짧은
            편입니다.
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default About;
