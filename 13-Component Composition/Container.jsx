import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="app-container">
      <div>
        {title} <button onClick={handleToggleCollapse}>Toggle</button>
      </div>
      <div className={!collapsed ? "app-content" : "app-content-hidden"}>{children}</div>
    </div>
  );
}
