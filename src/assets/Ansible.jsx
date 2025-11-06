const Ansible = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.794a.6.6 0 01-.518.294H6.95a.6.6 0 01-.518-.294.6.6 0 01.518-.906h10.1a.6.6 0 01.518.906zM12 18a6 6 0 110-12 6 6 0 010 12z"
        fill="#EE0000"
      />
      <circle cx="12" cy="12" r="4" fill="#FFFFFF"/>
      <path
        d="M12 10l2 4h-4l2-4z"
        fill="#EE0000"
      />
    </svg>
  );
};

export default Ansible;
