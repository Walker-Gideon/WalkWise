import { useState } from "react";

export default function useNavigationAWidth() {
  const [adjustNavigationWidth, setAdjustNavigationWidth] = useState(false);

  return { adjustNavigationWidth, setAdjustNavigationWidth };
}
