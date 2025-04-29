import { Page, Text, View, Path, Svg } from "@react-pdf/renderer";
import { tw } from "@/utils/pdf-theme";
import { serializeToPDFText } from "@/utils/pdf-serializer";
import StatBox from "../../StatBox";
import { Template2CoverPageContent } from "@/types/PageConfigs/Template2Config";
import { Template1Colors } from "@/types/PageConfigs/Template1Config";

interface Template2CoverPageProps {
  config: Template2CoverPageContent;
  templateColors: Template1Colors;
}

const Template2CoverPage = ({ config, templateColors }: Template2CoverPageProps) => {
  
  return (
    <Page size="LETTER" style={tw("p-12 bg-background")}>
      {/* Header */}
      <View style={tw("flex flex-row justify-between items-start mb-2")}>
        <View style={tw("relative")}>
          <Svg
            width="150"
            height="90"
            viewBox="0 0 150 90"
            style={{ position: "absolute", top: -10, left: 145 }}
          >
            <Path
              d="M20 0 L90 0 L105 15 L105 35 L90 50 L20 50 L5 35 L5 15 Z"
              fill="#93B7CF"
            />
            <Text
              x="25"
              y="30"
              style={tw("text-[22px] font-bold italic text-black")}
            >
              Policy
            </Text>
          </Svg>
          <Svg width="200" height="30" viewBox="0 0 200 30">
            <Path d="M0 0 H150 L165 15 L150 30 H0 Z" fill="#13202A" />
          </Svg>
          <Text
            style={[
              tw("absolute text-[24px] text-background"),
              { top: 2, left: 10, letterSpacing: -1 },
            ]}
          >
            535 Insights
          </Text>
        </View>

        {/* Logo */}
        <View style={tw("flex flex-row items-start gap-2")}>
          <Svg width="40" height="35" viewBox="0 0 700 568">
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
            <Text style={tw("text-[12px] font-medium text-foreground")}>
              Lafayette
            </Text>
            <Text style={tw("text-[12px] font-medium text-foreground")}>
              Square
            </Text>
            <Text style={tw("text-[12px] font-medium text-foreground")}>
              Institute
            </Text>
          </View>
        </View>
      </View>

      {/* Title Section */}
      <View style={tw("mb-4")}>
        <View style={tw("flex flex-row justify-between items-center")}>
          <Text
            style={tw(
              "text-[25px] font-black text-foreground leading-tight w-[75%]",
            )}
          >
            {serializeToPDFText(config.reportTitle)}
          </Text>
          <Text style={tw("text-[25px] top-5 text-foreground")}>
            {serializeToPDFText(config.subtitle)}
          </Text>
        </View>
        <View style={tw("w-full border-t-4 border-[#C2EAE6] mt-1")} />
      </View>

      {/* Summary Section */}
      <View style={tw("bg-[#E1E8E8] px-3 py-4 mb-4")}>
        <Text style={tw("text-[16px] text-center font-bold mb-3")}>
          SUMMARY
        </Text>
        <Text style={tw("text-[11.5px] leading-[1.6]")}>
          {serializeToPDFText(config.summary)}
        </Text>
      </View>

      {/* Why Needs Section */}
      <View style={tw("flex-1")}>
        <Text style={tw("text-[19px] font-bold mb-4")}>
          {serializeToPDFText(config.whyNeeds)}
        </Text>

        <View style={tw("flex flex-row gap-6 h-[270px] mb-4")}>
          {/* Stats */}
          <View style={tw("w-[25%] space-y-2")}>
            <View style={tw("bg-[#BFD8E9] p-4 h-[190px]")}>
              <StatBox
                number={config.stat1.number}
                label={config.stat1.label}
                rank={config.stat1.rank}
                numberFontSize="text-[26px]"
                labelFontSize="text-[13px]"
                rankFontSize="text-[10px]"
                textContainerHeight={80}
              />
            </View>
            <View style={tw("bg-[#BFD8E9] p-4 h-[230px]")}>
              <StatBox
                number={config.stat2.number}
                label={config.stat2.label}
                rank={config.stat2.rank}
                numberFontSize="text-[26px]"
                labelFontSize="text-[13px]"
                rankFontSize="text-[10px]"
                textContainerHeight={100}
              />
            </View>
          </View>

          {/* Bullet Points */}
          <View style={tw("flex-1 justify-between h-[240px]")}>
            <Text style={tw("text-[18px]")}>• Silver Tsunami</Text>
            <Text style={tw("text-[18px]")}>• Risk of loss of jobs and productive capacities</Text>
            <Text style={tw("text-[18px]")}>• Declining manufacturing production</Text>
            <Text style={tw("text-[18px]")}>• Retirement Insecurity</Text>
            <Text style={tw("text-[18px]")}>• Overall Economic Insecurity</Text>
            <Text style={tw("text-[18px]")}>• High Turnover</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={tw("absolute bottom-12 left-12 right-12")}>
        <View style={tw("flex flex-row items-center justify-between")}>
          <Text style={tw("text-[11px] font-semibold flex-1")}>
            {serializeToPDFText(config.footerText)}
          </Text>
          <View style={tw("ml-4")}>
            <Svg
              width="8"
              height="16"
              viewBox="0 0 8 16"
              style={{ marginTop: 6, marginLeft: 16 }}
            >
              <Path d="M0 0 L0 16 L8 8 Z" fill="#252525" />
            </Svg>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default Template2CoverPage;
