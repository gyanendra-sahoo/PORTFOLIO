import useLocomotive from "../hooks/useLocomotive.js";

const ScrollWrapper = ({ children }) => {
    useLocomotive();

  return (
    <div data-scroll-container className="overflow-hidden">
      {children}
    </div>
  );
};

export default ScrollWrapper;
