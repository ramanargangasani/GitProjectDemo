const Hello = artifacts.require("Hello");

contract('Testing the Deployment',  async accounts => {
    it ("should deploy our contract", async () => {
        const instance =  await Hello.deployed(Hello,"HelloWorld");
        await instance.setGreeting("Helloworld");
        const greet = await instance.greet();
        assert.equal(greet, 'Helloworld');  
  
   
    });
});