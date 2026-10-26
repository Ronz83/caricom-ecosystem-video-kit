import React from "react";
import { registerRoot, Composition } from "remotion";
import manifestData from "./ecosystem-audio-manifest.json";
import {
  EcosystemMasterInfomercial,
  EcosystemVideoMeta,
} from "./EcosystemMasterInfomercial";
import { DispatchIndustryExplainer } from "./DispatchIndustryExplainer";

const manifest = manifestData as Record<string, EcosystemVideoMeta>;

const EcosystemRoot: React.FC = () => {
  const ecoMeta = manifest["ecosystem-master-infomercial"];
  const industryIds = [
    "service-dispatch-master-walkthrough",
    "vsl-auto-rescue",
    "vsl-food-delivery",
    "vsl-hvac-trades",
    "vsl-security-patrol",
    "vsl-mobile-detailing",
    "vsl-commercial-logistics",
  ];

  return (
    <>
      {ecoMeta && (
        <Composition
          id="ecosystem-master-infomercial"
          component={() => <EcosystemMasterInfomercial meta={ecoMeta} />}
          durationInFrames={ecoMeta.totalFrames}
          fps={30}
          width={1920}
          height={1080}
        />
      )}

      {industryIds.map((id) => {
        const meta = manifest[id];
        if (!meta) return null;
        return (
          <Composition
            key={id}
            id={id}
            component={() => <DispatchIndustryExplainer meta={meta} />}
            durationInFrames={meta.totalFrames}
            fps={30}
            width={1920}
            height={1080}
          />
        );
      })}
    </>
  );
};

registerRoot(EcosystemRoot);
