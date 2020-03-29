import React from 'react';
// import Fade from 'react-reveal/Fade';
// import data from '../data';

function Skill() {
  return (
    <div>
      <h1>Skills</h1>
      <div className="Skill-content">
        <div className="Skill-wrap">
          <div className="Skill-title">Strong</div>
          <div className="Skill-list">
            <ul>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <div className="Skill-wrap">
          <div className="Skill-title">Experienced</div>
          <div className="Skill-list">
            <ul>
              <li>TypeScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Sequelize</li>
              <li>TypeORM</li>
              <li>MySQL</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
        <div className="Skill-wrap">
          <div className="Skill-title">Tools</div>
          <div className="Skill-list">
            <ul>
              <li>Slack</li>
              <li>GitHub</li>
              <li>Visual Studio Code</li>
              <li>Postman</li>
              <li>TablePlus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
