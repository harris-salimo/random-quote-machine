export default function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="px-4 py-2 text-gray-200 bg-gray-950 rounded-lg duration-150 hover:bg-gray-900 active:bg-gray-800"
      onClick={onClick}
    >
      Get Random Quote
    </button>
  );
}
