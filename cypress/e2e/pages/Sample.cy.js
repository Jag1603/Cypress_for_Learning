class Cura_Homepage
{
    elements  = 
    { 
        togglebutton : () => cy.get('#menu-toggle'),      
        appointment_button : () => cy.get('#btn-make-appointment'),  
        heading :() =>cy.get('h1'),
        homelink:()=>cy.get('.sidebar-nav > :nth-child(3) > a'),
        loginlink:()=>cy.get('.sidebar-nav > :nth-child(4) > a')
    }
     verifyApp_Heading_Text()
     {
        this.elements.heading().should('be.visible')
     }
    clicktogglebutton()
    {
        
        this.elements.togglebutton().should('be.visible').click()
       
    }
    verify_homelink()
    {
        this.elements.homelink().should('be.visible')
    }
    verify_loginlink()
    {
        this.elements.loginlink().should('be.visible')
    }

    click_make_appointment_button()
    {
        this.elements.appointment_button().should('be.visible').click()

    }
    


    
} 

export default Cura_Homepage