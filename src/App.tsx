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
// import HomePage from "./pages/HomePage.tsx";
// import NameChangerPage from "./pages/NameChangerPage.tsx";
// import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
// import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
// import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
// import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
// import NotFoundPage from "./pages/NotFoundPage.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import UncontrolledInput from "./components/UncontrolledInput.tsx";
// import MultiFieldForm from "./components/MultiFieldForm.tsx";
// import MultiFieldFormWithValidation from "./components/MultiFieldFormWithValidation.tsx";
// import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation.tsx";
// import MultiFieldFormWithReactHook from "./components/MultiFieldFormWithReactHook.tsx";
import ProductList from "@/pages/ProductList.tsx";
import Product from "@/pages/Product.tsx";

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
                    {/*<Route element={<RouterLayout />}>*/}
                        {/*<Route index element={<HomePage />} />*/}
                        {/*<Route index element={<FocusInput />} />*/}
                        {/*<Route index element={<UncontrolledInput />} />*/}
                        {/*<Route index element={<MultiFieldForm/>} />*/}
                        {/*<Route index element={<MultiFieldFormWithValidation/>} />*/}
                        {/*<Route index element={<MultiFieldFormWithZodValidation/>} />*/}
                        {/*<Route index element={<MultiFieldFormWithReactHook/>} />*/}
                    {/*</Route>*/}
                    {/*<Route path="examples?" element={<ExamplesPage />}>*/}
                    {/*<Route path="examples" element={<RouterExamplesLayout/>}>*/}
                        {/*<Route index element={<ExamplesPage />}/>*/}

                        {/*<Route path="name-changer" element={<NameChangerPage />} />*/}
                        {/*<Route path="online-status" element={<OnlineStatusPage />} />*/}
                        {/*<Route path="auto-redirect" element={<AutoRedirectPage/>} />*/}
                    {/*</Route>*/}
                    {/*<Route path="users/:userId" element={<UserPage />}/>*/}
                    {/*<Route path="files/*" element={<FilePage />}/>*/}
                    {/*<Route path="*" element={<NotFoundPage/>} />*/}

                    <Route path="products" element={<RouterLayout/>}>
                        <Route index element={<ProductList />} />
                        <Route path="new" element={<Product mode="create"/>}/>
                        <Route path=":productId" element={<Product mode="edit" />}/>
                    </Route>

                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>

    </>
  )
}

export default App
