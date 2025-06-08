function Trash(props) {
  return (
    <svg
      {...props}
      className="w-[20px] h-[20px] text-gray-800 dark:text-white"
      aria-hidden="true"
      width="20px"
      height="20px"
      fill="none"
      style={{ cursor: "pointer", color: "#F43F5E" }}
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
      />
    </svg>
  );
}

export default Trash;
