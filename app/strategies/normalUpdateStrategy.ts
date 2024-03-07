import {ItemInterface} from "@/interfaces/item";

export const normalItemUpdateStrategy = (item: ItemInterface) => {
    item.sellIn -= 1;
    if (item.quality > 0) {
      item.quality -= 1;
    }
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality -= 1;
    }
    item.quality = Math.max(item.quality, 0);
}
