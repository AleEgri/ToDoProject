import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeSuccessSnackbar } from "../../redux/actions";

export const SuccessSnackbar = () => {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.snackbar.open);

    const handleClose = () => {
        dispatch(removeSuccessSnackbar());  // Dispatch action to close Snackbar
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <SnackbarContent
                message={"Good Job!"}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </Snackbar>
    );
}