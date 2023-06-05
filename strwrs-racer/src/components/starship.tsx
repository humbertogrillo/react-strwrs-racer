interface StarshipProps{
    name: string,
	model: string,
	manufacturer: string,
	max_atmosphering_speed: string,
    hyperdrive_rating: string,
    starship_class: string,
	pilots: Array<string>,
	url: string,
}

export default function Starship(props:StarshipProps) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.starship_class}</h2>
            <h2>{props.manufacturer}</h2>
        </div>
    );
}