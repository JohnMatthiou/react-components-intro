// import ViteIntro from "./pages/Viteintro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import Counter from "./components/Counter.tsx";
import NameChanger from "./components/NameChanger.tsx";
import {useEffect} from "react";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import CounterWithReducer from "./components/CounterWithReducer";
// import Todo from "./components/Todo/Todo.tsx";

function App() {

    useEffect(() => {
        const id: number = setInterval(() => console.log("tick"), 1000);
        return () => clearInterval(id);
    }, []);

  return (
    <>
        <Layout>
      {/*<ViteIntro />*/}
      {/*  <ClassComponent />*/}
      {/*  <FunctionalComponent />*/}
      {/*  <ArrowFunctionalComponent />*/}
      {/*  <ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props" />*/}
      {/*  <ArrowFunctionalComponentWithPropsType*/}
      {/*      title="Is an Arrow Functional Component with Props"*/}
      {/*      description="this is a description" />*/}
      {/*      <ClassComponentWithState />*/}

            {/*<FunctionalComponentWithState />*/}
            {/*<h1 className="text-center etxt-2xl font-bold">This is a heading title</h1>*/}
            {/*<FunctionalComponent />*/}
            {/*<Counter/>*/}
            <NameChanger/>
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterAdvancedWithCustomHook/>*/}
            {/*<CounterWithReducer />*/}
            {/*<Todo/>*/}
        </Layout>

    </>
  )
}

export default App
