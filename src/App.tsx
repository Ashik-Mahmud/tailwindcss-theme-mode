import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <div className="grid place-items-center w-screen h-screen font-sans bg-white dark:bg-slate-800/95 ">
      <div>
        <ToggleTheme size="md" rounded={false} style="shmooz-ai" />
        <div className="p-5 bg-gray-100 dark:bg-slate-800 rounded w-[30rem] mt-4">
          <h3 className="text-3xl text-gray-800 dark:text-gray-300 my-2">
            Here is title goes
          </h3>
          <p className="leading-6 text-gray-700 dark:text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            voluptas unde ipsam nobis ea. Repellat odio ratione hic quia veniam,
            a nobis cupiditate eveniet delectus fugit consectetur at aut natus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
