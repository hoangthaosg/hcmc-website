'use strict'

import { Patient } from './model/patient.js';

$(document).ready(function() {
    
    let patientsData = [
        new Patient('EP-001-000001', 'Ana', 'J', 'Smith', new Date('1945-01-05'), 'Ear, Nose and Throat', 'No'),
        new Patient('P-001-000002', 'Bob', 'K', 'Jones', new Date('1985-05-04'), 'Cardiology', 'Yes'),
        new Patient('EP-001-000003', 'Carlos', 'A', 'Hernandez', new Date('1957-03-13'), 'Cardiology', 'Yes'),
    ];
    let isElderlyPatient = false, isOutPatient = false;
    let currYear = new Date().getFullYear();
    displayData();

    // question 1
    $('#mainForm').submit(function(event) {
        event.preventDefault();
        const patientNo = $('#patientIdNumber').val();
        const fName = $('#firstName').val();
        const mName = $('#middleInitials').val();
        const lName = $('#lastName').val();
        const dob = $('#dateOfBirth').val();
        const department = $('#ddlDepartment').val();
        const outPatient = $("[name='radioIsOutPatient']:checked").val();
        const data = new Patient(patientNo, fName, mName, lName, new Date(dob), department, outPatient);
        patientsData.push(data);
        displayData();
        
    });

    $('input[type=checkbox]').change(function(){
        if (this.id === 'chkElderlyPatients') {
            isElderlyPatient = this.checked;
            console.log('chkElderlyPatients:', isElderlyPatient);
        } else if (this.id === 'chkShowOutPatients') {
            isOutPatient = this.checked;
            console.log('chkShowOutPatients:', isOutPatient);
        } 
        displayData();
    });

    function displayData() {

        $("#tblPatient > tbody").html('');
    
        let data = patientsData;

        // question 2
        if (isElderlyPatient) {
            data = data.filter(p => (currYear - p.getDOB().getFullYear()) >= 65);
        }
        
        // question 3
        if (isOutPatient) {
            data = data.filter(p => p.getOutPatient() === 'Yes');
        } 

        data.forEach(patient => {
            $('#tblPatient > tbody:last-child').append(`<tr>
            <td>${patient.getPatientNo()}</td>
            <td>${patient.getFName()}</td>
            <td>${patient.getMName()}</td>
            <td>${patient.getLName()}</td>
            <td>${patient.getDOB().toISOString().slice(0,10)}</td>
            <td>${patient.getDepartment()}</td>
            <td>${patient.getOutPatient()}</td>
            </tr>`);
        });
    
    }
});