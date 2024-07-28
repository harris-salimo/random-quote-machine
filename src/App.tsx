import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useRandomQuote } from "./hooks/useRandomQuote";

const Quote = React.lazy(() => import("./components/Quote"));
const Button = React.lazy(() => import("./components/Button"));

function App() {
  const queryClient = useQueryClient();
  const data = useRandomQuote();

  const fetchQuote = () => {
    queryClient.invalidateQueries({ queryKey: ["quotes", "random"] });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-slate-100">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h1 className="text-gray-800 text-lg font-semibold pb-6">
          Random Quote Machine
        </h1>
        <Quote data={data} />
        <Button onClick={() => fetchQuote()} />
      </div>
    </main>
  );
}

export default App;
