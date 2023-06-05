interface StarshipProps{
    name: string,
	model: string,
	manufacturer: string,
	max_atmosphering_speed: string,
    vehicle_class: string,
	pilots: Array<string>,
	url: string,
}

export default function Starship(props:StarshipProps) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.vehicle_class}</h2>
            <h2>{props.manufacturer}</h2>
        </div>
    );
}