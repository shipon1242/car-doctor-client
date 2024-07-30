

const TeamCard = ({team}) => {
    const {image,name,quality} = team
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="image"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold">{name}</h2>
          <p className="text-lg">{quality} </p>
          
        </div>
      </div>
    );
};

export default TeamCard;