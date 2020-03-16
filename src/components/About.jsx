import React from 'react';
import Slide from 'react-reveal/Slide';
// import data from '../data';

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <Slide right cascade>
        <div>
          <div>주니어 개발자로서의 새로운 길을 만들어 가고 있습니다.</div>
          <div>
            지속적으로 성장가능한 개발자는 유저의 관점에서 웹을 바라보며,
            자신만의 기획을 구현해 나가는 개발자라고 생각합니다.
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
