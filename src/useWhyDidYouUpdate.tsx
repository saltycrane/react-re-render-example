// copied from
// https://github.com/devhubapp/devhub/blob/c861cb6c8d0f3c78b24004cfe23df55934cd3ca4/packages/components/src/hooks/use-why-did-you-update.ts
import { useEffect, useRef } from "react";

export default function useWhyDidYouUpdate(
  name: string,
  props: Record<string, any>,
) {
  const latestProps = useRef(props);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    const allKeys = Object.keys({ ...latestProps.current, ...props });

    const changesObj: Record<string, { from: any; to: any }> = {};
    allKeys.forEach((key) => {
      if (latestProps.current[key] !== props[key]) {
        changesObj[key] = { from: latestProps.current[key], to: props[key] };
      }
    });

    if (Object.keys(changesObj).length) {
      console.info("[useWhyDidYouUpdate]", name, changesObj);
    }

    latestProps.current = props;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, Object.values(props));
}
