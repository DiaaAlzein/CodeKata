import {ItemInterface} from "@/interfaces/item";

export const agedBrieUpdateStrategy = (item: ItemInterface) => {
  item.sellIn -= 1;
  if (item.quality < 50) {
    item.quality += 1;
  }
  if (item.sellIn < 0 && item.quality < 50) {
    item.quality += 1;
  }
}
