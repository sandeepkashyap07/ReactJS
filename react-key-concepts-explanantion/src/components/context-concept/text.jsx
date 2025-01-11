import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextTextComponent() {
  /* here we are consuming the value of the global state where the
     globalcontext provided the values */
  /*here the exported globalcontext is used in usecontext */
  const { theme } = useContext(GlobalContext);

  return (
    <h1
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "blue" : "yellow",
      }}
    >
      sandeep kashyap
    </h1>
  );
}
export default ContextTextComponent;
