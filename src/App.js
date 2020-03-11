import React from "react";
import useTabs from "./hooks/useTabs";

const content = [
  { tab: "Section 1", content: "I'am the content of the Section 1" },
  { tab: "Section 2", content: "I'am the content of the Section 2" }
];

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button key={section.tab} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
