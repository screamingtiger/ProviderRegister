export default class Utils {
    public static hasValue = (input : string) : boolean => {
        if(input == null || input.trim() === "")
            return false;
        return true;
    }

}