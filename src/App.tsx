import React from 'react';
import './App.scss';
import type { Property } from 'csstype'

//import { SlideTree } from "./skillData";
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
  NodeSelectEvent,
} from "beautiful-skill-tree";
import { SlideTree } from './testSkillData';
//import { SlideTree } from './skillData';

function App() {

  const divStyle = {
    backgroundColor: 'red',
    display: "flex",
    flexWrap: "wrap"
  };

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <div className="rightSideBar">


      <div className="Container" >

        <SkillProvider >
          <SkillTreeGroup
            theme={{
              borderRadius: '20px',
              treeBackgroundColor: 'brown'
            }}>
            {({ skillCount, handleFilter }) => (
              <>

                <div >
                  <div className="filter">
                    <input
                      style={{ height: '32px' }}
                      onChange={e => handleFilter(e.target.value)}
                      placeholder="Filter through trees..."
                    />
                  </div>
                  <div className="first-tree-style" >
                    <SkillTree
                      treeId="first-tree"
                      title="Slide Tree"
                      data={ SlideTree }
                      collapsible
                      description=""
                    />
                  </div>
                </div>
              </>
            )}
          </SkillTreeGroup>
        </SkillProvider>
        <div className="rightSideBar">
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
