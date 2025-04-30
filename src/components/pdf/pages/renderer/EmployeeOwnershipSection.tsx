import { Page, View, Text, Image, Svg, Path } from "@react-pdf/renderer";
import { tw } from "@/utils/pdf-theme";
import { serializeToPDFText } from "@/utils/pdf-serializer";
import StatBox from "../../StatBox";
import { Highlight } from "../../Highlight";
import { EmployeeOwnershipSectionContent } from "@/types/PageConfigs/EmployeeOwnershipConfig";
import { TemplateColors } from "@/types/templateConfig";

interface EmployeeOwnershipSectionProps {
  config: EmployeeOwnershipSectionContent;
  templateColors?: TemplateColors
}

const EmployeeOwnershipSection = ({
  config, templateColors
}: EmployeeOwnershipSectionProps) => (
  <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
    {/* Header */}
    <View style={tw("flex flex-row justify-between items-start")}>
      <Highlight width="250" color="#C0D8EC">
        Employee Ownership
      </Highlight>
      <View style={tw("flex flex-row items-center gap-2")}>
        <Svg width="30" height="26" viewBox="0 0 700 568">
          <Path
            d="M-1.04847e-05 284L140.287 523.861L287.613 486.951L148.439 30.2003L-1.04847e-05 284Z"
            fill="#6F9B9A"
          />
          <Path
            d="M543.144 76.6627L498.307 8.88674e-05L436.873 9.15527e-05L492.408 89.3109L543.144 76.6627Z"
            fill="#6F9B9A"
          />
          <Path
            d="M402.026 0.000173205L175.522 0.000183105L222.228 156.666L459.12 97.6094L402.026 0.000173205Z"
            fill="#22D6CD"
          />
          <Path
            d="M664.41 284L590.02 411.19L318.395 479.24L232.333 190.557L561.488 108.024L664.41 284Z"
            fill="#B9EAE4"
          />
          <Path
            d="M166.102 568L498.306 568L568.619 447.779L156.591 551.738L166.102 568Z"
            fill="#0F202B"
          />
        </Svg>
        <View style={tw("flex flex-col")}>
          <Text style={tw("text-[10px] font-medium text-foreground")}>
            Lafayette
          </Text>
          <Text style={tw("text-[10px] font-medium text-foreground")}>
            Square
          </Text>
          <Text style={tw("text-[10px] font-medium text-foreground")}>
            Institute
          </Text>
        </View>
      </View>
    </View>

    {/* Intro Paragraph */}
    <Text style={tw("text-[13.5px] font-semibold text-foreground")}>
      {serializeToPDFText(config.introParagraph)}
    </Text>

    {/* Highlighted Stat Block */}
    <Highlight
      isFullWidth
      color="#C0D8EC"
      top={29}
      height={130}
      contentClassName="p-4"
    >
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

    {/* ESOP Paragraphs + Map */}
    <View style={tw("flex flex-row mt-5 gap-10")}>
      <View style={tw("flex-1")}>
        <Text style={tw("text-[11px] text-foreground")}>
          {serializeToPDFText(config.esopParagraph1)}
        </Text>
        <Text style={tw("text-[11px] text-foreground mt-4")}>
          {serializeToPDFText(config.esopParagraph2)}
        </Text>
      </View>
      <View style={tw("flex-1")}>
        <Text style={tw("text-[11px] text-foreground mb-4")}>
          {serializeToPDFText(config.esopParagraph3)}
        </Text>
        <Text style={tw("text-[12px] font-bold text-foreground mb-2")}>
          {serializeToPDFText(config.esopMapTitle)}
        </Text>
        {config.esopMapImage && (
          <Image src={config.esopMapImage} style={tw("w-full")} />
        )}
      </View>
    </View>

    {/* Final Stat Block + QR */}
    <View style={tw("relative mt-4")}>
      <View
        style={[
          tw("absolute h-full"),
          {
            top: 30,
            left: 0,
            width: "75%",
            height: "100px",
            backgroundColor: "#C0D8EC",
            opacity: 0.5,
          },
        ]}
      />
      <View
        style={[
          tw("absolute h-full"),
          {
            top: 30,
            right: 0,
            width: "25%",
            height: "100px",
            backgroundColor: "#8BB5D0",
          },
        ]}
      />
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
          <Text style={tw("text-[10px] ml-8 font-bold text-foreground")}>
            {serializeToPDFText(config.qrCaption)}
          </Text>
        </View>
      </View>
    </View>
  </Page>
);

export default EmployeeOwnershipSection;
