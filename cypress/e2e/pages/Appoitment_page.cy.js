class appointment_page
{
    elements={

     facility:()=>cy.get('#combo_facility'),
   
     hospital_readmission:()=>cy.get('#chk_hospotal_readmission'),
 
     health_care_program:()=>cy.get(':nth-child(3) > .col-sm-4 > :nth-child(1)'),
     date_selection:()=>cy.get('#txt_visit_date'),
     comment:()=>cy.get('#txt_comment'),
     appointment_button:()=>cy.get('#btn-book-appointment')
    }

    make_appointment()
    {
        this.elements.facility().select('Tokyo CURA Healthcare Center')

    }
    apply_hospital_readmission()
    {
        this.elements.hospital_readmission().check()

    }
    apply_healthcare()
    {
        this.elements.health_care_program().click()
    }

    make_a_comment()
    {
        this.elements.comment().type(" book appointment")
    }
    
    select_a_date()
    {
        this.elements.date_selection().type("17/10/2023").tab({ shift: true })
        
    }

    click_appointment_button()
    {
        this.elements.appointment_button().click()
    }



    
    

}
export default appointment_page