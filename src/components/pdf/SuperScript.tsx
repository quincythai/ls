import { Text } from "@react-pdf/renderer";
import { tw } from "../../lib/pdf-theme";

interface SuperScriptProps {
  children: React.ReactNode;
}

export const SuperScript = ({ children }: SuperScriptProps) => (
  <Text style={[tw("text-[8px]"), { verticalAlign: "super" }]}>
    {children}
  </Text>
); 