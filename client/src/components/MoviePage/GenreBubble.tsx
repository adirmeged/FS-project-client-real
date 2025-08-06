interface GenreBubbleProps {
  genre: string;
}

const GenreBubble = ({ genre }: GenreBubbleProps) => {
  return (
    <div className="bg-filterBG w-10 h-6 rounded-xl flex items-center justify-center px-10 py-5 text-xs text-baseText">
      {genre}
    </div>
  );
};

export default GenreBubble;
