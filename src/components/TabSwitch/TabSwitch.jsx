import { useState } from "react";
import {
  TabContainer,
  TabItems,
  Tabs,
  ActiveTab,
} from "./styles/TabSwitch.styled";

const TabSwitch = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [position, setPosition] = useState(0);

  const activeTab = (tab, index) => {
    setPosition(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <TabContainer>
      <TabItems>
        {data.map((tab, index) => (
          <Tabs
            $selectedtab={selectedTab}
            $index={index}
            onClick={() => activeTab(tab, index)}
            key={index}
          >
            {tab}
          </Tabs>
        ))}
        <ActiveTab style={{ left: position }} />
      </TabItems>
    </TabContainer>
  );
};

export default TabSwitch;
