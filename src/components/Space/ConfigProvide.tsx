import React, { PropsWithChildren } from "react";
import { SizeType } from ".";

interface ConfigContextType {
  space?: {
    size?: SizeType
  }
}

interface ConfigProviderProps extends PropsWithChildren<ConfigContextType>{

}

export const ConfigContext = React.createContext<ConfigContextType>({});

export function ConfigProvider(props: ConfigProviderProps) {
    const {
        space,
        children,
    } = props;
    return <ConfigContext.Provider value={{space}}>{children}</ConfigContext.Provider>;
}