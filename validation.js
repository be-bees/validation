class Validation{
    static isValidString(input, message){

        if(input == null || input.trim()==""){
            throw new Error(message);
        }

    }

    static isValidNumber(input,message){
        if(input== null ||isNaN(input)||input<0 ){
            throw new Error(message);
        }
    }
    
}
