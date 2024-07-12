import React, { FC } from "react";
import { ReactElement } from "react";
import copy from "copy-to-clipboard";
interface CopyToClipboardProps {
    text: string;
    onCopy?: (text: string, result: boolean) => void;
    children: ReactElement;
    options?: {
        debug?: boolean;
        message?: string;
        format?: string;
    }
}

const CopyToClipboard: FC<CopyToClipboardProps> = (props) => {
    const {text, onCopy, children, options} = props;

    const el = React.Children.only(children);

    function onClick(event: MouseEvent){
        const el = React.Children.only(children);
        
        const result = copy(text, options);

        if(onCopy){
            onCopy(text, result);
        }

        if(typeof el?.props?.onClick === 'function'){
            el.props.onClick(event);
        }
    }

    return React.cloneElement(el, {onClick});
}

export default CopyToClipboard;