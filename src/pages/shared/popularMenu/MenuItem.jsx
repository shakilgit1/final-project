
const MenuItem = ({item}) => {
    const {name, price, image, recipe} = item;

    return (
        <div className="flex space-x-2">
            <div>
                <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            </div>
            <div>
                <h2 className="text-3xl">{name}-----</h2>
                <p>{recipe}</p>
            </div>
                <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;