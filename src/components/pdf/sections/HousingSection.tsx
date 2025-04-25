import { Page, View, Text, Image, Svg, Path } from "@react-pdf/renderer";
import { tw } from "@/utils/pdf-theme";
import { serializeToPDFText } from "@/utils/pdf-serializer";
import StatBox from "../StatBox";
import { Highlight } from "../Highlight";
import { HousingSectionContent } from "@/types/PageConfigs/HousingConfig";
import { Template1Colors } from "@/types/PageConfigs/Template1Config";
interface HousingSectionProps {
  config: HousingSectionContent;
  templateColors?: Template1Colors; // Optional prop for template colors
}

const HousingSection = ({ config, templateColors }: HousingSectionProps) => (
  <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
    {/* Header */}
    <View style={tw("flex flex-row justify-between items-start")}>
      <Highlight width="430">
        Affordable Housing & Homeownership
      </Highlight>
      <View style={tw("flex flex-row items-center gap-2")}>
        <Svg width="30" height="26" viewBox="0 0 700 568">
          <Path d="M-1.04847e-05 284L140.287 523.861L287.613 486.951L148.439 30.2003L-1.04847e-05 284Z" fill="#6F9B9A" />
          <Path d="M543.144 76.6627L498.307 8.88674e-05L436.873 9.15527e-05L492.408 89.3109L543.144 76.6627Z" fill="#6F9B9A" />
          <Path d="M402.026 0.000173205L175.522 0.000183105L222.228 156.666L459.12 97.6094L402.026 0.000173205Z" fill="#22D6CD" />
          <Path d="M664.41 284L590.02 411.19L318.395 479.24L232.333 190.557L561.488 108.024L664.41 284Z" fill="#B9EAE4" />
          <Path d="M166.102 568L498.306 568L568.619 447.779L156.591 551.738L166.102 568Z" fill="#0F202B" />
        </Svg>
        <View style={tw("flex flex-col")}>
          <Text style={tw("text-[10px] font-medium text-foreground")}>Lafayette</Text>
          <Text style={tw("text-[10px] font-medium text-foreground")}>Square</Text>
          <Text style={tw("text-[10px] font-medium text-foreground")}>Institute</Text>
        </View>
      </View>
    </View>

    {/* Intro Paragraph */}
    <Text style={tw("text-[14px] font-semibold text-foreground")}>
      {serializeToPDFText(config.introParagraph)}
    </Text>

    {/* Highlighted Stat Block 1 */}
    <Highlight isFullWidth color="#D3E8C8" top={29} height={100} contentClassName="p-4">
      <View style={tw("flex flex-row justify-between")}>
        {config.statGroup1.map((stat, i) => (
          <StatBox
            key={i}
            {...stat}
            textContainerHeight={60}
            labelFontSize="text-[11px]"
          />
        ))}
      </View>
    </Highlight>

    {/* Housing Explanation Paragraphs */}
    <View style={tw("flex flex-row mt-5 gap-10")}>
      <View style={tw("flex-1")}>
        <Text style={tw("text-[10px] text-foreground")}>
          {serializeToPDFText(config.housingParagraph1)}
        </Text>
      </View>
      <View style={tw("flex-1")}>
        <Text style={tw("text-[10px] text-foreground")}>
          {serializeToPDFText(config.housingParagraph2)}
        </Text>
      </View>
    </View>

    {/* Rent Burden Chart */}
    {config.rentBurdenChart && (
      <View style={tw("my-6")}>
        <Image src={config.rentBurdenChart} style={tw("w-full")} />
      </View>
    )}

    {/* Highlighted Stat Block 2 + QR */}
    <View style={tw("relative mt-4")}>
      <View style={[tw("absolute h-full"), {
        top: 30,
        left: 0,
        width: "75%",
        height: "100px",
        backgroundColor: "#D3E8C8",
        opacity: 0.5,
      }]} />
      <View style={[tw("absolute h-full"), {
        top: 30,
        right: 0,
        width: "25%",
        height: "100px",
        backgroundColor: "#b3d89c",
      }]} />
      <View style={tw("flex flex-row justify-between p-4 relative")}>
        {config.statGroup2.map((stat, i) => (
          <StatBox
            key={i}
            {...stat}
            numberFontSize="text-heading-3"
            labelFontSize="text-caption"
            rankFontSize="text-caption"
          />
        ))}
        <View style={tw("flex-1 items-center justify-center")}>
          {config.qrImageSrc && (
            <Image src={config.qrImageSrc} style={tw("w-24 h-24 mb-2")} />
          )}
          <Text style={tw("text-[11px] ml-8 font-bold text-foreground")}>
            {serializeToPDFText(config.qrCaption)}
          </Text>
        </View>
      </View>
    </View>
  </Page>
);

export default HousingSection;
