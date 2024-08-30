type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type PseudoTypes = {
  top: Pick<AllType, "name" | "color">;
  bottom: Pick<AllType, "position" | "weight">;
};

function compare(
  top: PseudoTypes["top"],
  bottom: PseudoTypes["bottom"]
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log(compare);
