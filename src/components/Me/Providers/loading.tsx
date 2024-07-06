import type { ReactNode, FC } from "react";

const Loading: FC = (): ReactNode => {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}>
      loading...
    </main>
  );
};

export default Loading;
