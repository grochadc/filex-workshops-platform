import { useEffect, useState } from "react";

const useToggle = initialValue => {
  const [value, setValue] = useState(initial);
  useEffect(() => setValue(!value));
  return [value];
};
