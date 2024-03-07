import {ItemInterface} from "@/interfaces/item";


export const conjuredUpdateStrategy = (item: ItemInterface) => {
    item.sellIn -= 1;
    if (item.quality > 0) {
      item.quality -= 2;
    }
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality -= 2;
    }
    item.quality = Math.max(item.quality, 0);
}
