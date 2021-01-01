
class Animal {
    name: string

    /**
     * private properties can be accessed from anywhere in the class
     * and subclases that inherits form the class
     */
    private nickname: string

    /**
     * protected properties can not be accessed outside the class
     */
    protected secret_code: string

    constructor(name: string, nickname: string, secret_code: string) {
        this.name = name
        this.nickname = nickname
        this.secret_code = secret_code
    }

	move(distance: number = 0) {
		console.log(`${this.name} moved ${distance}m.`);
	}
}

class Dog extends Animal {
    readonly numberofLegs: number = 4

    constructor(name: string, nickname: string, secret_code: string) {
        /** If this constructor is absent the name parameter will be passed
         * down to the super by default.
         */
        super(name, nickname, secret_code)
    }

	bark() {
		console.log("Woof! Woof!");
    }

    move(distance: number) {
        console.log("moving...");
        super.move(distance)
    }

}

const dog = new Dog("boby", "dogy", "secretcode");
dog.bark();
dog.move(10);
