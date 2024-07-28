import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRandomQuote } from "./hooks/useRandomQuote";

function App() {
  const queryClient = useQueryClient();
  const data = useRandomQuote();

  const fetchQuote = () => {
    queryClient.invalidateQueries({ queryKey: ["quotes", "random"] });
  };

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-slate-100">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h1 className="text-gray-800 text-lg font-semibold pb-6">
          Random Quote Machine
        </h1>
        <figure>
          <blockquote>
            <p className="text-gray-900 text-xl font-semibold italic sm:text-2xl">
              “{data?.quote}“
            </p>
          </blockquote>
          <div className="mt-6">
            <span className="block text-gray-700 font-semibold">
              -- {data?.author}
            </span>
          </div>
        </figure>
        <button
          className="px-4 py-2 text-gray-200 bg-gray-950 rounded-lg duration-150 hover:bg-gray-900 active:bg-gray-800"
          onClick={() => fetchQuote()}
        >
          Get Random Quote
        </button>
      </div>
    </main>
  );
}

export default App;
