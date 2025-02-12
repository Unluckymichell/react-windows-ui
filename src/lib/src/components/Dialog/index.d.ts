import React, { ReactNode } from 'react'

export interface DialogProps {
    isVisible ?: boolean;
    padding ?: number | string;
    showDropShadow ?: boolean;
    children ?: ReactNode;
}
declare const Dialog: React.SFC<DialogProps>

export default Dialog