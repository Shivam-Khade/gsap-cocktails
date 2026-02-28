import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap/gsap-core.js";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="text-indigo-400 h-[100vh] flex-center">Hello GSAP</div>
  )
}

export default App