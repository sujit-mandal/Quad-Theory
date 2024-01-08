const Card = ({ item }) => {
  return (
    <div className="h-80">
      <img
        src={item.ImageUrl}
        alt=""
        className="object-cover h-[90%] w-full shadow-md shadow-slate-500 rounded-lg mb-2"
      />
      <p className="text-gray-600 font-medium text-center">{item.Name}</p>
    </div>
  );
};

export default Card;
