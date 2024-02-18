import React, { useState } from 'react'
import TabTitle from '../components/Dashboard/TabTitle';
import LearnTab from '../components/Dashboard/LearnTab';
import LibraryTab from '../components/Dashboard/LibraryTab';
import CompletedTab from '../components/Dashboard/CompletedTab';
import Logo from '../components/Logo';

function Dashboard() {
    const tabs = [
        { id: 1, title: "Learn"},
        { id: 2, title: "Library" },
        { id: 3, title: "Completed"}
      ];
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
  return (
    <>
    <div className='flex flex-col items-start p-4'>
        <h1 className='db-title'>Your <br/> Learnings</h1>
        <div className='flex flex-row w-full justify-evenly my-4'>
            {tabs.map(tab=><TabTitle key={tab.id} title={tab.title} onClick={()=>handleTabClick(tab.id)}
             activeClass={activeTab==tab.id?"active-tab":"inactive-tab"}/>)}
        </div>
        <div className='flex flex-row justify-center w-full'>
            {activeTab==1 ? <LearnTab/> : 
            activeTab==2 ? <LibraryTab/> : 
            <CompletedTab/>}
        </div>
    </div>
    <Logo /></>
  )
}

export default Dashboard