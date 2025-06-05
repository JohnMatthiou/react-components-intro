// import ViteIntro from "./pages/Viteintro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Layout from "./components/Layout.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import {useEffect} from "react";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import CounterWithReducer from "./components/CounterWithReducer";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import Todo from "./components/Todo/Todo.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";

function App() {

    // useEffect(() => {
    //     const id: number = setInterval(() => console.log("tick"), 1000);
    //     return () => clearInterval(id);
    // }, []);

  return (
    <>
        {/*<Layout>*/}
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
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterAdvancedWithCustomHook/>*/}
            {/*<CounterWithReducer />*/}
            {/*<Todo/>*/}

            {/*<OnlineStatus/>*/}
        {/*</Layout>*/}

        <BrowserRouter>
            {/*<Layout>*/}
                <Routes>
                    {/*<Route path="/" element={<HomePage />} />*/}
                    <Route element={<RouterLayout />}>
                        <Route index element={<HomePage />} />
                    </Route>
                    {/*<Route path="examples?" element={<ExamplesPage />}>*/}
                    <Route path="examples" element={<RouterExamplesLayout/>}>
                        <Route index element={<ExamplesPage />}/>
                        <Route path="name-changer" element={<NameChangerPage />} />
                        <Route path="online-status" element={<OnlineStatusPage />} />
                    </Route>
                    <Route path="users/:userId" element={<UserPage />}/>
                    {/*<Route path="files/*" element={<FilePage />}/>*/}
                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>

    </>
  )
}

export default App
