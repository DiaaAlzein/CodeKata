import {agedBrieUpdateStrategy} from "@/strategies/agedBrieUpdateStrategy";
import {concertUpdateStrategy} from "@/strategies/concertUpdateStrategy";
import {conjuredUpdateStrategy} from "@/strategies/conjuredUpdateStrategy";
import {normalItemUpdateStrategy} from "@/strategies/normalUpdateStrategy";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      switch (item.name) {
        case 'Aged Brie':
          agedBrieUpdateStrategy(item);
          return;
        case 'Backstage passes to a TAFKAL80ETC concert':
          concertUpdateStrategy(item);
          return;
        case 'Sulfuras, Hand of Ragnaros':
          // legendary no need to do anything
          return;
        case 'Conjured Mana Cake':
          conjuredUpdateStrategy(item);
          return;
        default:
          normalItemUpdateStrategy(item);
      }
    });
    return this.items;
  }
}
