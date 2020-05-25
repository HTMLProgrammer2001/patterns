abstract class Component{
	constructor(private name: string){};

	getName(): string{
		return this.name;
	}

	abstract getSize(): number;

	abstract print();

	abstract add(comp: Component);

	abstract remove(comp: Component);
}

export default Component;
