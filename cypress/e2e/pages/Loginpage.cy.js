class loginpage
{
    elements={

     username_textbox:()=>cy.get('#txt-username'),
   
     password_textbox:()=>cy.get('#txt-password'),
 
     login_button:()=>cy.get('#btn-login')



        
    }

    login(username,password)
    {
        this.elements.username_textbox().type(username)
        this.elements.password_textbox().type(password)
        this.elements.login_button().click()


    }
    

}
export default loginpage