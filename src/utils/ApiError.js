class ApiError extends Error{
    constructor(
        statusCOde,
        message="Something went wrong",
        errors=[],
        statck=""
    ){
        super(message);
        this.statusCode = statusCOde;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;
        

        if(statck){
            this.stack = statck;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }
    }   
    
}
export default ApiError;