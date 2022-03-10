'use strict'

export class Patient {
    #patientNo = '';
    #fName = '';
    #mName = '';
    #lName = '';
    #dob = new Date();
    #department = '';
    #outPatient = '';

    constructor(patientNo, fName, mName, lName, dob, department, outPatient) {
        this.#patientNo = patientNo;
        this.#fName = fName;
        this.#mName = mName;
        this.#lName = lName;
        this.#dob = dob;
        this.#department = department;
        this.#outPatient = outPatient;
    }

    getPatientNo() {
        return this.#patientNo;
    }

    getFName() {
        return this.#fName;
    }

    getMName() {
        return this.#mName;
    }

    getLName() {
        return this.#lName;
    }

    getDOB() {
        return this.#dob;
    }

    getDepartment() {
        return this.#department;
    }

    getOutPatient() {
        return this.#outPatient;
    }

    
}