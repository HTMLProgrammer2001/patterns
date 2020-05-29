export enum Roles{
	ADMIN,
	MODERATOR,
	USER,
	ANONYM
};

class User{
	private role: Roles = Roles.ANONYM;

	constructor(private name: string){};

	setRole(role: Roles){
		this.role = role;
	}

	getRole(): Roles{
		return this.role;
	}

	getName(): string{
		return this.name;
	}
}

export default User;
