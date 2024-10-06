import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const sidebarItems = [
    { icon: <ChevronFirst />, text: 'Home', active: false, alert: false },
    { icon: <ChevronLast />, text: 'Discovery', active: true, alert: true },
    { icon: <MoreVertical />, text: 'Library', active: false, alert: false },
  ];

  return (
    <div className="relative">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white h-screen transition-all duration-300 ${
          expanded ? 'w-64' : 'w-16'
        } hidden md:block flex-shrink-0`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className={`text-2xl ${expanded ? 'block' : 'hidden'}`}>
            perplexity
          </h2>
          <button onClick={() => setExpanded(!expanded)} className="text-white">
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Sidebar Items */}
        <ul className="space-y-4 p-4">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              active={item.active}
              alert={item.alert}
              expanded={expanded}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
}

function SidebarItem({ icon, text, active, alert, expanded }) {
  return (
    <li
      className={`flex items-center py-2 px-3 transition-colors ${
        active ? 'bg-gray-700' : 'hover:bg-gray-600'
      }`}
    >
      {/* Icon */}
      <span>{icon}</span>

      {/* Text (shown only when expanded) */}
      {expanded && <span className="ml-4">{text}</span>}
    </li>
  );
}
