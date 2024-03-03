declare module "react-light-dark-toggle" {
    import { FC } from "react";
  
    interface LightDarkToggleProps {
      onChange: () => void;
      checked: boolean;
      size: number;
    }
  
    const LightDarkToggle: FC<LightDarkToggleProps>;
    export default LightDarkToggle;
  }
  