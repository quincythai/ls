import { Page, View, Text, Svg, Path } from "@react-pdf/renderer";
import { tw } from "../../lib/pdf-theme";
import { serializeToPDFText } from "@/lib/pdf-serializer";
import { Template1CoverPageContent } from "@/types/pageConfigs";
import StatBox from "./StatBox";
import { Highlight } from "./Highlight";

interface Template1CoverPageProps {
  config: Template1CoverPageContent;
}

const Template1CoverPage = ({ config }: Template1CoverPageProps) => {
  // Debug logs – placed safely outside JSX
  console.log("Serialized mission statement:", serializeToPDFText(config.missionStatement));
  console.log("Raw mission statement nodes:", config.missionStatement);

  return (
    <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
      {/* Header */}
      <View style={tw("flex flex-row justify-between items-start mb-4")}>
        <View style={tw("relative")}>
          <Svg width="380" height="50" viewBox="0 0 380 50">
            <Path d="M0 0 H270 L300 25 L270 50 H0 Z" fill="#13202A" />
          </Svg>
          <Text
            style={[
              tw("absolute text-[40px] font-black text-background"),
              { top: 2, left: 20, letterSpacing: -1 },
            ]}
          >
            535 Insights
          </Text>
        </View>
        <View style={tw("flex flex-row items-start gap-2 top-8")}>
        <Svg width="65" height="60" viewBox="0 0 700 568">
            <Path d="M-1.04847e-05 284L140.287 523.861L287.613 486.951L148.439 30.2003L-1.04847e-05 284Z" fill="#6F9B9A"/>
            <Path d="M543.144 76.6627L498.307 8.88674e-05L436.873 9.15527e-05L492.408 89.3109L543.144 76.6627Z" fill="#6F9B9A"/>
            <Path d="M402.026 0.000173205L175.522 0.000183105L222.228 156.666L459.12 97.6094L402.026 0.000173205Z" fill="#22D6CD"/>
            <Path d="M664.41 284L590.02 411.19L318.395 479.24L232.333 190.557L561.488 108.024L664.41 284Z" fill="#B9EAE4"/>
            <Path d="M166.102 568L498.306 568L568.619 447.779L156.591 551.738L166.102 568Z" fill="#0F202B"/>
          </Svg>
          <View style={tw("flex flex-col")}>
            <Text style={tw("text-[16px] font-medium text-foreground")}>Lafayette</Text>
            <Text style={tw("text-[16px] font-medium text-foreground")}>Square</Text>
            <Text style={tw("text-[16px] font-medium text-foreground")}>Institute</Text>
          </View>
        </View>
      </View>

      {/* Title & Mission */}
      <View style={tw("mb-5")}>
        <Text style={tw("text-heading-3 font-black text-foreground")}>
          {serializeToPDFText(config.reportTitle)}
        </Text>
        <View style={tw("h-1 bg-secondary-500 w-full mt-2")} />
      </View>

      <View style={tw("mb-3")}>
        <Text style={tw("text-[18px] text-foreground leading-normal")}>
          {serializeToPDFText(config.missionStatement)}
        </Text>
      </View>

      <View style={tw("mb-3")}>
        <Text style={tw("text-[13px] text-foreground leading-snug")}>
          {serializeToPDFText(
            config.missionSubtext,
            tw("text-[13px] text-foreground leading-snug")
          )}
        </Text>
      </View>

      {/* Stats */}
      <Highlight
        isFullWidth
        color="#d7f1ef"
        top={25}
        height={125}
        className="mb-4"
        contentClassName="relative"
      >
        <View style={tw("flex flex-row gap-x-4 px-5 pt-3")}>
          <StatBox {...config.mobilityStat} />
          <StatBox {...config.expenseBurdenStat} />
          <StatBox {...config.rentBurdenStat} />
          <StatBox {...config.successionRiskStat} />
        </View>
        <View style={tw("px-6 pt-4")}>
          <Text style={tw("text-small-text font-semibold mb-1")}>
            The opportunity to build wealth and economic security is the foundation of the American Dream.
          </Text>
          <Text style={tw("text-small-text font-semibold mb-1")}>
            This is how{" "}
            <Text style={tw("font-extrabold px-1 bg-white")}>
              the California 2nd District
            </Text>{" "}
            is performing{" "}
            <Text style={tw("font-normal")}>(ranked by desirability)</Text>.
          </Text>
        </View>
      </Highlight>

      {/* CTA */}
      <Text style={tw("text-heading-4 text-foreground my-3")}>
        {serializeToPDFText(config.ctaText)}
      </Text>

      <Highlight width="48%" color="#e1e8e8" top={6} height="75%">
        <Text style={tw("text-[15px] text-foreground my-5")}>
          {serializeToPDFText(config.sectionIntroHeader)}
        </Text>
      </Highlight>

      <View style={tw("flex flex-row gap-5")}>
        <View style={tw("flex-1 bg-[#D3E8C8] py-6 px-8")}>
          <Text style={tw("text-heading-4 font-black text-foreground mb-4")}>
            {serializeToPDFText(config.affordableHousingTitle)}
          </Text>
          <Text style={tw("text-[12px] text-foreground leading-tight")}>
            {serializeToPDFText(
              config.affordableHousingText,
              tw("text-[12px] text-foreground leading-tight")
            )}
          </Text>
        </View>
        <View style={tw("flex-1 bg-[#C1D9EC] py-6 px-8")}>
          <Text style={tw("text-heading-4 text-foreground mb-4")}>
            {serializeToPDFText(config.employeeOwnershipTitle)}
          </Text>
          <Text style={tw("text-[12px] text-foreground leading-tight")}>
            {serializeToPDFText(
              config.employeeOwnershipText,
              tw("text-[12px] text-foreground leading-tight")
            )}
          </Text>
        </View>
      </View>

      {/* Page Turn Arrow */}
      <View style={tw("flex flex-row items-center gap-2 my-4")}>
        <Text style={tw("text-[11px] text-foreground mt-3 text-left")}>
          {serializeToPDFText(config.bottomNote)}
        </Text>
        <Svg
          width="10"
          height="20"
          viewBox="0 0 10 20"
          style={{ marginTop: 8, marginLeft: 20 }}
        >
          <Path d="M0 0 L0 20 L10 10 Z" fill="#252525" />
        </Svg>
      </View>
    </Page>
  );
};

export default Template1CoverPage;
