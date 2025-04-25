import { Box, ButtonBase, styled } from "@mui/material";

export const ModalContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    outline: "none",
    margin: "auto",
    textAlign: "center",
    width: theme.spacing(50),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const LevelButtons = styled(ButtonBase)(({ theme }) => ({
    margin: theme.spacing(1.5),
    padding: theme.spacing(1.5, 3),
    fontSize: theme.typography.pxToRem(16),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: theme.transitions.create(["background-color", "transform"], {
        duration: theme.transitions.duration.short,
    }),
    "&:hover": {
        transform: "scale(1.05)",
    },
}));