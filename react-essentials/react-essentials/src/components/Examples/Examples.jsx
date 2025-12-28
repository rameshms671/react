import './Examples.css';
import Button from "../Button/Button";
import TabContent from "../TabContent/TabContent";
import Section from "../Section/Section";
import { EXAMPLES } from "../../data";
import { useState } from "react";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <Section className="examples" title="Examples" ButtonContainer="menu" buttons={
      <>
        <Button onClick={() => setSelectedTab('components')} className={selectedTab === 'components' ? 'active' : undefined} >Components</Button>
        <Button onClick={() => setSelectedTab('jsx')} className={selectedTab === 'jsx' ? 'active' : undefined}>JSX</Button>
        <Button onClick={() => setSelectedTab('props')} className={selectedTab === 'props' ? 'active' : undefined}>Props</Button>
        <Button onClick={() => setSelectedTab('state')} className={selectedTab === 'state' ? 'active' : undefined}>State</Button>
      </>
    }>
      {!selectedTab && (<p>Please select a topic</p>)}
      {selectedTab && (
        <div class="tab-content">
          <TabContent {...EXAMPLES[selectedTab]} />
        </div>
      )}
      
    </Section>
  );
}