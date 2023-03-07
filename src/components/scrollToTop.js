import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLayoutEffect } from 'react';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default ScrollToTop;
