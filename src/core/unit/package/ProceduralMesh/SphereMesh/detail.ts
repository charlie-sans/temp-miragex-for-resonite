import {
  UnitProp,
  generateUnitConfig,
  getMainProps,
  getMirrorProps,
  getWebProps,
} from "../../../../../lib/mirage-x/unit/common";

const detail = {
  code: "ProceduralMesh/SphereMesh",
  propsConfig: {
    name: UnitProp.String("Empty"),
    position: UnitProp.Float3([0, 0, 0]),
    scale: UnitProp.Float3([1, 1, 1]),
    rotation: UnitProp.Float3([0, 0, 0]),
  },
  children: "multi" as const,
};

export type MainProps = getMainProps<typeof detail>;
export type MirrorProps = getMirrorProps<typeof detail>;
export type WebProps = getWebProps<typeof detail>;
export const unitConfig = generateUnitConfig(detail);
