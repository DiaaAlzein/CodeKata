import {ItemInterface} from "@/interfaces/item";

export const concertUpdateStrategy = (item: ItemInterface) => {
  if (item.quality < 50) {
    item.quality += 1;
    if (item.sellIn <= 10 && item.quality < 50) {
      item.quality += 1;
    }
    if (item.sellIn <= 5 && item.quality < 50) {
      item.quality += 1;
    }
  }
  item.sellIn -= 1;
  if (item.sellIn >= 0) return;
  item.quality = 0;
};
