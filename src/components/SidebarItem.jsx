const SidebarItem = ({ icon, text, active, alert, expanded }) => {
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
};

export default SidebarItem;
