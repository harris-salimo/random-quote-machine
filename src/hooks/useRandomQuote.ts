import { useQuery } from "@tanstack/react-query";
import { getRandomQuote } from "../api/quote";

export const useRandomQuote = () => {
    const query = useQuery({ queryKey: ["quotes", "random"], queryFn: getRandomQuote });
    return query.data;
}