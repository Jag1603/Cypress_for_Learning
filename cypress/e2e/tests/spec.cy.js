import Cura_Homepage from "../pages/Sample.cy.js"
import loginpage from "../pages/Loginpage.cy.js"
import Testdata from"../../fixtures/Testdata.json"
import appointment_page from "../pages/Appoitment_page.cy.js"
describe('Cura Health care Demo Automation', () => {
  it('Testcase_001: Verify Homepage ', () => {
    cy.visit('/')
    
     const cura = new Cura_Homepage()
     cura.verifyApp_Heading_Text()
     cura.clicktogglebutton()
     cura.verify_homelink()
     cura.verify_loginlink()
     cura.click_make_appointment_button()
   
     const login_page=new loginpage()
     cy.fixture('Testdata').then((data) =>
    {
      login_page.login(data.name,data.password)

      
    })

    const appointment= new appointment_page();
    appointment.make_appointment()
    appointment.apply_hospital_readmission()
    appointment.apply_healthcare()
    appointment.select_a_date()
    appointment.make_a_comment()
    appointment.click_appointment_button()

    



    

    //login_page.login()

    

     
  
    

      

      



})

})

