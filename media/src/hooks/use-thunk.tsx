import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
export function useThunk(thunk: any) {
  const [isLoading, setIsloading] = useState(false);
  const [error, setErorr] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg: any) => {
      setIsloading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err: any) => setErorr(err))
        .finally(() => setIsloading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}
