describe("Greeting", function(){
 let person = new Person("Emihle", 2, "female", "playing");
 it("should return ",function(){
   expect(person.sayHello()).toBeDefined()
 })
