import styled from "styled-components";
import { navigate } from "vite-plugin-ssr/client/router";

export { Page };

const Div = styled.div`
  background: #f00;
`

function Page() {
  return (
    <>
      <Div>Sample Page</Div>

      <div>
        <button onClick={() => navigate("/")}>index</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/sample")}>Sample</button>
      </div>
    </>
  );
}

