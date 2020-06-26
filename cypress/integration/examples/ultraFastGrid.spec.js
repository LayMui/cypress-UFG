
describe("AppTest", () => {

    beforeEach(() => {
        cy.visit('/gridHackathonV1.html')   
    });

    afterEach(() => {
        cy.eyesClose()
     })

    it(`ultraFastTest Task 1 Cross-Device Elements Test`, function () {
        cy.eyesOpen({
            appName: 'AppliFashion App',
            testName: 'Task 1',
            stepName: 'Cross-Device Elements Test'
        })

        cy.viewport(800, 600);
        cy.eyesCheckWindow({
            tag:  "Main Page 1",
            target: 'window',
            fully: true
        });

    });
       
    it(`ultraFastTest Task 2 Shopping experience Test`, function () {
        cy.eyesOpen({
            appName: 'AppliFashion App',
            testName: 'Task 2',
            stepName: 'Filter Results'
        })

        cy.get('#SPAN__checkmark__107').click()
        cy.get('#filterBtn').click()
        
        cy.eyesCheckWindow({
            tag:  "Main Page 2",
            target: 'window',
            fully: true
        });

    });


    it(`ultraFastTest Task 3 Product Details Test`, function () {
        cy.eyesOpen({
            appName: 'AppliFashion App',
            testName: 'Task 3',
            stepName: 'Product Details test'
        })

        cy.get('#IMG__imgfluid__215').click()
    
        cy.eyesCheckWindow({
            tag:  "Main Page 3",
            target: 'window',
            fully: true
        });
    
    });
});