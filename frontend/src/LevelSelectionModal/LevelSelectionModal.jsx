import { Dialog, Typography, Box, IconButton } from "@mui/material";
import React, { useCallback } from "react";
import { LevelButtons, ModalContainer } from "./LevelSelectionModal.styles";

const LevelSelectionModal = ({ onLevelSelect, onClose, ...props }) => {
  const handleLevelSelect = useCallback(
    (level) => {
      onClose?.();
      onLevelSelect?.(level);
    },
    [onClose, onLevelSelect]
  );

  return (
    <Dialog onClose={onClose} {...props} aria-labelledby="level-selection-title">
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Typography id="level-selection-title" variant="h6" fontWeight="bold">
          Select Level
        </Typography>
        <IconButton
          aria-label="Close"
          sx={{ width: 40, height: 40 }}
          onClick={onClose}
        >
          &times;
        </IconButton>
      </Box>
      <ModalContainer>
        <Box display="flex" flexDirection="column" gap={1} p={2}>
          <LevelButtons
            onClick={() => handleLevelSelect("easy")}
            sx={({ palette }) => ({
              background: palette.success.main,
              "&:hover": {
                background: palette.success.dark,
              },
            })}
          >
            Easy
          </LevelButtons>
          <LevelButtons
            onClick={() => handleLevelSelect("medium")}
            sx={({ palette }) => ({
              background: palette.warning.main,
              "&:hover": {
                background: palette.warning.dark,
              },
            })}
          >
            Medium
          </LevelButtons>
          <LevelButtons
            onClick={() => handleLevelSelect("hard")}
            sx={({ palette }) => ({
              background: palette.error.main,
              "&:hover": {
                background: palette.error.dark,
              },
            })}
          >
            Hard
          </LevelButtons>
        </Box>
      </ModalContainer>
    </Dialog>
  );
};

export default LevelSelectionModal;
