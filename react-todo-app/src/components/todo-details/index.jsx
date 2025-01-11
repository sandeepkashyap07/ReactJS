import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

function TodoDetails({todoDetails,openDailog,setOpenDailog,setTodoDetails}){
    return(
        <Fragment>
            <Dialog onClose={()=>setOpenDailog(false)} open={openDailog}>
                <DialogTitle>
                    {todoDetails?.todo}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={()=>{
                        setTodoDetails(null)
                        setOpenDailog(false)
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}
export default TodoDetails