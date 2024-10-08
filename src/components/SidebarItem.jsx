const SidebarItem = ({ icon, text, active, alert, expanded }) => {
  return (
    <li
      className={`flex items-center py-2 px-3 transition-colors ${
        active ? 'bg-gray-700' : 'hover:bg-gray-600'
      }`}
    >
      <span>{icon}</span>

      {expanded && <span className="ml-4">{text}</span>}
    </li>
  );
};

export default SidebarItem;
