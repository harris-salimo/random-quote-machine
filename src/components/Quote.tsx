export default function Quote({ data }: { data?: Record<string, string> }) {
  return (
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
  );
}
