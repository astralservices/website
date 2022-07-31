import { useCallback, useEffect, useRef, useState } from "react";
import * as hex from "./GLOBE_DATA/hexdata.json";
import * as font from "./GLOBE_DATA/Typo Grotesk Black_Regular.json";

export default function GlobeComponent({ data }: { data: any[] }) {
  const globeRef = useRef(null);
  const [Globe, SetGlobe] = useState<any>(null);

  useEffect(() => {
    async function loadGlobegl() {
      const { default: Globe } = await import("react-globe.gl");
      SetGlobe(Globe);
    }
    loadGlobegl();
  }, []);

  const color = useCallback(() => "#ffffff", []);
  const foregroundColor = useCallback(() => "#1b66b1", []);

  useEffect(() => {
    if (!globeRef || !globeRef.current) return;
    if (data.length === 0) return;
    if (!hex || hex.features.length === 0) return;
    if (!font) return;

    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.25;
    globeRef.current.controls().zoom = 5;
    globeRef.current.pointOfView({
      ...data.map((region) => {
        const name = region.prettyName.replace(/\d+/, "");

        return {
          name,
          lat: region.lat,
          lng: region.long,
        };
      })[0],
      altitude: 1.6,
    });
  }, [data, hex, font, Globe]);

  return (
    <div className="grid justify-center w-full grid-cols-1 gap-4 py-12 md:px-48 md:py-12">
      <h2 className="px-16 text-4xl text-center text-white font-black">
        Regions Around The World
      </h2>
      <div className="flex justify-center overflow-x-hidden">
        {Globe && (
          <Globe
            ref={globeRef}
            width={850}
            height={500}
            labelsData={data.map((region) => {
              const name = region.prettyName.replace(/\d+/, "");

              return {
                name,
                lat: region.lat,
                lng: region.long,
              };
            })}
            labelText={"name"}
            labelSize={1.6}
            labelTypeFace={font}
            labelColor={color}
            labelDotRadius={0.4}
            labelAltitude={0.01}
            hexPolygonsData={hex.features}
            hexPolygonResolution={3} //values higher than 3 makes it buggy
            hexPolygonMargin={0.62}
            hexPolygonColor={foregroundColor}
            backgroundColor={"#0F0F0F"}
          />
        )}
      </div>
    </div>
  );
}
