export default class Validators {

    // Generic validator functions to combine individual validators
    public static validatorReducer = (value : string, ...validatorFunctions : ((input : string) => boolean)[]) : boolean => {
        return validatorFunctions.reduce((x : any,y : any) => x(value) || y(value), true );
    }


    // Individual validator functions must be of type (string) => boolean


    public static hasValue = (input : string) : boolean => {
        if(input == null || input.trim() === "")
            return false;
        return true;
    }

}