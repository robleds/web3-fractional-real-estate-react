import { Dispatch, SetStateAction } from "react"

export const applyFilters = (
  order: string,
  category: string,
  opportunities: any,
  setFilteredOps: any,
) => {
  let newOps = [...opportunities];

  if (order === "Mais recentes") {
    newOps = newOps.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  else if (order === "Mais investidores") {
    newOps = newOps.sort((a, b) => {
      const inv1 = b?.offer?.numShares || 0;
      const inv2 = a?.offer?.numShares || 0;

      return inv1 - inv2;
    });
  }
  else if (order === "Menos investidores") {
    newOps = newOps.sort((a, b) => {
      const inv1 = a?.offer?.numShares || 0;
      const inv2 = b?.offer?.numShares || 0;

      return inv1 - inv2;
    });
  }

  if (category === "Comercial") {
    newOps = newOps.filter(
      op => op?.type.toLowerCase().includes("comercial")
        || op?.title.toLowerCase().includes("comercial"));
  }
  else if (category === "Residencial") {
    newOps = newOps.filter(
      op => op?.type.toLowerCase().match(/residencial|hotel|casa/g)
        || op?.title.toLowerCase().match(/residencial|hotel|casa/g));
  }

  setFilteredOps([...newOps]);
};
