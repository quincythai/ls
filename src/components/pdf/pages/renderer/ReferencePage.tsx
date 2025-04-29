import { Page, View, Text, Svg, Path, Image } from "@react-pdf/renderer";
import { tw } from "../../../../utils/pdf-theme";
import { serializeToPDFText } from "@/utils/pdf-serializer";
import { ReferencePageContent } from "@/types/PageConfigs/ReferenceConfig";
import { Template1Colors } from "@/types/PageConfigs/Template1Config";
interface Props {
  config: ReferencePageContent;
  templateColors?: Template1Colors; // Optional prop for template colors
}

const ReferencePage = ({ config, templateColors }: Props) => (
  <Page size="A4" style={tw("flex flex-col bg-background px-10 pt-10 pb-4")}>
    <View style={tw("relative flex-1")}>
      {/* Colored top bars */}
      <View
        style={[
          tw("absolute"),
          {
            top: 30,
            left: 0,
            width: "75%",
            height: 100,
            backgroundColor: "#C7F0ED",
          },
        ]}
      />
      <View
        style={[
          tw("absolute"),
          {
            top: 30,
            right: 0,
            width: "25%",
            height: 100,
            backgroundColor: "#63D5CD",
          },
        ]}
      />

      {/* Header */}
      <View style={tw("flex flex-row justify-between p-4 relative")}>
        <View style={tw("flex-1")}>
          <Text style={tw("text-[30px] font-black text-foreground mb-5")}>
            Let's talk.
          </Text>
          <View style={tw("flex flex-row items-center gap-3")}>
            <Svg width="20" height="20" viewBox="0 0 24 24">
              <Path
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                fill="#252525"
              />
            </Svg>
            <Text style={tw("text-[14px] font-semibold text-foreground")}>
              {serializeToPDFText(config.contactEmail)}
            </Text>
          </View>
        </View>

        {/* QR and CTA */}
        <View style={tw("items-start justify-center")}>
          <Image src={config.qrImageSrc} style={tw("w-24 h-24 mb-2")} />
          <Text style={tw("text-[10px] text-right font-bold text-foreground")}>
            {serializeToPDFText(config.qrImageCaption)}
          </Text>
          <Text style={tw("text-[10px] text-right font-bold text-foreground")}>
            {serializeToPDFText(config.qrImageCTA)}
          </Text>
        </View>
      </View>

      {/* References */}
      <View style={tw("flex flex-row gap-8 mt-8")}>
        {[config.leftColumn, config.rightColumn].map((column, colIndex) => {
          // Base number offset: left column starts at 1, right column starts at leftColumn.length + 1
          const baseNumber = colIndex === 0 ? 1 : config.leftColumn.length + 1;

          return (
            <View key={colIndex} style={tw("flex-1")}>
              <View style={tw("flex flex-col gap-1")}>
                {column.map((entry, idx) => (
                  <View key={idx} style={tw("flex flex-row items-start")}>
                    {/* Number column */}
                    <Text
                      style={tw("text-[10px] text-foreground w-[12px] mr-1")}
                    >
                      {baseNumber + idx}.
                    </Text>

                    {/* Citation content */}
                    <Text style={tw("text-[10px] text-foreground flex-1")}>
                      {serializeToPDFText(entry)}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          );
        })}
      </View>

      {/* Footer logo */}
      <View
        style={tw(
          "absolute bottom-5 left-0 right-0 flex flex-row items-center justify-center gap-2 mb-4"
        )}
      >
        <Svg width="65" height="60" viewBox="0 0 700 568">
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
          <Text style={tw("text-[14px] font-medium text-foreground")}>
            Lafayette
          </Text>
          <Text style={tw("text-[14px] font-medium text-foreground")}>
            Square
          </Text>
          <Text style={tw("text-[14px] font-medium text-foreground")}>
            Institute
          </Text>
        </View>
      </View>
    </View>
  </Page>
);

export default ReferencePage;
